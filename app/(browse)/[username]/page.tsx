import { notFound } from "next/navigation";

import { isBlockedByUser } from "@/lib/block-service";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";

import { Actions } from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {user.username}</p>
      <p>User ID: {user.id}</p>
      <p>Is following: {`${isFollowing}`}</p>
      <p>Is blocked by this user: {`${isBlocked}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
      {isFollowing}
    </div>
  );
};

export default UserPage;
