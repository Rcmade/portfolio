"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}
const NavLink = ({ href, title, onClick }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      key={href}
      href={href}
      className="group flex flex-col justify-start transition-all"
      onClick={onClick}
    >
      <span
        className={cn(`m-auto w-full`, {
          "font-bold": pathName === href,
        })}
      >
        {title}
      </span>
      <span
        className={cn(
          `w-0 border-b border-primary transition-all group-hover:w-full`,
          {
            "w-full group-hover:w-0": pathName === href,
          },
        )}
      ></span>
    </Link>
  );
};

export default NavLink;
