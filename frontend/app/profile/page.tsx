"use client";

import React from "react";
import { MdOutlineChatBubbleOutline, MdOutlineAddAPhoto, MdOutlineModeEdit, MdOutlineVisibility } from "react-icons/md";
import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Profile() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased min-h-screen">

            {/* Container - fixed height with scroll */}
            <div className="flex flex-col items-center p-4 sm:p-8 w-full h-screen overflow-y-auto">
                <div className="w-full max-w-[1200px] flex flex-col gap-10">

                    {/* Header */}
                    <header className="flex flex-col items-center text-center gap-3">
                        <div className="flex items-center gap-3">
                            <span className="text-4xl text-[#3b82f6]">
                                <MdOutlineChatBubbleOutline />
                            </span>
                            <h2 className="text-2xl font-extrabold tracking-tight text-white">ChatX</h2>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Complete Your Profile
                        </h2>

                        <p className="text-gray-500 dark:text-[#bfdbfe] text-lg max-w-xl">
                            Let us get you set up. This is how you will appear to your friends and colleagues in chat rooms.
                        </p>
                    </header>

                    {/* Main Form + Preview */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center mt-4">

                        {/* Form */}
                        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 flex flex-col gap-6">

                            {/* Profile Picture */}
                            <div className="flex flex-col gap-3">
                                <label className="text-gray-900 dark:text-white text-base font-bold">Profile Picture</label>

                                <div className="flex items-center gap-6">
                                    <div className="relative group cursor-pointer">
                                        <div className="w-24 h-24 rounded-full bg-[#172554] border-2 border-dashed border-[#1e40af] flex items-center justify-center overflow-hidden hover:border-[#3b82f6] transition-colors duration-300">
                                            <span className="text-[#bfdbfe] text-3xl group-hover:text-[#3b82f6] transition-colors">
                                                <MdOutlineAddAPhoto />
                                            </span>
                                        </div>

                                        <div className="absolute bottom-0 right-0 bg-[#3b82f6] text-white p-1.5 rounded-full shadow-lg">
                                            <span className="text-sm font-bold">
                                                <MdOutlineModeEdit />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-medium dark:text-gray-200">Upload your avatar</p>
                                        <p className="text-xs text-gray-500 dark:text-[#bfdbfe]">
                                            Recommended size: 400x400px
                                        </p>
                                        <button className="text-[#3b82f6] text-sm font-bold hover:underline self-start mt-1">
                                            Choose File
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Username */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-900 dark:text-white text-base font-bold" htmlFor="username">
                                    Username
                                </label>

                                <div className="relative">
                                    <input
                                        id="username"
                                        type="text"
                                        value="alex_dev"
                                        placeholder="username"
                                        className="w-full bg-[#172554] border border-[#1e40af] text-white text-base rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent block p-4 pl-12 placeholder-[#bfdbfe] transition-all"
                                    />
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bfdbfe] font-medium text-lg">@</span>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3b82f6]">
                                        <IoMdCheckmarkCircleOutline />
                                    </span>
                                </div>

                                <p className="text-[#3b82f6] text-sm flex items-center gap-1 mt-1">
                                    <IoMdCheckmark className="text-sm" />
                                    Username is available
                                </p>
                            </div>

                            {/* About */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-900 dark:text-white text-base font-bold" htmlFor="about">
                                    About / Status
                                </label>

                                <textarea
                                    id="about"
                                    rows={4}
                                    placeholder="Hello! I'm new here..."
                                    defaultValue="Coding late into the night 🌙. Do not disturb unless it's pizza."
                                    className="w-full bg-[#172554] border border-[#1e40af] text-white text-base rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent block p-4 placeholder-[#bfdbfe] resize-none transition-all"
                                />

                                <p className="text-gray-500 dark:text-[#64748b] text-xs text-right">64/150 characters</p>
                            </div>

                            {/* Buttons */}
                            <div className="pt-4 flex items-center gap-4">
                                <button
                                    className="group relative inline-flex items-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-[#3b82f6]/20"
                                >
                                    Save &amp; Continue
                                </button>

                                <button className="px-6 py-4 text-[#bfdbfe] hover:text-white font-semibold transition-colors">
                                    Skip
                                </button>
                            </div>
                        </div>

                        {/* Live Preview */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0">
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[#bfdbfe]">
                                        <MdOutlineVisibility />
                                    </span>
                                    <h3 className="text-[#bfdbfe] font-medium uppercase tracking-wider text-sm">
                                        Live Preview
                                    </h3>
                                </div>

                                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-2xl p-6 sm:p-8 border border-[#1e40af] shadow-2xl relative overflow-hidden">

                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-50"></div>

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8]">
                                                <div
                                                    className="w-full h-full rounded-full bg-cover bg-center border-4 border-[#1e3a8a]"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg4MLMYHm4jNFM14MMYwWBmFeoJwNpVsI7KGdLrNDaO_jMU6MdhhGcsWrTGwwu_tofiQgrnsFHiYQb9vS_le1TRWwoxXti_QwEDvCJ1TV6w0Uh_JKZNBqHalr6FAVZViimfKQNUhgYvxrCMHdVS3CCqlf9UqbEaHitAvoKIA5NAo7Wpl5WYtt3awumJcj47R_OsdRTvatbz-rdmm2OXK8VOahxtJmHxrDbsigrIMJPHpThsX0Nil-Fi5AsoRfGxgyBA-lWzqFnrnhl')",
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#3b82f6] rounded-full border-4 border-[#1e3a8a]"></div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1">@alex_dev</h3>
                                        <p className="text-[#bfdbfe] text-sm mb-6">Member since 2023</p>

                                        <div className="bg-[#0f172a]/50 rounded-xl p-4 w-full border border-[#1e40af]/30 backdrop-blur-sm">
                                            <p className="text-gray-200 italic font-medium leading-relaxed">
                                                "Coding late into the night 🌙. Do not disturb unless it's pizza."
                                            </p>
                                        </div>

                                        <div className="flex gap-3 mt-6">
                                            <div className="px-3 py-1 rounded-full bg-[#1e40af]/30 border border-[#1e40af] text-xs text-[#bfdbfe] flex items-center gap-1">
                                                <span className="text-[14px]">code</span>
                                                Developer
                                            </div>

                                            <div className="px-3 py-1 rounded-full bg-[#1e40af]/30 border border-[#1e40af] text-xs text-[#bfdbfe] flex items-center gap-1">
                                                <span className="text-[14px]">public</span>
                                                Online
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-start gap-3 bg-[#3b82f6]/10 rounded-lg p-4 border border-[#3b82f6]/20">
                                    <span className="text-[#3b82f6] mt-0.5"><IoInformationCircleOutline /></span>
                                    <p className="text-sm text-[#bfdbfe]">
                                        <span className="text-[#3b82f6] font-bold">Pro Tip:</span> Using a real photo helps
                                        your team recognize you instantly. You can change this later in settings.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}