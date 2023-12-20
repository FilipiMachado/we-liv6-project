"use client";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"

interface ToggleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({}: ToggleCardProps) => {
  return (
    <div>
      <div>Toggle Card</div>
    </div>
  );
};
