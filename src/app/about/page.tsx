import LinkBadge from "@/components/badge/LinkBadge";
import ProjectsLink from "@/components/Links/ProjectsLink";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { techStack } from "@/content/aboutMeContent";
import Link from "next/link";

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <Avatar className="h-52 w-52">
              <AvatarImage
                src="/images/rahul.jpeg"
                alt="Rahul Chourasiya"
                className="scale-110 object-cover"
              />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Rahul Chourasiya
              </h1>
              <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                I&apos;m a passionate web developer with a strong background in
                front-end technologies. I love creating beautiful and functional
                websites that provide a great user experience.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {Object.keys(techStack).map((label) => {
                  const { href, color } =
                    techStack[label as keyof typeof techStack];
                  return (
                    <LinkBadge
                      key={label}
                      href={href}
                      label={label}
                      color={color}
                    />
                  );
                })}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Freelance Web Developer
                  </h3>
                  <p className="text-muted-foreground">
                    Self-Employed | 2023 - Present
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Currently working as a freelance frontend developer,
                    focusing on creating responsive and dynamic web applications
                    using React, Next.js, Tailwind CSS, Express.js and MongoDB.
                    Collaborated with clients to design and develop user
                    interfaces that enhance user experience.
                  </p>
                  <ProjectsLink text="View my projects" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Contract-Based Web Developer
                  </h3>
                  <p className="text-muted-foreground">
                    Collaboration with Friend | 2022 - 2023
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Worked on several contract-based
                    <ProjectsLink text="projects" /> in partnership with a
                    friend, contributing to the development of client-side and
                    server-side applications using modern technologies. Gained
                    practical experience in delivering functional, visually
                    appealing websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Bachelor of Technology in Information Technology
                </h3>
                <p className="text-muted-foreground">
                  Malawa institute of science and technologies | 2022 - 2026
                </p>
                <p className="text-sm text-muted-foreground">
                  Currently pursuing a B.Tech in Information Technology, with a
                  strong focus on web development, software engineering, and
                  front-end technologies. Actively involved in personal and
                  collaborative <ProjectsLink text="projects" /> that
                  demonstrate my passion for coding and building user-friendly
                  web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
