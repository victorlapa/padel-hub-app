"use client";

import ChatButton from "@/components/ChatButton";
import GameChat from "@/components/GameChat";
import Court from "@/components/Lobby/Court";
import { useState } from "react";

const Lobby = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="relative flex h-full w-full flex-col bg-gray-900">
      <div className="shrink-0 py-2 text-center text-white">
        <h1 className="text-2xl text-white">Jogo #1</h1>
        <span>Emquadra, Costa e Silva</span> 19:00
      </div>
      <div className="relative min-h-0 flex-1">
        <Court />
      </div>
      <ChatButton
        setIsChatOpen={() => {
          setIsChatOpen(true);
        }}
      />
      <GameChat
        isChatOpen={isChatOpen}
        setIsChatOpen={() => {
          setIsChatOpen(false);
        }}
      />
    </div>
  );
};

export default Lobby;
