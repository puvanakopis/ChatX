"use client";

import { useState } from "react";
import PhoneCart from "@/container/login/PhoneCart";
import OTPVerificationCard from "@/container/login/OTPVerificationCard";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [otpStep, setOtpStep] = useState(false);
    const [userPhone, setUserPhone] = useState("+94 77 123 4567");

    const handleLogin = () => {
        setLoading(true);
        setError(false);

        setTimeout(() => {
            setLoading(false);
            setOtpStep(true);
        }, 1500);
    };

    const handleVerifyOTP = (otp) => {
        console.log("Entered OTP:", otp);
        alert(`Verifying OTP: ${otp}`);
    };

    const handleBackToPhone = () => {
        setOtpStep(false);
    };

    return (
        <main
            className="radial-gradient-bg min-h-screen flex flex-col items-center justify-center relative"
            style={{ backgroundColor: "#020617", color: "#3b82f6", fontFamily: "'Manrope', sans-serif" }}
        >
            {/* Background blur circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[60%] w-[40%] h-[40%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="flex flex-col justify-center items-center w-full z-10 relative">
                {!otpStep ? (
                    <PhoneCart
                        loading={loading}
                        error={error}
                        setError={setError}
                        handleLogin={handleLogin}
                    />
                ) : (
                    <OTPVerificationCard
                        phoneNumber={userPhone}
                        onVerify={handleVerifyOTP}
                        onBackToPhone={handleBackToPhone}
                    />
                )}

                <p className="mt-8 text-center text-xs text-gray-500">
                    By continuing, you agree to our <a className="text-blue-500 hover:text-gray-300" href="#">Terms of Service</a> and <a className="text-blue-500 hover:text-gray-300" href="#">Privacy Policy</a>.
                </p>
            </div>
        </main>
    );
}