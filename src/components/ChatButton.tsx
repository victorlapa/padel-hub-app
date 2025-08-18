import { MessageCircle } from "lucide-react";

const ChatButton = ({ setIsChatOpen }: { setIsChatOpen: (a: any) => void }) => {
  return (
    <button
      onClick={() => setIsChatOpen(true)}
      className="absolute right-4 bottom-4 z-10 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-colors hover:bg-blue-700"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatButton;
