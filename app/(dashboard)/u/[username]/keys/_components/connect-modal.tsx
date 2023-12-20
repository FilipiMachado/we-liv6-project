"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ConnectModalProps {}

export const ConnectModal = ({}: ConnectModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
            Generate connection
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};
