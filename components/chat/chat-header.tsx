import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useChat } from "@/hooks/use-chat";
import { Profile } from "../profile";

export const ChatHeader = () => {
  const { toggleChat } = useChat();

  return (
    <div className="flex items-center justify-between p-4 text-foreground rounded-t-xl">
      <div className="flex items-center gap-3 min-w-0">
        <Profile />
        <div className="flex flex-col min-w-0">
          <h3 className="text-sm font-bold truncate">Al-v Manda</h3>
          <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground w-60">
            <p className="flex items-center gap-1">
              <span className="size-1.5 bg-chart-2 rounded-full animate-pulse" />
              Active now
            </p>
            <span className="whitespace-nowrap text-muted-foreground">Powered by Groq</span>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        className="p-2.5 bg-background hover:bg-accent/80 transition-colors duration-200"
        onClick={toggleChat}
      >
        <X className="size-5 text-foreground" />
      </Button>
    </div>
  );
};
