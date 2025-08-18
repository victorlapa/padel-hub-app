"use client";

import ProfileBar from "@/components/ProfileBar";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);
  const [isInQueue, setIsInQueue] = React.useState(false);
  const [queueTimer, setQueueTimer] = React.useState(0);
  const [matchFound, setMatchFound] = React.useState(false);
  const [acceptTimer, setAcceptTimer] = React.useState(30);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const acceptIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startQueue = () => {
    setIsInQueue(true);
    setQueueTimer(0);
    setMatchFound(false);
    intervalRef.current = setInterval(() => {
      setQueueTimer((prev) => {
        const newTime = prev + 1;
        // Trigger match found at 3 seconds
        if (newTime === 3) {
          setMatchFound(true);
          startAcceptTimer();
        }
        return newTime;
      });
    }, 1000);
  };

  const startAcceptTimer = () => {
    setAcceptTimer(30);
    acceptIntervalRef.current = setInterval(() => {
      setAcceptTimer((prev) => {
        const newTime = prev - 1;
        if (newTime === 0) {
          // Time expired, decline automatically
          handleDeclineMatch();
        }
        return newTime;
      });
    }, 1000);
  };

  const stopAcceptTimer = () => {
    if (acceptIntervalRef.current) {
      clearInterval(acceptIntervalRef.current);
      acceptIntervalRef.current = null;
    }
  };

  const stopQueue = () => {
    setIsInQueue(false);
    setQueueTimer(0);
    setMatchFound(false);
    setAcceptTimer(30);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stopAcceptTimer();
  };

  const handleAcceptMatch = () => {
    stopAcceptTimer();
    // Here you would typically navigate to game lobby or handle match acceptance
    alert("Partida aceita! Redirecionando para o lobby...");
    stopQueue();
  };

  const handleDeclineMatch = () => {
    stopAcceptTimer();
    stopQueue();
  };

  const handleQueueToggle = () => {
    if (isInQueue) {
      stopQueue();
    } else {
      startQueue();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (acceptIntervalRef.current) {
        clearInterval(acceptIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen w-full p-5">
      <ProfileBar elo={1000} userName="Victor" maxElo={2000} />
      <div className="py-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Padel Hub</h1>
        <p className="text-muted-foreground text-lg">Bora pra quadra?</p>
        <h2>Insira um ou mais horarios disponíveis</h2>
        <div className="h-[12px]" />

        {isInQueue && !matchFound && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4"
          >
            <p className="mb-2 text-sm text-blue-700">
              Procurando jogadores...
            </p>
            <p className="font-mono text-lg text-blue-800">
              {formatTime(queueTimer)}
            </p>
          </motion.div>
        )}

        {matchFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 rounded-lg border-2 border-green-200 bg-green-50 p-6 shadow-lg"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="text-center"
            >
              <h3 className="mb-2 text-xl font-bold text-green-800">
                🎾 Partida Encontrada!
              </h3>
              <p className="mb-4 text-green-700">
                Encontramos jogadores para você. Aceite dentro de:
              </p>
              <motion.div
                key={acceptTimer}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="mb-4 font-mono text-3xl font-bold text-green-800"
              >
                {acceptTimer}s
              </motion.div>
              <div className="flex justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleAcceptMatch}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Aceitar Partida
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={handleDeclineMatch} variant="destructive">
                    Recusar
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {!matchFound && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleQueueToggle}
              variant={isInQueue ? "destructive" : "default"}
              className="min-w-[160px]"
            >
              {isInQueue ? "Cancelar busca" : "Encontrar partida"}
            </Button>
          </motion.div>
        )}

        {/* <Modal
          isOpen={isOverlayOpen}
          onClose={() => setIsOverlayOpen(false)}
          title="Procurando partida..."
          description="Estamos buscando jogadores com preferências similares às suas."
          size="sm"
        >
          <ModalBody>
            <p className="text-gray-700 text-center">
              Aguarde enquanto encontramos outros jogadores disponíveis para sua
              partida.
            </p>
          </ModalBody>
        </Modal> */}
      </div>
    </div>
  );
}
