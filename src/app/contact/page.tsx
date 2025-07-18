import ContactLink from "@/components/Links/ContactLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks } from "@/content/aboutMeContent";
import ContactForm from "./_ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAY/Contact",
};
export default function ContactPage() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold">Get in Touch</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="rounded-lg p-8 shadow-lg">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          {/* Personal Info */}
          <Card className="flex flex-col justify-between rounded-lg p-8 shadow-lg">
            <div>
              <div className="mb-6 flex items-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="/images/rahul.jpeg"
                    alt="Rahul Chourasiya"
                    className="scale-110 object-contain"
                  />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Rahul Chourasiya</h2>
                  <p className="text-secondary-foreground">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
              <p className="mb-6">
                I&apos;m a passionate web developer with expertise in full stack
                web development. Let&apos;s work together to bring your ideas to
                life!
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect with me</h3>
              <div className="flex space-x-4">
                {contactLinks.map(({ Icon, href, title }) => (
                  <ContactLink
                    key={title}
                    Icon={Icon}
                    href={href!}
                    title=""
                    target="_blank"
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
