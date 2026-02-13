"use client";

import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineLockOpen } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function PhoneCart({ loading, error, setError, handleLogin }) {
    return (
        <div className="max-w-[480px] bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden p-8 sm:p-10 relative">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1e293b]/20 border border-[#1e293b] mb-4 text-[#3b82f6]">
                    <span className="material-symbols-outlined text-2xl"><MdOutlineLockOpen /></span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400 text-base">
                    Enter your phone number to receive a one-time password for secure login.
                </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-300 ml-1">Phone Number</label>
                    <div className="flex gap-3">
                        <div className="relative w-[120px]">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-xl">🇱🇰</span>
                            </div>
                            <select className="appearance-none w-full bg-[#0f172a] border border-[#1e293b] text-white text-base rounded-lg h-12 pl-10 pr-8 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all cursor-pointer font-medium hover:border-gray-500">
                                <option value="+94" selected>+94</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+91">+91</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400">
                                <span className="material-symbols-outlined text-xl"><RiArrowDropDownLine /></span>
                            </div>
                        </div>
                        <input
                            className={`flex-1 w-full bg-[#0f172a] border ${error ? "border-[#ef4444] ring-1 ring-[#ef4444]" : "border-[#1e293b]"} text-white text-base rounded-lg h-12 px-4 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] placeholder-gray-500 transition-all font-medium hover:border-gray-500`}
                            placeholder="77 123 4567"
                            type="tel"
                            onFocus={() => setError(false)}
                        />
                    </div>
                </div>

                {error && (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#ef4444]/20 border border-[#ef4444]/50 text-[#ef4444]/80 text-sm animate-pulse">
                        <span className="material-symbols-outlined text-lg mt-0.5 text-[#ef4444]"><RiErrorWarningLine /></span>
                        <div>
                            <p className="font-bold">Invalid Phone Number</p>
                            <p className="text-[#ef4444]/60 text-xs mt-0.5">
                                Please check the country code and try again.
                            </p>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="group relative flex items-center justify-center w-full h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-base rounded-lg transition-all duration-200 transform active:scale-[0.98]"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="material-symbols-outlined animate-spin text-2xl"><AiOutlineLoading3Quarters /></span>
                    ) : (
                        <>
                            <span className="mr-2">Send OTP</span>
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                <IoMdArrowRoundForward />
                            </span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}