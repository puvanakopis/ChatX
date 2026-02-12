import Sidebar from "@/container/chat/Sidebar";
import EmptyChat from "@/container/chat/EmptyChat";
import ChatOne from "@/container/chat/ChatOne";

export default function HomePage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-hidden h-screen flex">
            <Sidebar />
            <EmptyChat />
            <ChatOne />
        </div>
    );
}