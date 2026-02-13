"use client";

import { MdOutlineChatBubbleOutline } from "react-icons/md";

export default function EmptyChat() {
    return (
        <main className="flex-1 bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 50%)",
                }}
            />

            <div className="flex flex-col items-center gap-6 z-10 opacity-50">
                <div className="w-24 h-24 rounded-2xl bg-[#1e293b] border border-[#475569] flex items-center justify-center">
                    <MdOutlineChatBubbleOutline className="text-[#475569] text-[48px]" />
                </div>
                <p className="text-[#64748b] text-lg font-medium">
                    Select a conversation to start chatting
                </p>
            </div>
        </main>
    );
}