import Sidebar from "@/container/chat/Sidebar";

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display overflow-hidden h-screen flex">
      <Sidebar />
    </div>
  );
}