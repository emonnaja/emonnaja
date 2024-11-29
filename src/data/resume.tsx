import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abyan",
  initials: "MA",
  url: "https://github.com/emonnaja",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description: "Web developer. Love helping people. Active on Instagram.",
  summary:
    "I am someone who genuinely enjoys learning and collaborating within a team. I am motivated by the challenge of meeting performance goals on time and strive for continuous improvement. While I am a beginner in web development, I have a foundational understanding of the field and am eager to build my skills. Additionally, I have some experience working with English and am working to improve my proficiency in both technical and language skills.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Computer Hardware",
    "Cisco",
    "Networking",
    "Tailwind CSS",
    "CSS",
    "HTML5",
    "Javascript",
    "Bootstrap",
    "Vite.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abyanathaillah338@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://s.id/emonn-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://s.id/emonn-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://s.id/emonn-instagram",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tokopedia",
      href: "https://www.tokocrypto.com",
      badges: [],
      location: "Remote",
      title: "Front-End Web Developer",
      logoUrl: "/tokped.jfif",
      start: "June 2023",
      end: "May 2024",
      description:
        "As a Front-End Web Developer at the company, I focus on building and improving features that users interact with, while connecting them to back-end systems through APIs. I collaborate with design and back-end teams to implement new features using modern tools like React or SvelteJS. My work involves creating responsive web applications that work well on all devices, troubleshooting any API issues, and optimizing performance. I keep up with the latest technologies to ensure we deliver a smooth, user-friendly experience that meets both user needs and company goals.",
    },
  ],
  education: [
    {
      school: "SMK DARUSSALAM CIPUTAT",
      href: "https://www.instagram.com/smk_darsal36",
      degree: "high school students",
      logoUrl: "/darsal.jpg",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "NontonFilm.",
      href: "https://nontonfilm.cloud",
      dates: "Nov 2023 - Now",
      active: true,
      description:
        "Watch all movies and TV series up to 4K resolution without subscribe and login.",
      technologies: [
        "Next.js",
        "Javascript",
        "PostgreSQL",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nontonfilm.cloud",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-nontonfilm.png",
      video: "",
    },
    {
      title: "Simple Weather",
      href: "https://github.com/emonnaja/simple-weather",
      dates: "November 27rd, 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: ["Vite.js", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://emonnaja.github.io/simple-weather/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/emonnaja/simple-weather",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-weather.png",
      video: "",
    },
  ],
  activites: [
    {
      title: "Indosat ID Camp",
      dates: "November 23rd, 2024 - December 31rd, 2024",
      location: "Online",
      description:
        "Participated in the scholarship program by learning front-end web development.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IWN8TJ32lSQJKl_9cjGdK2pfx_PPsR0aJA&s",
      mlh: "",
      links: [],
    },
  ],
} as const;
