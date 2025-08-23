import { ProjectCardProps, TechStack } from "@/types";

// export const projectContent: ProjectCardProps[] = [
//   {
//     description:
//       "For this project, I helped develop a website that allows users to view three-dimensional furniture in homes. My responsibilities included: 3D Model Management: I implemented the ability to upload and display 3D models through Babylon.js, ensuring a simple and enjoyable user experience. Using responsive design I completely redesigned the homepage to work flawlessly on displays including desktop PCs, large screen TVs and used Tailwind CSS to achieve this change. Visualizing files and folders: I worked on the user interface so that users can easily manage their information by displaying all their files and folders. 3D Image Display: I used pannellum-react with images to display images in three dimensions, enhancing the overall viewing experience.",
//     imageAlt: "IDCOLAB",
//     imageSrc: "/images/idcolab.png",
//     projectLink: "https://www.idcolab.com",
//     projectTitle: "IDCOLAB",
//     techStackList: [
//       "Next.js",
//       "Figma",
//       "Tailwind CSS",
//       "React",
//       "Git",
//       "TypeScript",
//     ],
//   },

//   {
//     description:
//       "In this project, I played a crucial role in developing a website for an FM radio and media company. My contributions included: User Authentication: Besides providing standard sign-up and sign-in features, I also integrated a few third-party OAuth providers such as Google, Facebook, and Twitter to make things easier for users in accessing the application. Authentication UI: I have designed and developed the signup and signin UI to be user-friendly, eye-catching, and appealing to the users. Live Streaming: I implemented Live Video streaming using HLS for Mac and iOS users, DASH.js for the rest, to make sure that it feels smooth across all devices. Mini Player Integration: Added a mini-player feature, like in YouTube, to continue the live stream below while users navigate the site. Podcast functionality: I have added podcast capabilities, giving the user a chance to listen to their favorite shows directly from your website.",
//     imageAlt: "NOON",
//     imageSrc: "/images/noon.png",
//     projectLink: "https://noon.jo",
//     projectTitle: "NOON",
//     techStackList: [
//       "Next.js",
//       "Figma",
//       "Bootstrap",
//       "React",
//       "Git",
//       "TypeScript",
//       "MySQL",
//     ],
//   },

//   {
//     description:
//       "Website for Medical Care Provision-Admin Panel I'm creating the administrator's panel for a website that offers medical treatments as part of this project. As part of a joint venture, I am in charge of creating the client-side user interface, while my partner uses Ruby on Rails for server-side development. Client-Side Development: In order to give consumers a seamless experience, I have completely developed and implemented a client-side user interface (UI) using React. UI Components: I used React Bootstrap to construct responsive and easy-to-use UI components, which helped to keep the administrator's panel consistent. Important functions: I implemented a number of functions, such as personnel administration, inventory management, invoice management, and client appointment scheduling. The project showcases my abilities to design robust yet user-friendly administrative interfaces for the healthcare industry.",
//     type: "VIEW",
//     imageAlt: "REPLENISH MD",
//     imageSrc: "/images/replenish1.png",
//     subImgs: [
//       "/images/replenish1.png",
//       "/images/replenish2.png",
//       "/images/replenish3.png",
      // "/images/replenish4.png",
//       "/images/replenish5.png",
//     ],
//     projectLink: "#",
//     projectTitle: "REPLENISH MD",
//     techStackList: [
//       "Next.js",
//       "Figma",
//       "Bootstrap",
//       "React",
//       "Git",
//       "TypeScript",
//       "MySQL",
//     ],
//   },

//   {
//     description:
//       "In this project, I was tasked to modify the Next.js and GSAP templates provided by the client. My responsibilities included: Template Customization: Existing Next.js and GSAP templates are designed to meet the customer’s specific needs and configuration preferences. This required changing layout, features and design images to match the client’s vision. Feedback: Ensured that the website worked on a variety of devices and screen sizes, and provided a seamless user experience on desktop and mobile platforms, Feature Implementation: Features that are integrated and tailored to customer specifications, increasing website usability and visual appeal. Performance Improvements: Optimized web rendering to ensure fast delivery and smooth graphics using GSAP for high-performance animation and Next.js for server-side rendering This role means I can tailor existing designs to specific client requirements whilst maintaining high design and workmanship standards.",
//     imageAlt: "GORack",
//     imageSrc: "/images/gorack.png",
//     projectLink: "https://srigorack.in",
//     projectTitle: "GoRack",
//     type: "LINK",
//     techStackList: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
//   },

