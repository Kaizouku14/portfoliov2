import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useChat } from "@/hooks/use-chat";

export const ChatHeader = () => {
  const { toggleChat } = useChat();

  return (
    <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-xl shadow-md transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-accent/30 backdrop-blur-sm flex items-center justify-center font-bold shadow-lg border-2 border-border text-accent-foreground">
            A
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-chart-2 rounded-full border-2 border-card"></div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-primary-foreground">Al-v Manda</h3>
          <p className="text-xs text-white dark:text-black flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-chart-2 rounded-full animate-pulse"></span>
            Active now
          </p>
        </div>
      </div>
      <Button className="p-2.5 hover:bg-accent/20 rounded-full" onClick={toggleChat}>
        <X className="w-5 h-5 text-primary-foreground" />
      </Button>
    </div>
  );
};
