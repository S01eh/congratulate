"use client";

import { useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "700", "800"],
});

export default function PermissionPage() {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    try {
      localStorage.removeItem("used"); // use localStorage.clear() to wipe everything
    } catch (e) {
      console.error(e);
    }
    setDone(true);
  };

  return (
    <div
      className={`${rubik.className} relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 text-white`}
      style={{
        background:
          "radial-gradient(1200px 700px at 50% 30%, #3a2a7a 0%, #1d1448 45%, #100b2b 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />

      <main className="card-in relative flex w-full max-w-md flex-col items-center rounded-[2rem] border border-white/15 bg-white/10 px-8 py-12 text-center shadow-2xl backdrop-blur-md">
        {/* Lock */}
        <div className="lock-float relative mb-8">
          <div className={`glow ${done ? "glow-on" : ""}`} />
          <svg viewBox="0 0 80 96" width="88" height="106" aria-hidden="true" className="relative">
            <defs>
              <linearGradient id="lockBody" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe08a" />
                <stop offset="100%" stopColor="#ff8fa3" />
              </linearGradient>
            </defs>
            <path
              className={`shackle ${done ? "shackle-open" : ""}`}
              d="M22 44 V28 a18 18 0 0 1 36 0 V44"
              fill="none"
              stroke="#e8e2ff"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <rect x="8" y="42" width="64" height="48" rx="12" fill="url(#lockBody)" />
            <circle cx="40" cy="62" r="6" fill="#2a1a3d" />
            <rect x="37.5" y="64" width="5" height="12" rx="2.5" fill="#2a1a3d" />
            <ellipse cx="22" cy="52" rx="4" ry="7" fill="#fff" opacity="0.35" />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {done ? "Тайёр!" : "Як имконияти дигар"}
        </h1>

        <p className="mt-4 max-w-xs text-base leading-relaxed text-white/85 sm:text-lg">
          {done
            ? "Иҷозат дода шуд. Акнун метавонед саҳифаро боз як бор тамошо кунед."
            : "Барои дубора тамошо кардани саҳифа, тугмаи поёнро пахш кунед."}
        </p>

        <button
          onClick={handleClick}
          disabled={done}
          className={`btn relative mt-10 rounded-full px-8 py-4 text-lg font-bold text-[#2a1a3d] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
            done
              ? "cursor-default bg-[#8ff0c0]"
              : "btn-pulse bg-gradient-to-r from-[#ffe08a] to-[#ff8fa3] hover:scale-105 active:scale-95"
          }`}
        >
          {done ? "✓ Иҷозат гирифта шуд" : "Имкони нав гирифтан"}
        </button>
      </main>

      <style jsx global>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.96); filter: blur(6px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes lockFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(255, 143, 163, 0.55); }
          100% { box-shadow: 0 0 0 22px rgba(255, 143, 163, 0); }
        }
        @keyframes glowPop {
          0% { transform: scale(0.4); opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .card-in { animation: cardIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .lock-float { animation: lockFloat 4s ease-in-out infinite; }
        .btn-pulse { animation: pulseRing 1.8s ease-out infinite; }
        .shackle {
          transform-origin: 58px 44px;
          transition: transform 0.6s cubic-bezier(0.3, 1.4, 0.5, 1);
        }
        .shackle-open { transform: translateY(-9px) rotate(28deg); }
        .glow {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(circle, #8ff0c0, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        .glow-on { animation: glowPop 0.9s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .card-in, .lock-float, .btn-pulse, .glow-on { animation: none !important; }
          .shackle { transition: none; }
        }
      `}</style>
    </div>
  );
}