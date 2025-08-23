import ContactLink from "@/components/Links/ContactLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks } from "@/content/aboutMeContent";
import ContactForm from "./_ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahul/Contact",
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
                    src="https://res.cloudinary.com/du1fpl9ph/image/upload/v1754133344/ray-portfolio/aab97fbb-dd4a-4913-be30-987da3a01e3b.png"
                    alt="Rahul Chourasiya"
                    className="scale-[130%] object-contain"
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
                <strong>Full Stack Developer</strong> with{" "}
                <strong>3+ years of experience </strong>
                delivering end-to-end web applications using{" "}
                <strong>React / Next.js</strong> and
                <strong> Node.js / Express</strong>. Skilled in{" "}
                <strong>TypeScript</strong>, database design (PostgreSQL,
                MongoDB), authentication (OAuth2 / OIDC / JWT), and building
                CI/CD pipelines for automated, reliable deployments. Experienced
                in <strong>performance optimization</strong>,
                <strong> zero-downtime rollout strategies</strong>,
                observability, and collaborating across design, product, and
                DevOps teams to ship high-quality features.
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
