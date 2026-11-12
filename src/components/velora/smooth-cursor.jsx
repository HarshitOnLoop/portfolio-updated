import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import "./smooth-cursor.css";

const FINE_POINTER = "(pointer: fine)";
const SPRING = { stiffness: 300, damping: 28, mass: 0.6 };

function subscribeFinePointer(onChange) {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia(FINE_POINTER).matches;
}

function getServerSnapshot() {
  return false;
}

export function SmoothCursor({
  container,
  hideNativeCursor = true,
  interactiveSelector = "a, button, [role=button], input, select, textarea, label, summary",
  dotClassName = "",
  ringClassName = "",
}) {
  const finePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getServerSnapshot
  );
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const shown = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, SPRING);
  const ringY = useSpring(y, SPRING);

  useEffect(() => {
    if (!finePointer) return undefined;

    const root = container ? container.current : document.documentElement;
    if (!root) return undefined;

    const hide = () => {
      shown.current = false;
      setVisible(false);
      setHovering(false);
      setPressed(false);
    };

    const move = (event) => {
      if (event.pointerType !== "mouse") {
        hide();
        return;
      }

      x.set(event.clientX);
      y.set(event.clientY);

      if (!shown.current) {
        ringX.jump(event.clientX);
        ringY.jump(event.clientY);
        shown.current = true;
        setVisible(true);
      }

      const target = event.target;
      setHovering(Boolean(target?.closest?.(interactiveSelector)));
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const out = (event) => {
      if (!event.relatedTarget) hide();
    };

    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerdown", down);
    root.addEventListener("pointerleave", hide);
    window.addEventListener("pointerup", up);
    window.addEventListener("blur", hide);
    document.addEventListener("pointerout", out);

    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerdown", down);
      root.removeEventListener("pointerleave", hide);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      document.removeEventListener("pointerout", out);
    };
  }, [finePointer, container, interactiveSelector, x, y, ringX, ringY]);

  useEffect(() => {
    const root = container ? container.current : document.documentElement;
    if (!root || !visible || !hideNativeCursor) return undefined;

    root.setAttribute("data-smooth-cursor", "");
    return () => root.removeAttribute("data-smooth-cursor");
  }, [visible, hideNativeCursor, container]);

  if (!finePointer) return null;

  const transition = reducedMotion ? { duration: 0 } : { duration: 0.2 };
  const scale = (hovering ? 1.8 : 1) * (pressed ? 0.8 : 1);
  const ringClasses = [
    "smooth-cursor-ring",
    hovering && "is-hovering",
    ringClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return createPortal(
    <div aria-hidden="true" className="smooth-cursor">
      <motion.div
        style={reducedMotion ? { x, y } : { x: ringX, y: ringY }}
        className="smooth-cursor-position"
      >
        <motion.div
          initial={false}
          animate={{ scale, opacity: visible ? 1 : 0 }}
          transition={transition}
          className={ringClasses}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0.5 : 1,
        }}
        transition={transition}
        className={`smooth-cursor-position smooth-cursor-dot ${dotClassName}`}
      />
    </div>,
    document.body
  );
}
