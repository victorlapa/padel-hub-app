import { TPosition } from "@/types/Player";
import { UserCircle2 } from "lucide-react";

interface CourtUserProps {
  icon?: string;
  name?: string;
  elo?: number;
  position?: "left" | "right";
  team?: "A" | "B";
}

export default function CourtUser({
  elo,
  icon,
  team,
  name,
  position,
}: CourtUserProps) {
  return (
    <div
      className={`absolute ${getPlayerSide(position ?? "left")} ${getPlayerPosition(team ?? "A")} flex flex-col items-center`}
    >
      <div className="flex justify-center">
        {icon ? (
          <img width={24} height={24} src={icon} />
        ) : (
          <UserCircle2 width={24} height={24} />
        )}
      </div>
      <p className="flex items-center text-center">
        {name ?? "Usuário"}{" "}
        <span className={`${getEloColor(elo ?? 0)}`}>
          [{elo ?? 0}]
        </span>
      </p>
    </div>
  );
}

const getEloColor = (elo: number) => {
  if (elo) return "text-white";
};

const getPlayerSide = (side: TPosition) => {
  return side === "left" ? "left-[25%]" : "right-[25%]";
};

const getPlayerPosition = (pos: "A" | "B") => {
  return pos === "A" ? "top-[25%]" : "bottom-[25%]";
};
