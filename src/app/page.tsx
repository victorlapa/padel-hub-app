"use client";

import ProfileBar from "@/components/ProfileBar";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground w-full min-h-screen p-5">
      <ProfileBar elo={1000} userName="Victor" maxElo={2000} />
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Padel Hub</h1>
        <p className="text-lg text-muted-foreground">Bora pra quadra?</p>
        <h2>Insira um ou mais horarios disponíveis</h2>
        <div className="h-[12px]" />
        <Button onClick={() => setIsOverlayOpen(true)}>
          Encontrar partida
        </Button>

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
