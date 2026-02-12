import Sidebar from "@/container/chat/Sidebar";
import EmptyChat from "@/container/chat/EmptyChat";

export default function HomePage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-hidden h-screen flex">
            <Sidebar />
            <EmptyChat />
        </div>
    );
}