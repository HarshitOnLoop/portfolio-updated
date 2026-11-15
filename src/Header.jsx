import { useEffect, useState } from "react";
import Lanyard from "./Lanyard";
import "./Header.css";

/* ---------- Your content: edit these ---------- */
const profile = {
  name: "Harshit Sharma",
  tagline: "Frontend Developer with an artist’s eye",
  role: "Frontend Developer",
  location: "Chandigarh, India",
  email: "harshitonloop@gmail.com",
};

const banner = {
  src: "/banner.jpg", // put your image in the public/ folder
  caption: "painting · title", // set to "" to hide
};

const buttons = [
  { label: "github", href: "#", icon: "github" },
  { label: "linkedin", href: "#", icon: "linkedin" },
  { label: "resume", href: "#", icon: "file", external: true },
  { label: "before you hire me", href: "#", icon: "help" },
];

/* ---------- Icons ---------- */
const ICONS = {
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />,
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
};

function Icon({ name, size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/* Live local time, e.g. "10:42 am · wednesday" */
function useClock() {
  const read = () => {
    const now = new Date();
    const time = now
      .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      .toLowerCase();
    const day = now.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
    return `${time} · ${day}`;
  };
  const [text, setText] = useState(read);
  useEffect(() => {
    const id = setInterval(() => setText(read()), 30000);
    return () => clearInterval(id);
  }, []);
  return text;
}

/* ---------- Header ---------- */
export default function Header() {
  const clock = useClock();

  return (
    <header className="profile" id="home">
      {/* Banner */}
      <div className="banner">
        <img
          src={banner.src}
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        {banner.caption && <span className="banner-caption">{banner.caption}</span>}
      </div>
      <div className="divider" aria-hidden="true" />

      <div className="profile-hero">
        <div className="lanyard-slot">
          <Lanyard
            frontImage={" "}
            backImage="/card-back.png"
            strapImage="/band.png"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.5}
            anchor="center"
            strapLength={0.9}
            strapColor="#111111"
            strapWidth={0.5}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive
            intro
          />
        </div>

        <div className="profile-intro">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-tagline">{profile.tagline}</p>
        </div>
      </div>

      <div className="profile-body">
        <ul className="profile-info">
          <li>
            <Icon name="code" />
            <span>{profile.role}</span>
          </li>
          <li>
            <Icon name="clock" />
            <span>{clock}</span>
          </li>
          <li>
            <Icon name="pin" />
            <span>{profile.location}</span>
          </li>
          <li>
            <Icon name="mail" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>

        <div className="profile-buttons">
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              className="pill"
              {...(b.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon name={b.icon} />
              {b.label}
              {b.external && <Icon name="arrow" size={11} />}
            </a>
          ))}
        </div>
      </div>

      <div className="divider" aria-hidden="true" />
    </header>
  );
}