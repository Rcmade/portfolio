"use client";
import React from "react";
import LogoButton from "@/components/button/LogoButton";
import { ThemeButton } from "@/components/button/ThemButton";
import NavLink from "@/components/Links/NavLink";
import { navLinksContent } from "@/content/navLinksContent";
import MainSidebarButton from "@/components/button/MainSidebarButton";
import MainSidebar from "@/components/sidebars/MainSidebar";

const MainNavbar = () => {
  return (
    <nav className="flex items-center justify-between rounded-md border-b px-3 py-4 shadow-md sm:px-5 md:px-12 xl:px-32">
      <LogoButton />
      <div className="hidden items-center gap-x-10 md:flex">
        {navLinksContent.map(({ title, href }) => (
          <NavLink href={href} title={title} key={href} />
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <MainSidebarButton />
        <ThemeButton />
      </div>
      <MainSidebar />
    </nav>
  );
};

export default MainNavbar;
