import { Profile } from "../profile";

const LoadingBubble = () => {
  return (
    <div className="flex h-60 items-start gap-3">
      <Profile />
      <div className="bg-primary/10 text-foreground rounded-2xl px-3 py-2 text-sm shadow-inner">
        <div className="flex h-6 items-center gap-1">
          <span className="bg-foreground inline-block h-2 w-2 animate-bounce rounded-full delay-200"></span>
          <span className="bg-foreground inline-block h-2 w-2 animate-bounce rounded-full delay-200"></span>
          <span className="bg-foreground inline-block h-2 w-2 animate-bounce rounded-full delay-200"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingBubble;
