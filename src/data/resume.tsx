import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abyan",
  initials: "MA",
  url: "https://github.com/emonnaja",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description: "Web developer. Exited to try new things.",
  summary:
    "I am someone who genuinely enjoys learning and collaborating within a team. I am motivated by the challenge of meeting performance goals on time and strive for continuous improvement. While I am a beginner in web development, I have a foundational understanding of the field and am eager to build my skills. Additionally, I have some experience working with English and am working to improve my proficiency in both technical and language skills.",
  avatarUrl: "https://s3.tebi.io/shanghai/portofolio/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "SvelteJS",
    "Node.js",
    "Computer Hardware",
    "Cisco",
    "Networking",
    "Tailwind CSS",
    "CSS",
    "HTML5",
    "Javascript",
    "Bootstrap",
    "Vite",
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
      company: "Pusat Data dan Teknologi Informasi",
      href: "https://pusdatin.dikdasmen.go.id/",
      badges: [],
      location: "Office",
      title: "IT Assistant",
      logoUrl: "https://s3.tebi.io/shanghai/portofolio/pusdatin.png",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "As an IT Assistant at Pusat Data dan Teknologi Informasi, I was responsible for providing technical support to Office Staff. I helped troubleshoot hardware and software issues, set up new equipment, and maintained the network. I also assisted with the development of new software and systems, and helped train staff on how to use them. I worked closely with the IT team to ensure that all systems were running smoothly and that any issues were resolved quickly.",
    },
  ],
  education: [
    {
      school: "SMK DARUSSALAM CIPUTAT",
      href: "https://www.instagram.com/smk_darsal36",
      degree: "High School Student",
      logoUrl: "/darsal.jpg",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "STREAMO.",
      href: "https://streamo.web.id",
      dates: "On Development",
      active: true,
      description:
        "Watch all movies and TV series up to 4K resolution without subscribe and login.",
      technologies: [
        "Next.js",
        "Javascript",
        "PostgreSQL",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://streamo.web.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Details",
          href: "https://github.com/emonnaja/streamo-project",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://github.com/emonnaja/streamo-project/blob/main/streamo-screenshot.jpg?raw=true",
      video: "",
    },
    {
      title: "Simple Weather",
      href: "https://emonnaja.github.io/simple-weather/",
      dates: "November 27rd, 2024",
      active: true,
      description: "Get Weather information currently in your location.",
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
    {
      title: "IDCH National Youth Digitalk 2024",
      dates: "December 14rd, 2024",
      location: "Online",
      description:
        "Participated in digital talk with Rea Qintara Dikatio, Iqbal Aqaba, and Sandhika Galih in theme Design Your Future Career In Technology Industry.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ktu74FMmyGHCErwv6jfpvfRl__IdMDsjAg&s",
      mlh: "",
      links: [],
    },
  ],
} as const;
