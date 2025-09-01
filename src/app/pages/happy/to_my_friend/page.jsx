"use client"
import React, { useEffect, useState } from "react";

const ToMyFriend = () => {
  const [showName, setShowName] = useState(false);
  const name = "Muhammadsoleh"; // 🎂 Change this to your friend's name

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
      {/* 🎉 Happy Birthday Message */}
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-pulse z-10">
        Happy Birthday 🎉
      </h1>

      {/* 📝 Animated Name */}
      <h2
        className={`text-2xl md:text-4xl font-bold mt-6 transform transition-all duration-1000 ${
          showName ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {name}
      </h2>

      {/* 🎈 Balloons */}
      <div className="absolute top-10 left-10 w-10 h-16 bg-red-400 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-10 h-16 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-20 left-1/3 w-10 h-16 bg-green-400 rounded-full animate-bounce delay-500"></div>

      {/* ✨ Confetti */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default ToMyFriend;