//   {
//     description:
//       "This was my personal project, which helped college students by showing them the real-time location of buses. The app was built using React Native for the Android platform, using Express for backend support and MongoDB as the database, and socket.io for websocket. Core features included the capability to track the location of buses and provide current information to the students about the location of the bus, along with the driver and a list of students in the bus. Technology Stack: The project used React Native for the mobile app, and on the back-end, it used Express while MongoDB was used for data storage. Project Status: The application worked; it is no longer up because there were some security issues pointed out by the administration at college. From the above project, it demonstrates my skill in developing a mobile application based on integration of real-time tracking of data hence comprising both the front-end and back-end skills.",
//     imageAlt: "Busmate",
//     imageSrc: "/images/busmate.png",
//     projectLink: "https://webbusmate.vercel.app/",
//     projectTitle: "BusMate",
//     type: "LINK",
//     techStackList: [
//       "React-Native",
//       "Figma",
//       "React",
//       "Git",
//       "TypeScript",
//       "MongoDB",
//     ],
//   },

  // {
  //   description:
  //     "This project is my own creation-entirely created for the convenience of printing out in bulk by university students. The web application frontend was created using Next.js, MongoDB as the database, Cloudinary for the uploading of files, Razorpay for payment integrations, and ShadCN UI for the user interface. Core Functionality: The web application gives users the facility to upload their PDF documents, which automatically send hard copies of these documents directly to each classroom to rapidly take care of student printing tasks. Technology Stack: Next.js for seamless web experience; MongoDB for efficient data management; Cloudinary for secure file handling; Razorpay for seamless payment transactions; and ShadCN UI for clean and responsive interface. This project reveals my skills in building full-stack applications that solve real-life problems with regard for user convenience and judicious use of modern technologies.",
  //   imageAlt: "Dart",
  //   type: "VIEW",
  //   imageSrc: "/images/dart.png",
  //   projectLink: "https://dart-mist.vercel.app/",
  //   projectTitle: "Dart Print",
  //   subImgs: [
      // "/images/dart.png",
      // "/images/dart2.png",
      // "/images/dart3.png",
      // "/images/dart4.png",
      // "/images/dart5.png",
      // "/images/dart6.png",
  //   ],
  //   techStackList: [
  //     "Next.js",
  //     "Figma",
  //     "React",
  //     "Git",
  //     "TypeScript",
  //     "MongoDB",
  //   ],
  // },
// ];

