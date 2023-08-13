import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar>
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
