import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Profile = () => {
  return (
    <Avatar>
      <AvatarImage src="/me.jpg" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
};
