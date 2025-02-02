
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "currencee",
    title: "Currencee",
    description: "Currencee is a user-friendly and reliable currency converter app designed to provide seamless and accurate currency conversion operations. With support for over 160 world currencies, it helps users quickly convert values across popular currencies such as USD, EUR, GBP, INR, and more. It also integrates an API for real-time conversion rates, ensuring that the data remains up-to-date.",
    image: "/assets/images/currencee.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      "React (Vite)",
      "Node.js",
      "Vanilla CSS",
      "JavaScript",
      "Umami Analytics",
    ],
    features: [
      "Over 160 currencies available for conversion",
      "Modern tooling in React and CSS",
      "Implemented an API proxy using Node.js/Express to secure API keys and provide endpoints for fetching currency data",
      "Cross-browser compatible across numerous devices",
    ],
  },
  {
    slug: "legendarysuni",
    title: "Legendarysuni",
    description: "Legendarysuni is a digital Electronic Press Kit (EPK) for a singer/songwriter, showcasing their music, bio, and portfolio in an elegant and easy-to-navigate format. The app features sections for press releases, upcoming events, music releases, and media, aimed at providing a comprehensive view of the artist’s career for fans, journalists, and promoters.",
    image: "/assets/images/suni.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      "React (Vite)",
      "Node.js",
      "Express",
      "Vanilla CSS",
      "JavaScript",
    ],
    features: [
      "Press releases and upcoming events section",
      "Music streaming and download links",
      "Elegant design ensuring smooth navigation across devices",
      "Artist biography and portfolio",
    ],
  },
  {
    slug: "space-explorer",
    title: "Space Explorer",
    description: "Space Explorer is an educational app that allows users to explore the universe, learn about celestial bodies, and view detailed information about planets, moons, stars, and galaxies. It integrates NASA's API to provide live data about space missions, astronomical events, and upcoming launches.",
    image: "/assets/images/space-explorer.png",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      "React (Vite)",
      "Node.js",
      "Three.js",
      "NASA API",
      "JavaScript",
    ],
    features: [
      "Interactive 3D models of the solar system and celestial bodies",
      "Live data from NASA's API for space missions and astronomical events",
      "Educational tool for students, educators, and space enthusiasts",
      "Searchable database of planets, moons, stars, and galaxies",
    ],
  },
  // Add the rest of your projects with similar data
];

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl">{project.title}</h1>
          <div className="flex items-center gap-4">
            <Link href={project.liveUrl} className="flex items-center gap-2">
              <span>Live URL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href={project.githubUrl} className="flex items-center gap-2">
              <span>GitHub</span>
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Preview Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            width={900}
            height={600}
            className="w-1/2 mx-auto"
          />
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl">Overview</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl">Technologies</h2>
          <ul className="space-y-2 text-gray-400">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl flex items-center gap-2">
            <span className="text-gray-400">#</span> Features
          </h2>
          <ul className="space-y-2 text-gray-400 list-disc pl-5">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
