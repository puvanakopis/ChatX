"use client";

import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

export default function ChatOne() {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden font-display text-base text-slate-900 dark:text-white selection:bg-[#3b82f6] selection:text-white">
            {/* Header */}
            <header className="flex-none flex items-center justify-between border-b border-[#1e293b] px-6 py-4 bg-[#020617]/50 dark:bg-[#020617] z-10">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-12 h-12 border-2 border-[#1e293b]"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCE91X6wo5QJcWFZ6CAEI0SD9E5uA0oD414qFy5bgDHuZTqlc49ElAvdwpMnKnbcryl8kSA0gf6MNLMREfcZiqvg7x4zTJqg3qn_MbLCn24ik0j8q7ZRA8luw4zU0icVcdxUsitL14BrH6lFtLb9_ssEW8MQJpr2PqP8iM3PvD4HJL-t2OucVcJdl42GcLgkX-Ke8zrdCp4KD9uQ5p1UqJSKoZZ99gHaRs6UF1cVKlyIdNos6KjBDMem4MTyNzZOUV_2rgtHe7Yp2");',
                            }}
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#3b82f6] rounded-full border-2 border-[#020617]" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">
                            Jane Doe
                        </h2>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-[#3b82f6] rounded-full inline-block" />
                            <span className="text-[#3b82f6] text-xs font-medium">Online</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-lg text-[#93c5fd] hover:bg-[#2563eb] hover:text-white transition-colors duration-200"
                    >
                        <span className="material-symbols-outlined text-[24px]"><FiMoreVertical /></span>
                    </button>
                </div>
            </header>

            {/* Chat Body */}
            <main className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth bg-[#020617]">
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {/* Today Label */}
                    <div className="flex justify-center sticky top-0 z-0 opacity-90">
                        <div className="bg-[#2563eb]/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                            <p className="text-white text-xs font-medium leading-normal tracking-wide uppercase">
                                Today
                            </p>
                        </div>
                    </div>

                    {/* Received Message */}
                    <div className="flex items-end gap-3 group">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0 mb-1"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtqquVzhAwPQhAC7TGHCr7Ku2_79U6Po36hXlr9HzD-eFKeVNXvspE9JmUk-oxCVDO1ZSf24eZNoGOeznwoJd_WhwtUGPXXkFv5o4nnJtulRXwm5G3XGLwMP8R1GONrq-7OPRGqiOK0CnL7b90Y1nbZwZ61_n8lQyAw7xcljIqnskZz0rSspRolNJYyb7QiupdSjCc1XrxxnbHmhAXnL8ItcygwXMo8mR_wZAMLP9FI8EUyUZzDh_02DVAR1sXwPTUEc3GY5pl0s7o");',
                            }}
                        />
                        <div className="flex flex-col gap-1 items-start max-w-[75%] md:max-w-[60%]">
                            <div className="flex flex-col rounded-2xl rounded-bl-none px-5 py-3 bg-[#0f172a] border border-white/5 text-white shadow-sm">
                                <p className="text-[15px] font-normal leading-relaxed">
                                    Hey! Are the designs ready for review?
                                </p>
                            </div>
                            <span className="text-[#93c5fd]/60 text-[11px] font-medium ml-1">
                                10:30 AM
                            </span>
                        </div>
                    </div>

                    {/* Sent Messages */}
                    {[
                        {
                            text: "Almost there. Just tweaking the chat window.",
                            time: "10:32 AM",
                            status: "done_all",
                        },
                        {
                            text: "Sending over the files now.",
                            time: "10:32 AM",
                            status: "done",
                        },
                    ].map((msg, idx) => (
                        <div
                            key={idx}
                            className="flex items-end gap-3 justify-end group"
                        >
                            <div className="flex flex-col gap-1 items-end max-w-[75%] md:max-w-[60%]">
                                <div className="flex flex-col rounded-2xl rounded-br-none px-5 py-3 bg-[#3b82f6] text-white shadow-md shadow-[#3b82f6]/10">
                                    <p className="text-[15px] font-medium leading-relaxed">{msg.text}</p>
                                </div>
                                <div className="flex items-center gap-1 mr-1">
                                    <span className="text-[#93c5fd]/60 text-[11px] font-medium">{msg.time}</span>
                                    <span className="material-symbols-outlined text-[14px] text-[#3b82f6]">
                                        {msg.status}
                                    </span>
                                </div>
                            </div>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0 mb-1"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCQ01P5yO6Lf2KarisKIJTjlK0nDsySTOuzNorABtm3q0iXWzqAhHkVk6ImHlfI_1xjuXeBJJo_k87LPA2vmvbmxxa09ac43TssaL3i6L1x-CYGacTZbDEZfACc8viIYL-PNFAkmtxfTI7yBYfeEdWxxUc4FOfCTL4fHh29dhNs4By5SzGWHaC6HG9JtefIYVCgfC4HisqsvC3utvgGsJmRH87G5Y88Ee7LTzmnQB5rX1tTUx_CPITUexZ1qcT9GguGqpLSovD6b_d");',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer / Message Input */}
            <footer className="flex-none p-6 pt-2 bg-[#020617]">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="relative flex items-end gap-2 bg-[#0f172a]/50 border border-[#1e293b] rounded-2xl p-2 shadow-lg">
                        <div className="flex-1 py-2.5">
                            <textarea
                                className="w-full bg-transparent border-0 p-0 text-white placeholder-[#93c5fd]/50 focus:ring-0 resize-none max-h-32 overflow-y-auto leading-relaxed"
                                placeholder="Type a message..."
                                rows={1}
                                style={{ minHeight: "24px" }}
                            />
                        </div>
                        <div className="flex items-center gap-1 pb-0.5">
                            <button
                                aria-label="Send message"
                                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563eb] text-[#93c5fd] hover:bg-[#3b82f6] hover:text-white transition-all duration-200 ml-1 group"
                            >
                                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    <AiOutlineSend />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-[#93c5fd]/40">
                            Press Enter to send, Shift + Enter for new line
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}