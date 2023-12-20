"use client";

import { LucideIcon } from "lucide-react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export const NavItem = ({}: NavItemProps) => {
  return (
    <div>
      <div>Navigation</div>
    </div>
  );
};
