"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      // Redirect to main app after login attempt
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <h1 className="mb-2 text-6xl font-bold text-gray-800">🎾</h1>
          <h2 className="mb-4 text-5xl font-bold text-gray-800">Padel Hub</h2>
          <p className="text-lg text-gray-600">
            Encontre jogadores e organize suas partidas de padel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Matchmaking inteligente</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>Chat em tempo real</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <span>Sistema de ranking</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          <Button
            onClick={handleGoogleLogin}
            className="h-12 w-full border border-gray-300 bg-white text-base font-medium text-gray-700 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg"
          >
            <Image src="/google.svg" alt="Google" width={24} height={24} />
            Continuar com Google
          </Button>

          <p className="text-xs text-gray-500">
            Ao continuar, você concorda com nossos{" "}
            <span className="cursor-pointer underline">Termos de Serviço</span>{" "}
            e{" "}
            <span className="cursor-pointer underline">
              Política de Privacidade
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
