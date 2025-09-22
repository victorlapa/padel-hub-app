"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const errorMessages: Record<string, string> = {
  Signin: "Erro ao tentar fazer login. Tente novamente.",
  OAuthSignin: "Erro ao tentar fazer login com Google. Tente novamente.",
  OAuthCallback: "Erro no callback do Google. Tente novamente.",
  OAuthCreateAccount: "Erro ao criar conta. Tente novamente.",
  EmailCreateAccount: "Erro ao criar conta com email. Tente novamente.",
  Callback: "Erro de callback. Tente novamente.",
  OAuthAccountNotLinked: "Esta conta já está associada a outro provedor.",
  EmailSignin: "Erro ao enviar email de login.",
  CredentialsSignin: "Credenciais inválidas.",
  SessionRequired: "Você precisa estar logado para acessar esta página.",
  default: "Ocorreu um erro inesperado. Tente novamente.",
};

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage = error ? errorMessages[error] || errorMessages.default : errorMessages.default;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-red-600">Erro de Autenticação</CardTitle>
          <CardDescription>{errorMessage}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <Link href="/auth/signin">
              <Button className="w-full">
                Tentar Novamente
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="w-full">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}