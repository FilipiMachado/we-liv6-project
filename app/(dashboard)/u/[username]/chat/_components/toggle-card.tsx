"use client";

import { toast } from "sonner";
import { startTransition, useTransition } from "react";

import { Switch } from "@/components/ui/switch";
import { updateStream } from "@/actions/stream";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({
  label,
  value = false,
  field,
}: ToggleCardProps) => {
  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: false })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch checked={value}>{value ? "On" : "Off"}</Switch>
        </div>
      </div>
    </div>
  );
};
