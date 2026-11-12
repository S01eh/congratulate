"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "700", "800"],
});

// Balloons rest at the edges so they never cover the text
const BALLOONS = [
  { x: "4%", y: "10%", s: 78, c: ["#ff8fa3", "#e5384f"], d: 0.2, sway: 5.5 },
  { x: "15%", y: "46%", s: 60, c: ["#ffe08a", "#f5a623"], d: 0.6, sway: 6.5 },
  { x: "6%", y: "70%", s: 70, c: ["#8ff0c0", "#1fb978"], d: 1.0, sway: 5 },
  { x: "84%", y: "8%", s: 66, c: ["#9fd4ff", "#3b8be8"], d: 0.4, sway: 6 },
  { x: "92%", y: "42%", s: 80, c: ["#d2b6ff", "#8a5bf0"], d: 0.8, sway: 7 },
  { x: "80%", y: "68%", s: 58, c: ["#ffb3d9", "#e0489b"], d: 1.2, sway: 5.8 },
];

const CONFETTI_COLORS = ["#ff8fa3", "#ffe08a", "#8ff0c0", "#9fd4ff", "#d2b6ff"];

function Balloon({ x, y, s, c, d, sway, id }) {
  return (
    <div
      className="balloon-rise absolute"
      style={{ left: x, top: y, width: s, animationDelay: `${d}s` }}
    >
      <div
        className="balloon-sway"
        style={{ animationDuration: `${sway}s`, animationDelay: `${d}s` }}
      >
        <svg viewBox="0 0 60 110" width="100%" aria-hidden="true">
          <defs>
            <radialGradient id={`b${id}`} cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor={c[0]} />
              <stop offset="100%" stopColor={c[1]} />
            </radialGradient>
          </defs>
          {/* string */}
          <path
            d="M30 78 C24 90, 36 98, 30 110"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1"
          />
          {/* body */}
          <path
            d="M30 2 C10 2 2 20 2 36 C2 56 18 72 30 76 C42 72 58 56 58 36 C58 20 50 2 30 2 Z"
            fill={`url(#b${id})`}
          />
          {/* knot */}
          <path d="M30 75 L25 82 L35 82 Z" fill={c[1]} />
          {/* highlight */}
          <ellipse
            cx="19"
            cy="20"
            rx="5"
            ry="9"
            fill="white"
            opacity="0.45"
            transform="rotate(25 19 20)"
          />
        </svg>
      </div>
    </div>
  );
}

export default function BirthdayPage() {
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const name = decodeURIComponent(parts[parts.length - 1] || "");

  useEffect(() => {
    if (localStorage.getItem("used")) {
      router.push("/pages/error");
    } else {
      localStorage.setItem("used", "used_once");
    }

    // Random values are created on the client only, so there is no hydration mismatch
    setConfetti(
      Array.from({ length: 36 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        delay: Math.random() * 8,
        duration: 7 + Math.random() * 6,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        round: i % 3 === 0,
      }))
    );

    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const reveal = (delay) =>
    showContent ? { animation: `reveal 1s cubic-bezier(.2,.8,.2,1) ${delay}s both` } : { opacity: 0 };

  return (
    <div
      className={`${rubik.className} relative min-h-screen overflow-hidden text-white`}
      style={{
        background:
          "radial-gradient(1200px 700px at 50% 35%, #3a2a7a 0%, #1d1448 45%, #100b2b 100%)",
      }}
    >
      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-pink-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      {/* Falling confetti */}
      <div className="pointer-events-none absolute inset-0">
        {confetti.map((p, i) => (
          <span
            key={i}
            className="confetti absolute top-0 block"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.round ? p.size : p.size * 0.5,
              background: p.color,
              borderRadius: p.round ? "50%" : 2,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Balloons */}
      <div className="pointer-events-none absolute inset-0">
        {BALLOONS.map((b, i) => (
          <Balloon key={i} id={i} {...b} />
        ))}
      </div>

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl sm:text-7xl" style={reveal(0.2)}>
          <span className="inline-block animate-[wobble_3s_ease-in-out_infinite]">🎂</span>
        </div>

        <h1
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          style={reveal(0.5)}
        >
          Зодрӯзат Мубарак
        </h1>

        <h2
          className="shimmer mt-4 text-5xl font-extrabold sm:text-7xl md:text-8xl"
          style={reveal(0.9)}
        >
          {name}!
        </h2>

        <div
          className="mt-10 max-w-xl rounded-3xl border border-white/15 bg-white/10 px-6 py-5 shadow-2xl backdrop-blur-md sm:px-8 sm:py-6"
          style={reveal(1.3)}
        >
          <p className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Умедворам, ки рӯзи махсуси шумо пур аз хушбахтӣ, ханда ва ҳама
            чизҳои дӯстдоштаатон бошад!
          </p>
        </div>
      </main>

      <style jsx global>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(32px) scale(0.96); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes rise {
          from { transform: translateY(120vh); }
          to { transform: translateY(0); }
        }
        @keyframes sway {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          100% { transform: translateY(110vh) rotate(540deg); opacity: 0.9; }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(-8deg) scale(1); }
          50% { transform: rotate(8deg) scale(1.1); }
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        .balloon-rise {
          animation: rise 2.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .balloon-sway {
          transform-origin: 50% 100%;
          animation: sway 6s ease-in-out infinite;
        }
        .confetti {
          animation: fall 9s linear infinite;
        }
        .shimmer {
          background: linear-gradient(90deg, #ffe08a, #ff8fa3, #d2b6ff, #9fd4ff, #ffe08a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: reveal 1s cubic-bezier(.2,.8,.2,1) 0.9s both, shimmer 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .balloon-rise, .balloon-sway, .confetti, .shimmer { animation: none !important; }
        }
      `}</style>
    </div>
  );
}