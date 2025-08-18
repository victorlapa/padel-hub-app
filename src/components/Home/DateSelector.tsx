"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IDateSelectorProps {
  day: number;
  month: number;
  year: number;
  onPrevious: () => void;
  onNext: () => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export default function DateSelector({
  day,
  month,
  year,
  onNext,
  onPrevious,
  onPreviousMonth,
  onNextMonth,
}: IDateSelectorProps) {
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getMonthName = (month: number): string => {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[month - 1];
  };

  const canGoNext = day < getDaysInMonth(month, year);
  const canGoPrevious = day > 1;
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Month Navigation */}
      <div className="flex w-full items-center justify-center">
        <button 
          className="cursor-pointer px-4 transition-transform hover:scale-110 active:scale-95 text-foreground"
          onClick={onPreviousMonth}
        >
          <ChevronLeftIcon size={20} />
        </button>
        <motion.div 
          className="min-w-[120px] overflow-hidden cursor-pointer select-none text-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const threshold = 50;
            if (info.offset.x > threshold) {
              onPreviousMonth();
            } else if (info.offset.x < -threshold) {
              onNextMonth();
            }
          }}
          whileDrag={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${month}-${year}`}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <span className="text-lg font-medium">{getMonthName(month)} {year}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <button 
          className="cursor-pointer px-4 transition-transform hover:scale-110 active:scale-95 text-foreground"
          onClick={onNextMonth}
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>

      {/* Day Navigation */}
      <div className="flex w-full items-center justify-center">
        <button 
          className={`cursor-pointer px-4 transition-transform ${
            canGoPrevious 
              ? 'hover:scale-110 active:scale-95 text-foreground' 
              : 'cursor-not-allowed text-muted-foreground opacity-50'
          }`}
          onClick={canGoPrevious ? onPrevious : undefined}
          disabled={!canGoPrevious}
        >
          <ChevronLeftIcon />
        </button>
        <motion.div 
          className="w-[80px] overflow-hidden cursor-pointer select-none"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const threshold = 50;
            if (info.offset.x > threshold && canGoPrevious) {
              onPrevious();
            } else if (info.offset.x < -threshold && canGoNext) {
              onNext();
            }
          }}
          whileDrag={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={day}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold">{day}</h3>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <button 
          onClick={canGoNext ? onNext : undefined}
          disabled={!canGoNext}
          className={`cursor-pointer px-4 transition-transform ${
            canGoNext 
              ? 'hover:scale-110 active:scale-95 text-foreground' 
              : 'cursor-not-allowed text-muted-foreground opacity-50'
          }`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