type Type = "professional" | "personal";
export const projectContent: Record<Type, ProjectCardProps[]> = {
  professional: [
    {
      id: "hono-docs",
      title: "Hono-Docs - Auto-generated API Docs for Hono Framework",
      links: {
        github: "https://github.com/Rcmade/hono-docs",
        npm: "https://www.npmjs.com/package/@rcmade/hono-docs",
      },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753957751/ray-portfolio/99b8d4ba-01a6-480b-a1ac-4a66d4ba190a.png",
      ],
      description:
        "An NPM library that auto-generates API docs for Hono framework apps by parsing typed routes and rendering interactive OpenAPI-style documentation.",
      implemented: [
        "Built typed route parser to extract API contract metadata",
        "Developed live route explorer with method, path, and status codes",
        "Supports grouped endpoints by tag for navigation",
        "Generates OpenAPI JSON dynamically",
      ],
      techStackList: ["Node.js", "TS-Morph", "Hono.js"],
      startDate: "Jun 2025",
      endDate: "Jul 2025",
      featured:true,
      type:"LINK"
    },
    {
      id: "mediscan",
      title: "Mediscan - Hospital Appointment & Queue Management System",
      links: {
        live: "https://mediscan.qrblack.com",
        github: "https://github.com/Rcmade/mediscan_super_admin",
      },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753959457/ray-portfolio/1089eb42-1fd3-4ae4-9b8d-9ad39de7a5a4.png",
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753959549/ray-portfolio/ec11e935-7a7e-496e-b201-522f79e74178.png",
      ],
      description:
        "A hospital management system with real-time token queues, appointment booking, multi-role access, and super admin control for multiple hospitals.",
      implemented: [
        "Full frontend + backend architecture",
        "Role-based access (doctor, admin, receptionist, super admin)",
        "Smart token queue system",
        "Prescription & medical history tracking",
        "Payment integration with Razorpay",
        "CI/CD pipeline with Jenkins + AWS EC2/S3",
      ],
      techStackList: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Hono.js",
        "Shadcn",
        "AWS",
        "Jenkins",
        "TypeScript",
      ],
      startDate: "Dec 2024",
      endDate: "Jun 2025",
      featured:true,
      type:"LINK"
    },
    {
      id: "idcolab",
      title: "IDCOLAB - 3D Furniture Visualisation Platform",
      links: { live: "https://www.idcolab.com" },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753963402/ray-portfolio/2fc455c6-5b10-4b4c-a867-1fe1744a900c.png",
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753963423/ray-portfolio/26aae73d-6353-4463-bc05-3cdbf3866a40.png",
      ],
      description:
        "An interactive platform for viewing 3D furniture models inside virtual environments, with immersive 360° previews and file/folder management UI.",
      implemented: [
        "Integrated Babylon.js for real-time 3D model rendering",
        "360° immersive image display with pannellum-react",
        "Built Google Drive-style file/folder system",
        "Responsive homepage for TV, desktop, and mobile",
      ],
      techStackList: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux",
        "Three.js",
        "Babylon.js",
        "TailwindCSS",
      ],
      startDate: "Jan 2024",
      endDate: "Jun 2024",
      featured:true,

    },
    {
      id: "noon",
      title: "NOON - FM Radio & Media Streaming Platform",
      links: { live: "https://noon.jo" },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753964509/ray-portfolio/d0e01509-5d5f-42cb-8dcb-813723bc5946.png",
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753964530/ray-portfolio/7b9a1325-d401-45a9-b786-687254205ce3.png",
      ],
      description:
        "FM radio + podcast platform with OAuth login, live HLS/DASH streaming, and a floating mini-player for continuous media playback.",
      implemented: [
        "OAuth login (Google, Facebook)",
        "Built live radio streaming with HLS/DASH.js",
        "Persistent floating mini-player",
        "Podcast hosting support",
      ],
      techStackList: [
        "Next.js",
        "React",
        "Bootstrap",
        "OAuth",
        "HLS",
        "DASH.js",
      ],
      startDate: "Jun 2023",
      endDate: "Sep 2023",
      featured:true,

    },
    {
      id: "replenish-md",
      title: "Replenish MD - Medical Care Admin Panel",
      links: { live: "https://inv.replenishaw.com" },
      images: [
      "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753966323/ray-portfolio/b0e47ddb-921f-4745-924f-6c64fe642881.png",
      "/images/replenish2.png",
      "/images/replenish3.png",
      "/images/replenish4.png",
      "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753966372/ray-portfolio/2d2cfd2e-dfb0-4e56-9dab-320cebafba96.png",
      ],
      description:
        "Admin panel for managing appointments, invoices, staff, and inventory in a medical platform. Built frontend in React, backend in RoR by teammate.",
      implemented: [
        "Full React-based client-side UI",
        "Modules: personnel, inventory, invoices, appointments",
        "Responsive layout with Tailwind + React-Bootstrap",
      ],
      techStackList: ["React", "TailwindCSS", "React-Bootstrap", "TypeScript"],
      startDate: "Jan 2023",
      endDate: "Jun 2023",
      featured:true,
      type: "VIEW"

    },
    {
      id: "gorack",
      title: "GoRack - Custom Next.js + GSAP Animated Website",
      links: { live: "https://gorack.in" },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753966916/ray-portfolio/e69d0cfc-c1b7-459f-aad5-182182743dc2.png",
      ],
      description:
        "Custom animated website for IT infrastructure company using Next.js + GSAP with SSR for performance.",
      implemented: [
        "Custom GSAP scroll animations",
        "Responsive layout for all devices",
        "Advanced SCSS theming",
        "SSR for SEO & performance",
      ],
      techStackList: ["Next.js", "React", "GSAP", "SCSS"],
      startDate: "Nov 2022",
      endDate: "Feb 2023",
    },
  ],

  personal: [
    {
      id: "rayauth",
      title: "RayAuth - OAuth2 + OpenID Connect Authentication Provider",
      links: {
        github: "https://github.com/Rcmade/RayAuth-POC",
        live: "https://ray-auth.vercel.app",
      },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753967297/ray-portfolio/uu5g3qnxcz4v8xew1nzy.png",
      ],
      description:
        "Custom OAuth2 + OIDC provider with secure cookie-based sessions, JWT tokens, discovery endpoints, and multi-account login support.",
      implemented: [
        "Full OAuth2 & OIDC compliance",
        "Multi-account session support",
        "Encrypted cookies with per-session keys",
        "OIDC discovery & JWKS endpoint",
      ],
      techStackList: [
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "oidc-provider",
        "Zod",
        "Drizzle ORM",
      ],
    },
    {
      id: "jenkins-aws-pipeline",
      title: "Jenkins-AWS Pipeline - Automated CI/CD Deployment Workflow",
      links: { github: "https://github.com/Rcmade/Jenkins-Aws-Pipeline" },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753968913/ray-portfolio/e1c27a62-b1d8-42a7-9233-50187244407c.png",
      ],
      description:
        "Reusable Jenkins pipeline with Git tag triggers, Docker, and AWS (EC2, ECR, CodeBuild) for zero-downtime deployments.",
      implemented: [
        "Tag-based Git deployment",
        "Docker image build + ECR push",
        "EC2 deployment automation",
        "Reusable Jenkinsfiles + scripts",
      ],
      techStackList: [
        "Jenkins",
        "Docker",
        "AWS EC2",
        "ECR",
        "CodeBuild",
        "Bash",
      ],
    },
    {
      id: "ray",
      title: "@rcmade/ray - Secure CLI Credential Manager",
      links: {
        github: "https://github.com/Rcmade/ray",
        npm: "https://www.npmjs.com/package/@rcmade/ray",
      },
      description:
        "TypeScript-based CLI tool for secure snippet & credential management with autocompletion support.",
      implemented: [
        "Encrypted credential storage",
        "Quick snippet access via CLI",
        "Autocompletion setup for zsh/bash/fish",
      ],
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1755926838/ray-portfolio/d58d25ad-daab-4527-8f1e-04c70d62ee62.png",
      ],
      techStackList: ["Node.js", "TypeScript", "CLI", "Encryption"],
    },

    {
  id: "dartprint",
  title: "Dart Print",
  links: {
    live: "https://dart-mist.vercel.app/",
  },
  images: [
      "/images/dart.png",
      "/images/dart2.png",
      "/images/dart3.png",
      "/images/dart4.png",
      "/images/dart5.png",
      "/images/dart6.png",
  ],
  description:
    "A full-stack print service platform designed for university students to upload PDFs and get them printed automatically. Built using modern technologies to streamline student printing tasks.",
  implemented: [
    "Upload and store PDF documents securely",
    "Automated delivery of prints to classroom locations",
    "Payment integration using Razorpay",
    "Responsive and accessible UI using ShadCN",
    "Image/file handling via Cloudinary",
    "Full-stack development with Next.js and MongoDB",
  ],
  techStackList: [
    "Next.js",
    "Figma",
    "React",
    "Git",
    "TypeScript",
    "MongoDB",
  ],
},
    {
      id: "busmate",
      title: "Busmate - Real-Time College Bus Tracking App",
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.busmate",
        github: "https://github.com/Rcmade/Busmate",
        live: "https://busmate-web.vercel.app/",
      },
      images: [
        "https://res.cloudinary.com/du1fpl9ph/image/upload/v1753971199/ray-portfolio/5a0682c3-d5fa-4cd2-9efb-683613a49d63.png",
      ],
      description:
        "A real-time GPS-based bus tracking app for college transport management with admin dashboard, student verification, and live maps.",
      implemented: [
        "Live GPS + Google Maps integration",
        "Secure student registration with admin approval",
        "Admin panel for bus/route management",
        "Mobile + web interfaces",
      ],
      techStackList: [
        "React Native",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Google Maps API",
      ],
    },
  ],
};
