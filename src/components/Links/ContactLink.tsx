import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ContactLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  title: string;
  href: string;
  Icon: LucideIcon | React.ElementType;
}
const ContactLink = ({
  href,
  title,
  Icon,
  className,
  ...rest
}: ContactLinkProps) => {
  return (
    <Link
      {...rest}
      href={href}
      className={cn("flex max-w-full gap-x-2", className)}
    >
      <Icon />
      <span className="truncate text-sm sm:text-lg md:text-xl w-full">{title}</span>
    </Link>
  );
};

export default ContactLink;
