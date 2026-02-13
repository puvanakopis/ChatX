"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function OTPVerificationCard({ phoneNumber = "+94 77 123 4567", onVerify, onBackToPhone }) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text/plain").slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const digits = pastedData.split("");
        const newOtp = [...otp];
        digits.forEach((digit, i) => { if (i < 6) newOtp[i] = digit; });
        setOtp(newOtp);

        const nextEmptyIndex = newOtp.findIndex(d => d === "");
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex]?.focus();
        } else {
            inputRefs.current[5]?.focus();
        }
    };

    useEffect(() => {
        if (timer === 0) {
            setIsResendDisabled(false);
            return;
        }
        const interval = setInterval(() => setTimer(t => t - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleResendCode = () => {
        setTimer(30);
        setIsResendDisabled(true);
        console.log("Resending OTP to", phoneNumber);
        alert(`OTP resent to ${phoneNumber}`);
    };

    const handleVerifyClick = () => {
        const code = otp.join("");
        if (code.length === 6) {
            onVerify?.(code);
        } else {
            alert("Please enter all 6 digits");
        }
    };

    return (
        <div className="max-w-[550px] bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden p-8 sm:p-10 w-full">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a] border border-[#3b82f6]/30 mb-4 text-[#3b82f6] shadow-lg">
                    <MdOutlineVerifiedUser className="text-3xl" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Enter Verification Code</h1>
                <p className="text-gray-400 text-base">
                    We&#39;ve sent a 6-digit code to <span className="text-white font-semibold bg-[#1e293b] px-2 py-1 rounded-md">{phoneNumber}</span>
                </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); handleVerifyClick(); }}>
                <div className="flex justify-center gap-2 sm:gap-3">
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputRefs.current[i] = el)}
                            id={`otp-${i}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={i === 0 ? handlePaste : undefined}
                            className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-lg border border-[#1e293b] bg-[#0f172a] text-center text-2xl sm:text-3xl font-bold text-white placeholder-gray-500 focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all hover:border-gray-500 shadow-sm"
                            autoFocus={i === 0}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
                    <span>Didn&#39;t receive the code?</span>
                    <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={isResendDisabled}
                        className={`font-semibold ${isResendDisabled ? 'text-gray-500 cursor-not-allowed' : 'text-[#3b82f6] hover:text-[#2563eb] hover:underline transition-all'}`}
                    >
                        Resend OTP
                    </button>
                    {isResendDisabled && (
                        <span className="font-mono font-medium text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-0.5 rounded text-xs">
                            {`00:${timer.toString().padStart(2, "0")}`}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="group relative flex items-center justify-center w-full h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-bold text-base rounded-lg transition-all duration-200 transform active:scale-[0.98] shadow-lg shadow-[#3b82f6]/25 mt-4"
                >
                    <span className="mr-2">Verify Account</span>
                    <IoMdArrowRoundForward className="text-lg group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    type="button"
                    onClick={onBackToPhone}
                    className="group flex items-center justify-center w-full h-10 text-sm font-semibold text-gray-400 hover:text-white transition-all gap-1 hover:gap-2"
                >
                    <IoMdArrowRoundBack className="text-base group-hover:-translate-x-1 transition-transform" />
                    Change Phone Number
                </button>
            </form>
        </div>
    );
}