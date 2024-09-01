import BlinkCircle from "@/components/animated/BlinkCircle";
import LinkBadge from "@/components/badge/LinkBadge";
import ContactLink from "@/components/Links/ContactLink";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { contactLinks, techStack } from "@/content/aboutMeContent";
import {
  Blocks,
  LinkIcon,
  LucideIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const AboutMeSection = () => {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      {/* Contact Me Section */}
      <div className="flex flex-col gap-4">
        <SectionCard Icon={LinkIcon} title="Contact Me">
          {contactLinks.map(({ Icon, href, title }) => (
            <ContactLink
              key={title}
              Icon={Icon}
              href={href!}
              title={title!}
              target="_blank"
            />
          ))}
        </SectionCard>

        <Card className="p-4 text-4xl font-bold">
          <Link
            href={process.env.CONTACT_UPWORK!}
            className="flex items-center gap-x-4"
          >
            <BlinkCircle blinkClassName="w-6 h-6" dotClassName="w-4 h-4" />
            Available for work!
          </Link>
        </Card>
      </div>

      {/* Tech Stack and Location Section */}
      <div className="flex flex-col gap-4">
        <Card className="p-4 font-bold">
          <span className="flex items-center gap-x-2 text-lg">
            <MapPin />
            Location
          </span>
          <Link href={process.env.CONTACT_ADDRESS!} className="mx-9 text-2xl">
            India
          </Link>
        </Card>

        <SectionCard Icon={Blocks} title="Tech Stack" className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map(({ href, label, color }) => (
              <LinkBadge key={label} href={href} label={label} color={color} />
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
};
export default AboutMeSection;

const SectionCard = ({
  Icon,
  title,
  children,
  className = "",
}: {
  Icon?: LucideIcon;
  title?: string;
  className?: string;
  children: ReactNode;
}) => (
  <Card className={` ${className}`}>
    <CardHeader className="flex items-center gap-2">
      {Icon && <Icon />}
      {title && title}
    </CardHeader>
    <CardContent className="flex flex-col gap-4">{children}</CardContent>
  </Card>
);
