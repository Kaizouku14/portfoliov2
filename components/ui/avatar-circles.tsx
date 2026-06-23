"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url) => (
        <a key={url.profileUrl} href={url.profileUrl} target="_blank" rel="noopener noreferrer">
          <Image
            className="h-10 w-10 rounded-full border-2"
            src={url.imageUrl}
            width={800}
            height={600}
            alt={`Avatar`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:bg-white dark:text-black"
        >
          +{numPeople}
        </span>
      )}
    </div>
  );
};
