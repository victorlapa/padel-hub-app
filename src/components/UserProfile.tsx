"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, LogOut, LogIn } from "lucide-react";

export function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="text-center">Carregando...</div>
        </CardContent>
      </Card>
    );
  }

  if (session) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            {session.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="h-12 w-12 rounded-full"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <User className="h-6 w-6 text-gray-600" />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-lg">{session.user?.name}</CardTitle>
              <CardDescription className="text-sm">{session.user?.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="outline"
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Bem-vindo ao Padel Hub</CardTitle>
        <CardDescription className="text-center">
          Entre para começar a jogar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Entrar com Google
        </Button>
      </CardContent>
    </Card>
  );
}