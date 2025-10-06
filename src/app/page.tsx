"use client";

import DateSelector from "@/components/Home/DateSelector";
import ProfileBar from "@/components/ProfileBar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="bg-background text-foreground min-h-screen w-full p-5">
      {session && (
        <>
          <ProfileBar
            elo={1000}
            userName={session.user?.name || "Usuário"}
            maxElo={2000}
          />
          <div className="py-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">Padel Hub</h1>
            <p className="text-muted-foreground text-lg">Bora pra quadra?</p>

            <div className="h-[12px]" />
          </div>
        </>
      )}
    </div>
  );
}
