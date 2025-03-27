
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  className?: string;
}

export const ThemeToggle = ({ isDarkMode, toggleTheme, className }: ThemeToggleProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Toggle
        pressed={!isDarkMode}
        onPressedChange={() => isDarkMode && toggleTheme()}
        aria-label="Toggle light mode"
        className={cn(
          "rounded-l-full border border-r-0",
          isDarkMode 
            ? "bg-transparent hover:bg-slate-800 border-slate-700"
            : "bg-monbridge-50 text-monbridge-800 border-monbridge-200"
        )}
      >
        <Sun className={cn(
          "h-4 w-4 transition-all",
          isDarkMode ? "text-slate-400" : "text-monbridge-600"
        )} />
      </Toggle>
      
      <Toggle
        pressed={isDarkMode}
        onPressedChange={() => !isDarkMode && toggleTheme()}
        aria-label="Toggle dark mode"
        className={cn(
          "rounded-r-full border",
          isDarkMode 
            ? "bg-slate-800 text-monbridge-300 border-slate-700" 
            : "bg-transparent hover:bg-slate-100 border-slate-200"
        )}
      >
        <Moon className={cn(
          "h-4 w-4 transition-all",
          isDarkMode ? "text-monbridge-300" : "text-slate-600"
        )} />
      </Toggle>
    </div>
  );
};
