"use client";

import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdOutlineCelebration } from "react-icons/md";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";

export default function Home() {
  return (
    <div className="radial-gradient-bg min-h-screen flex flex-col items-center justify-center relative" style={{ backgroundColor: "#020617", color: "#3b82f6", fontFamily: "'Manrope', sans-serif" }}>
      {/* Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-[#3b82f6]"><MdOutlineChatBubbleOutline /></span>
            <h2 className="text-2xl font-extrabold tracking-tight text-white">ChatX</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="z-10 w-full max-w-2xl px-6 text-center">
        {/* Profile Circle with Floating Icons */}
        <div className="relative mb-12 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#3b82f6] to-blue-400 p-1 glow-effect">
            <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-7xl sm:text-9xl text-[#3b82f6]/80">
                <MdOutlinePerson />
              </span>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-4 -left-4 floating-icon">
            <div className="bg-blue-500/20 backdrop-blur-md p-3 rounded-2xl border border-blue-400/30">
              <span className="material-symbols-outlined text-3xl text-yellow-400 fill-1">
                <MdOutlineStarRate />
              </span>
            </div>
          </div>

          <div className="absolute top-12 -right-8 floating-icon">
            <div className="bg-pink-500/20 backdrop-blur-md p-3 rounded-2xl border border-pink-400/30">
              <span className="material-symbols-outlined text-3xl text-pink-500 fill-1">
                <MdFavoriteBorder />
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-12 floating-icon">
            <div className="bg-purple-500/20 backdrop-blur-md p-3 rounded-2xl border border-purple-400/30">
              <span className="material-symbols-outlined text-3xl text-purple-400">
                <MdOutlineCelebration />
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 -right-4 floating-icon">
            <div className="bg-green-500/20 backdrop-blur-md p-3 rounded-2xl border border-green-400/30">
              <span className="material-symbols-outlined text-3xl text-green-400 fill-1">
                <MdOutlineAutoAwesome />
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Welcome to ChatX !
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
            Your workspace is ready. Experience real-time messaging with the most secure
            platform designed for professionals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="group relative inline-flex items-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-[#3b82f6]/20">
            <span>Get Started</span>
            <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">
              <IoMdArrowRoundForward />
            </span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-8 w-full text-center">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} ChatX Inc. All rights reserved. Built for high-performance teams.
        </p>
      </footer>
    </div>
  );
}