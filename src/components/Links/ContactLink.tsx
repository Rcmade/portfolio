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
      className={cn("flex gap-x-2 max-w-max", className)}
    >
      <Icon />
      {title}
    </Link>
  );
};

export default ContactLink;
