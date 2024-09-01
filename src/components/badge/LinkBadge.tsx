import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ReactNode } from "react";

interface LinkBadgeProps {
  href: string;
  label: string;
  color: string;
}
const LinkBadge = ({ href, label, color }: LinkBadgeProps) => (
  <Link target="_blank" href={href}>
    <Badge className="bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80">
      <span className={`mr-2 h-2 w-2 rounded-full ${color}`} />
      {label}
    </Badge>
  </Link>
);

export default LinkBadge;
