"use client";

import { MdOutlineChatBubbleOutline, MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

interface ChatItem {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar: string;
    unread?: number;
}

interface SidebarProps {
    activeChatId: number | null;
    setActiveChatId: (id: number) => void;
}

export default function Sidebar({ activeChatId, setActiveChatId }: SidebarProps) {
    const chats: ChatItem[] = [
        {
            id: 1,
            name: "Alice Smith",
            message: "Are you free for a call later?",
            time: "Now",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu0xItwy-q2SrftqDFt3JiRpBUKVlf-62bK4cj36mhEz7aeEKZ5kveRcl_V4Epd2oHNQ43Ask2gnNAjwB97XVw4zqn6Z-Gd6CHOPsunEuuLhPeKT3WUyb7G4RN1oMkc35cEXgvk4UzTMKSPa39PV7eAveQEiGAhjKBNX8Ugh2NojKq38A1ZLRbWgQ3VGxHqOLVr8XZVXZMpmqiS9lp2VnRJrcX2lYWUBSUQY4d4xdjk_rJQc3xyX3hUNKSP0mj0neJbxioaKml5rh0",
        },
        {
            id: 2,
            name: "Design Team",
            message: "New mockups are ready 🚀",
            time: "2m",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCljU2bb9Nv13UeZnpx7Iqtsm7FMMdP-NEwIE9pLzoOCH9D8XXh9qWokCjvM2aYiWkrEZgjanZWIDR_6yUqF6aQrwpbW4NRjMzKzDZ8vaPVFN2fZb2xjk20vGXeM0fX0y_YTirUlrwqPB49rKewP5KBgWd7Hk6q4LmWUPGcVD484cDHtRHYOYGNdEZQcej34KSDeZH1FuQYrTc8rf8n49YbGpULDK-cLVOeJRnBSIX4DF83_tPYZLeC_pDwIPT5v9sixnINCCXJ-fzk",
            unread: 3,
        },
        {
            id: 3,
            name: "John Doe",
            message: "Sent an attachment",
            time: "1h",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY3lcVG0fsza6F0BsLowLMYPk-ggItQ0pv8Dp_xJrjwx-AcZ2TsSJEzPR-iNpXaDKUxfZMCGAVBitHcpj5P4AGVAYWjIYGYJs67-bJd8WLzqn0CVKJD2U1qAll_DHZdXrI7NQWFDQtY94DXvnuy39WdLUU8_gOrF_KUnfgS_bG2WS8t1Nya1dgO_djiAz7h7qcVmgw9PyKcnYW5q5fCW1_Ptyej5v5CUfFSUouXGwiXeH0QyBTVYFJ9HTXuMianjhFYAei7kIYsGc5",
        },
    ];

    const renderChatItem = (chat: ChatItem) => {
        const isActive = chat.id === activeChatId;
        return (
            <button
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer group relative overflow-hidden transition-colors
                    ${isActive ? "bg-[#334155] border border-[#475569]/50" : "hover:bg-[#1e293b]"}`}
            >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3b82f6] rounded-l-lg" />}
                <div className="relative w-12 h-12 shrink-0">
                    {chat.avatar ? (
                        <Image
                            alt={chat.name}
                            src={chat.avatar}
                            fill
                            className={`rounded-full object-cover border-2 ${isActive ? "border-[#0f172a]" : "border-[#334155]"} ${!isActive ? "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" : ""}`}
                        />
                    ) : (
                        <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                            {chat.name.split(" ").map(n => n[0]).join("")}
                        </div>
                    )}
                    {isActive && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-[#334155]" />
                    )}
                </div>

                <div className="flex flex-col flex-1 text-left min-w-0">
                    <div className="flex justify-between items-baseline">
                        <p className={`truncate text-sm font-bold ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                            {chat.name}
                        </p>
                        <p className={`text-xs font-medium whitespace-nowrap ml-2 ${isActive ? "text-[#3b82f6]" : "text-[#94a3b8]"}`}>{chat.time}</p>
                    </div>
                    <p className={`truncate text-sm mt-0.5 ${isActive ? "text-white/90" : "text-white/80 group-hover:text-white/90"}`}>{chat.message}</p>
                </div>

                {!isActive && chat.unread && (
                    <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#3b82f6] text-[#0f172a] text-[10px] font-bold">{chat.unread}</div>
                )}
            </button>
        );
    };

    return (
        <aside className="w-[360px] flex flex-col h-full bg-[#0f172a] border-r border-[#334155] shrink-0">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-6">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6]">
                    <MdOutlineChatBubbleOutline className="text-2xl text-[#3b82f6]" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#3b82f6] rounded-full border-2 border-[#0f172a]" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-xl font-bold leading-none tracking-tight">ChatX</h1>
                    <p className="text-[#94a3b8] text-xs font-medium mt-1">Real-time Workspace</p>
                </div>
            </div>

            {/* Search */}
            <div className="px-4 pb-4">
                <div className="flex w-full items-center rounded-xl bg-[#1e293b] border border-[#475569] overflow-hidden h-12">
                    <div className="flex items-center justify-center px-3 text-[#94a3b8]">
                        <IoIosSearch className="text-[20px]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search conversations..."
                        className="flex-1 bg-transparent border-none text-white placeholder:text-[#64748b] focus:outline-none text-sm font-medium h-full py-2 pr-4"
                    />
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-1 px-2 pb-4">
                <h3 className="text-[#64748b] text-xs font-bold uppercase tracking-wider px-4 py-2 mt-2">Chats</h3>
                {chats.map(renderChatItem)}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#334155] bg-[#0f172a]">
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-[#1e293b] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="relative w-10 h-10 shrink-0">
                            <Image
                                alt="User Avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWysGMzzHxKZ0HGUBPnl8HNrhxB5DfIM7JuwI3Me_rQgdIADMWoDy1ktRoGnuU-ZVk45cME7fW-tt-GxW99_WOH4Z-EUzjLcA1p1gps-SIcKzAxCfFcJljN11K1w48KZtEu-so0IwJYZ__ldfQVII5zX2_JOvEIx31DmJoIId3XV2ifEL0yntppu1bCKMo4Zdxylk_ozawh2eh4p3rrM5W5HpkqHzlNlZIJF5dYdnbJRDSk4ti5nfcqmcM9e-aG4Q9CL_ajTKNnxk_"
                                fill
                                className="rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-2 border-[#0f172a]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <p className="text-white text-sm font-bold truncate">Alex Morgan</p>
                            <p className="text-[#94a3b8] text-xs truncate">alex@neochat.com</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#475569] transition-colors">
                            <IoSettingsOutline className="text-[20px]" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-red-400 hover:bg-red-400/10 transition-colors">
                            <MdLogout className="text-[20px]" />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}