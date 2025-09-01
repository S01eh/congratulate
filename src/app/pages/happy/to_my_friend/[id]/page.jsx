"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BirthdayPage() {
  const [showContent, setShowContent] = useState(false);
  const router = useRouter()
  const pathname = usePathname();
  const parts = pathname.split("/");
  const name = parts[parts.length - 1];

  useEffect(() => {
    if (localStorage.getItem("used")) {
      router.push("/pages/error");
    } else {
      localStorage.setItem("used", "used_once");
    }
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Floating Balloons */}
        <div
          className="absolute top-10 left-10 w-8 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <div className="w-1 h-6 bg-gray-600 mx-auto"></div>
        </div>
        <div
          className="absolute top-20 right-16 w-10 h-14 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "2.5s" }}
        >
          <div className="w-1 h-8 bg-gray-600 mx-auto"></div>
        </div>
        <div
          className="absolute top-32 left-1/4 w-6 h-10 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        >
          <div className="w-1 h-5 bg-gray-600 mx-auto"></div>
        </div>
        <div
          className="absolute top-16 right-1/3 w-9 h-13 bg-gradient-to-b from-green-400 to-green-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2.8s" }}
        >
          <div className="w-1 h-7 bg-gray-600 mx-auto"></div>
        </div>

        {/* Pulsing Confetti Pieces */}
        <div
          className="absolute top-1/4 left-1/5 w-3 h-3 bg-pink-500 rotate-45 animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-6 bg-yellow-400 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-4 h-2 bg-blue-500 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/5 w-3 h-3 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-2 h-4 bg-red-400 rotate-12 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/5 right-1/6 w-3 h-3 bg-green-500 rotate-45 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Floating Stars */}
        <div
          className="absolute top-1/6 left-2/3 text-yellow-300 text-2xl animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-2/5 right-1/8 text-yellow-200 text-xl animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-3/5 left-1/8 text-yellow-400 text-lg animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4.5s" }}
        >
          ⭐
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-yellow-300 text-2xl animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        >
          ✨
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8 sm:mb-12">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl transition-all duration-1000 ease-out transform ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
            style={{
              animation: showContent
                ? "textRiseWithBurst 1.5s ease-out 0.5s both"
                : "none",
            }}
          >
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent filter drop-shadow-lg animate-pulse">
              Зодрӯзат Мубарак
            </span>
          </h1>
          <div
            className={`text-5xl sm:text-7xl md:text-8xl mt-4 transition-all duration-1000 ease-out transform ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
            style={{
              animation: showContent
                ? "textRiseWithBurst 1.5s ease-out 0.8s both, bounce 2s ease-in-out 2s infinite"
                : "none",
            }}
          >
            🎉
          </div>
        </div>

        <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center">
          <h2
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl transition-all duration-1000 ease-out transform ${
              showContent
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-16 opacity-0 scale-75"
            }`}
            style={{
              animation: showContent
                ? "textRiseWithBurst 1.5s ease-out 1.2s both"
                : "none",
            }}
          >
            <span className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              {name}!
            </span>
          </h2>
        </div>

        <div
          className={`mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 text-2xl sm:text-3xl md:text-4xl transition-all duration-1000 ease-out transform ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          style={{
            animation: showContent
              ? "textRiseWithBurst 1.5s ease-out 1.5s both"
              : "none",
          }}
        >
          <span className="animate-bounce" style={{ animationDelay: "2s" }}>
            🎂
          </span>
          <span className="animate-bounce" style={{ animationDelay: "2.2s" }}>
            🎈
          </span>
          <span className="animate-bounce" style={{ animationDelay: "2.4s" }}>
            🎁
          </span>
          <span className="animate-bounce" style={{ animationDelay: "2.6s" }}>
            🎊
          </span>
          <span className="animate-bounce" style={{ animationDelay: "2.8s" }}>
            🥳
          </span>
        </div>

        <div
          className={`mt-8 sm:mt-12 max-w-2xl transition-all duration-1000 ease-out transform ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          style={{
            animation: showContent
              ? "textRiseWithBurst 1.5s ease-out 1.8s both"
              : "none",
          }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed drop-shadow-lg">
            Умедворам, ки рӯзи махсуси шумо пур аз хушбахтӣ, ханда ва ҳама
            чизҳои дӯстдоштаатон бошад!
          </p>
        </div>
      </div>

      {/* Additional Floating Elements for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mobile-optimized decorations */}
        <div className="sm:hidden">
          <div
            className="absolute top-4 right-4 w-6 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "3s" }}
          >
            <div className="w-0.5 h-4 bg-gray-600 mx-auto"></div>
          </div>
          <div
            className="absolute bottom-20 left-4 w-5 h-7 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full animate-bounce"
            style={{ animationDelay: "2.5s", animationDuration: "2.5s" }}
          >
            <div className="w-0.5 h-3 bg-gray-600 mx-auto"></div>
          </div>
        </div>

        {/* Tablet and Desktop additional decorations */}
        <div className="hidden sm:block">
          <div
            className="absolute bottom-32 right-20 w-8 h-11 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full animate-bounce"
            style={{ animationDelay: "3s", animationDuration: "3.2s" }}
          >
            <div className="w-1 h-6 bg-gray-600 mx-auto"></div>
          </div>
          <div
            className="absolute bottom-40 left-20 w-7 h-10 bg-gradient-to-b from-rose-400 to-rose-600 rounded-full animate-bounce"
            style={{ animationDelay: "1.8s", animationDuration: "2.7s" }}
          >
            <div className="w-1 h-5 bg-gray-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-200 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Confetti Explosions */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`left-${i}`}
            className={`absolute w-2 h-2 ${
              i % 5 === 0
                ? "bg-yellow-400"
                : i % 5 === 1
                ? "bg-pink-500"
                : i % 5 === 2
                ? "bg-blue-500"
                : i % 5 === 3
                ? "bg-green-500"
                : "bg-purple-500"
            } ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `confettiExplodeLeft 2s ease-out ${
                Math.random() * 2
              }s infinite`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`right-${i}`}
            className={`absolute w-2 h-2 ${
              i % 5 === 0
                ? "bg-red-400"
                : i % 5 === 1
                ? "bg-orange-500"
                : i % 5 === 2
                ? "bg-cyan-500"
                : i % 5 === 3
                ? "bg-lime-500"
                : "bg-rose-500"
            } ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : ""}`}
            style={{
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `confettiExplodeRight 2s ease-out ${
                Math.random() * 2
              }s infinite`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          ></div>
        ))}
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes confettiExplodeLeft {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-50px) translateY(-100px) rotate(180deg)
              scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px) translateY(200px) rotate(360deg)
              scale(0.5);
            opacity: 0;
          }
        }

        @keyframes confettiExplodeRight {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(0);
            opacity: 1;
          }
          50% {
            transform: translateX(50px) translateY(-100px) rotate(-180deg)
              scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(200px) rotate(-360deg)
              scale(0.5);
            opacity: 0;
          }
        }

        @keyframes textRiseWithBurst {
          0% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
          30% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.8;
          }
          60% {
            transform: translateY(5px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
