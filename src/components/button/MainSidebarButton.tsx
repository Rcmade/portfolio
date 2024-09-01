"use client";
import { useMainSidebar } from "@/hook/useMainSidebar";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const MainSidebarButton = () => {
  const { isOpen, onToggle } = useMainSidebar();
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="icon"
      className="md:hidden"
    >
      <Menu />
    </Button>
  );
};

export default MainSidebarButton;
