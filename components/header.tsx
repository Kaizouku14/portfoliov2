import { TextAnimate } from "./ui/text-animate";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-10">
      <TextAnimate
        by="character"
        delay={1}
        once={true}
        className="text-4xl font-extrabold
                   bg-[linear-gradient(to_right,var(--foreground),var(--muted-foreground))]
                   dark:bg-[linear-gradient(to_right,var(--foreground),var(--primary))]
                   bg-clip-text text-transparent"
      >
        Al-v.
      </TextAnimate>
      <TextAnimate className="text-3xl font-bold" by="character" delay={1} once={true}>
        Web Developer
      </TextAnimate>
    </header>
  );
};
