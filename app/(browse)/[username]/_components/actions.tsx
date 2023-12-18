"use client";

import { useTransition } from "react";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

interface ActionsProps {
    isFollowing: boolean;
}

export const Actions = ({isFollowing}: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow("123");
    });
  };

  return (
    <Button disabled={isFollowing || isPending} onClick={onClick} variant="primary">
      Follow
    </Button>
  );
};
