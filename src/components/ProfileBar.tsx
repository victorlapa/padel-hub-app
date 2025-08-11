import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProfileBarProps {
  userName: string
  elo: number
  maxElo?: number
  className?: string
}

export default function ProfileBar({ 
  userName, 
  elo, 
  maxElo = 2000,
  className 
}: ProfileBarProps) {
  const progressPercentage = Math.min((elo / maxElo) * 100, 100)
  
  return (
    <div className={cn(
      "w-full bg-white rounded-lg shadow-sm border p-4 flex items-center gap-4",
      className
    )}>
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <User className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {userName}
          </h3>
          <span className="text-sm font-medium text-gray-600">
            ELO: {elo}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Iniciante</span>
          <span>Profissional</span>
        </div>
      </div>
    </div>
  )
}