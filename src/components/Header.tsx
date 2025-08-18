"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <header className="flex justify-between items-center p-4 border-b bg-background">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">Padel Hub</span>
      </div>
      <Button
        onClick={() => signOut({ callbackUrl: "/onboarding" })}
        variant="ghost"
        size="sm"
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sair
      </Button>
    </header>
  );
}