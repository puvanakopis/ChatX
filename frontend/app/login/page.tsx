"use client";

import { useState } from "react";
import LoginCard from "@/container/login/PhoneCart";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setError(false);

        setTimeout(() => {
            setLoading(false);
            setError(true);
        }, 1500);
    };

    return (
        <main className="radial-gradient-bg min-h-screen flex flex-col items-center justify-center relative" style={{ backgroundColor: "#020617", color: "#3b82f6", fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-[480px] w-full z-10">
                <LoginCard
                    loading={loading}
                    error={error}
                    setError={setError}
                    handleLogin={handleLogin}
                />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[60%] w-[40%] h-[40%] bg-[#3b82f6]/10 rounded-full blur-[120px]"></div>
                </div>
                <p className="mt-8 text-center text-xs text-gray-500">
                    By continuing, you agree to our <a className="underline hover:text-gray-300" href="#">Terms of Service</a> and <a className="underline hover:text-gray-300" href="#">Privacy Policy</a>.
                </p>
            </div>
        </main>
    );
}
