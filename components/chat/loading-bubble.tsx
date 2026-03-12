import { Profile } from "@/components/shared/profile";

const LoadingBubble = () => {
  return (
    <div className="flex items-start gap-3">
      <Profile />
      <div className="bg-primary/10 text-foreground rounded-2xl px-3 py-2 text-sm shadow-inner mt-1">
        <div className="flex h-6 items-center px-1">
          <span className="animate-pulse font-medium text-muted-foreground">
            typing...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingBubble;
