"use client";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "700", "800"],
});

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const TEXT = "як бор кор мекунад :(";

export default function ErrorPage() {
  return (
    <div
      className={`${rubik.className} relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12 text-white`}
      style={{
        background:
          "radial-gradient(1200px 700px at 50% 30%, #3a2a7a 0%, #1d1448 45%, #100b2b 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />

      {/* TV */}
      <div className="tv-in relative w-[300px] sm:w-[380px]">
        {/* Antenna */}
        <div className="relative mx-auto h-16 w-24">
          <span className="ant ant-l" />
          <span className="ant ant-r" />
          <span className="absolute bottom-0 left-1/2 h-4 w-12 -translate-x-1/2 rounded-t-full bg-[#b32d44]" />
        </div>

        {/* Body */}
        <div
          className="relative flex gap-3 rounded-[2rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
          style={{ background: "linear-gradient(160deg, #ff8fa3, #e5384f 70%)" }}
        >
          {/* Screen */}
          <div className="relative aspect-[4/3] flex-1 overflow-hidden rounded-2xl border-4 border-[#2a1a3d] bg-[#0b0820] shadow-inner">
            <div className="noise absolute inset-0" style={{ backgroundImage: NOISE }} />
            <div className="scanlines absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
              <span
                className="glitch text-lg font-extrabold leading-snug sm:text-2xl"
                data-text={TEXT}
              >
                {TEXT}
              </span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/15 via-transparent to-transparent" />
          </div>

          {/* Controls */}
          <div className="flex w-14 flex-col items-center justify-between py-1 sm:w-16">
            <div className="flex flex-col gap-3">
              <span className="knob" />
              <span className="knob" />
            </div>
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="block h-1 w-9 rounded-full bg-[#7d1d30]/70 sm:w-10" />
              ))}
            </div>
            <span className="led block h-2.5 w-2.5 rounded-full bg-[#ffe08a]" />
          </div>
        </div>

        {/* Feet */}
        <div className="mx-auto flex w-3/4 justify-between">
          <span className="h-3 w-10 rounded-b-xl bg-[#7d1d30]" />
          <span className="h-3 w-10 rounded-b-xl bg-[#7d1d30]" />
        </div>
      </div>

      {/* Message */}
      <div className="msg-in mt-10 max-w-md rounded-3xl border border-white/15 bg-white/10 px-6 py-5 text-center shadow-2xl backdrop-blur-md">
        <p className="text-base leading-relaxed text-white/90 sm:text-lg">
          Ин саҳифа танҳо як бор кор мекунад. Шумо аллакай як бор истифода
          кардед. Агар боз истифода бурдан хоҳед, нависед:
        </p>
        <a
          href="https://t.me/Msoleh27"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffe08a] to-[#ff8fa3] px-6 py-2.5 font-bold text-[#2a1a3d] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95"
        >
          Telegram
        </a>
      </div>

      <style jsx global>{`
        @keyframes tvIn {
          from { opacity: 0; transform: translateY(40px) scale(0.92); }
          to { opacity: 1; transform: none; }
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes noiseShift {
          0% { background-position: 0 0; }
          25% { background-position: -40px 25px; }
          50% { background-position: 30px -35px; }
          75% { background-position: -20px -10px; }
          100% { background-position: 10px 40px; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.35; }
          52% { opacity: 0.6; }
        }
        @keyframes glitchA {
          0%, 90%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
          92% { clip-path: inset(20% 0 55% 0); transform: translate(-3px, 1px); }
          95% { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
        }
        @keyframes glitchB {
          0%, 90%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
          93% { clip-path: inset(50% 0 20% 0); transform: translate(3px, 1px); }
          96% { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0); }
        }
        @keyframes antL {
          0%, 100% { transform: rotate(-32deg); }
          50% { transform: rotate(-26deg); }
        }
        @keyframes antR {
          0%, 100% { transform: rotate(30deg); }
          50% { transform: rotate(36deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .tv-in { animation: tvIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .msg-in { animation: msgIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s both; }
        .noise {
          opacity: 0.5;
          mix-blend-mode: screen;
          animation: noiseShift 0.4s steps(4) infinite, flicker 2.5s ease-in-out infinite;
        }
        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35) 0,
            rgba(0, 0, 0, 0.35) 1px,
            transparent 1px,
            transparent 3px
          );
        }
        .glitch {
          position: relative;
          color: #fff;
          text-shadow: 0 0 12px rgba(255, 143, 163, 0.8);
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
        }
        .glitch::before { color: #5bd6ff; animation: glitchA 3s infinite; }
        .glitch::after { color: #ff5d8f; animation: glitchB 3s infinite; }
        .ant {
          position: absolute;
          bottom: 14px;
          left: 50%;
          width: 3px;
          height: 52px;
          margin-left: -1.5px;
          background: #d8d2e8;
          border-radius: 2px;
          transform-origin: bottom center;
        }
        .ant::after {
          content: "";
          position: absolute;
          top: -4px;
          left: -3px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ffe08a;
        }
        .ant-l { animation: antL 4s ease-in-out infinite; }
        .ant-r { animation: antR 5s ease-in-out infinite; }
        .knob {
          display: block;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #ffe9b0, #d9962b);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
        }
        .led { animation: blink 1.6s ease-in-out infinite; box-shadow: 0 0 8px #ffe08a; }
        @media (prefers-reduced-motion: reduce) {
          .tv-in, .msg-in, .noise, .glitch::before, .glitch::after,
          .ant-l, .ant-r, .led { animation: none !important; }
        }
      `}</style>
    </div>
  );
}