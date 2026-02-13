"use client";

import { useState } from "react";
import Sidebar from "@/container/chat/Sidebar";
import EmptyChat from "@/container/chat/EmptyChat";
import ChatOne from "@/container/chat/ChatOne";

export default function Chat() {
    const [activeChatId, setActiveChatId] = useState<number | null>(null); // null = no chat selected

    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-hidden h-screen flex">
            <Sidebar activeChatId={activeChatId} setActiveChatId={setActiveChatId} />
            {activeChatId ? <ChatOne /> : <EmptyChat />}
        </div>
    );
}
