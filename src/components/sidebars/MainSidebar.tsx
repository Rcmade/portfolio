import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMainSidebar } from "@/hook/useMainSidebar";
import { navLinksContent } from "@/content/navLinksContent";
import NavLink from "@/components/Links/NavLink";
import LogoButton from "@/components/button/LogoButton";

const MainSidebar = () => {
  const { isOpen, onToggle } = useMainSidebar();
  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetContent>
        <SheetHeader className="my-4">
          <SheetTitle>
            <LogoButton />
          </SheetTitle>
          <SheetDescription className="sr-only">Ray Logo</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8 text-2xl">
          {navLinksContent.map(({ title, href }) => (
            <NavLink onClick={onToggle} href={href} title={title} key={href} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainSidebar;
