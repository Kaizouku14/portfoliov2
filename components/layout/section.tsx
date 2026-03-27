import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative flex flex-col justify-center w-full md:px-12 px-8 py-10",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";
