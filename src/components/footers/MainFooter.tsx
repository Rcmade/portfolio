import { navLinksContent } from "@/content/navLinksContent";
import React from "react";
import NavLink from "@/components/Links/NavLink";
import { Mail } from "lucide-react";
import LogoButton from "@/components/button/LogoButton";
import ContactLink from "@/components/Links/ContactLink";
import { contactLinks } from "@/content/aboutMeContent";
import AvailableButton from "@/components/button/AvailableButton";

const MainFooter = () => {
  return (
    <footer className="bg-secondary px-3 py-4 sm:px-5 md:px-12 xl:px-32">
      <div className="container grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <LogoButton />
          <p className="text-muted-foreground">
            Providing top-notch web development services to clients worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h4 className="text-foreground text-sm font-semibold">Pages</h4>
            <nav className="grid gap-1">
              {navLinksContent.map(({ href, title }) => (
                <NavLink href={href} title={title} key={href} />
              ))}
            </nav>
          </div>
          <div className="grid gap-2">
            <h4 className="text-foreground text-sm font-semibold">
              Social Media
            </h4>
            <nav className="flex gap-4">
              {contactLinks.map(({ Icon, href, title }) => (
                <ContactLink
                  key={title}
                  Icon={Icon}
                  href={href!}
                  title=""
                  target="_blank"
                //  iconSize={50}
                 className="max-w-fit"
                />
              ))}
            </nav>
          </div>
        </div>
        <div className="flex w-fit flex-col items-start gap-4">
          <h4 className="text-sm font-semibold">Contact</h4>
          <ContactLink
            Icon={Mail}
            href={`mailto:${process.env.CONTACT_EMAIL}`}
            title={process.env.CONTACT_EMAIL!}
          />
          <AvailableButton />
        </div>
      </div>
      <div className="text-muted-foreground container mt-8 max-w-5xl text-xs">
        &copy; {new Date().getFullYear()} Ray. All rights reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
