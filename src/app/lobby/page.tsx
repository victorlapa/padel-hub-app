"use client";

import { UserCircle2 } from "lucide-react";

const Lobby = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-[20px]">Header</div>
      <div className="relative flex h-full w-full flex-col bg-sky-600">
        <div className="absolute h-[1px]" />
        <UserCircle2 />
      </div>
    </div>
  );
};

export default Lobby;
