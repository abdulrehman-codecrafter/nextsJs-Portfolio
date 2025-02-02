"use client";
import { MagicCard } from "@/components/ui/magic-card";
import {
    Rocket,
    Star,
    Home,
    FileText,
    CuboidIcon as Cube,
    DollarSign,
    Camera,
    Brain,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const projects = [
    {
        icon: <DollarSign className="w-6 h-6 text-blue-400" />,
        title: "Currencee",
        description:
            "The world's most trusted, fast and secure currency converter build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Star className="w-6 h-6 text-purple-400" />,
        title: "Legendarysuni",
        description:
            "Singer/Songwriter Electronic Press Kit build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Home className="w-6 h-6 text-orange-500" />,
        title: "Winrealty",
        description:
            "Real-estate ecommerce site build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Brain className="w-6 h-6 text-blue-500" />,
        title: "Quiznote",
        description:
            "AI-powered quiz generator build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Camera className="w-6 h-6 text-purple-400" />,
        title: "John Eke",
        description:
            "Cinematographer portfolio site build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <FileText className="w-6 h-6 text-orange-400" />,
        title: "Adocs",
        description:
            "Static docs template built with VitePress build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Cube className="w-6 h-6 text-purple-400" />,
        title: "Sanity Portfolio",
        description:
            "Portfolio template built with Sanity and Next.js build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Star className="w-6 h-6 text-blue-500" />,
        title: "Spekni",
        description:
            "Recognition platform built for developer endorsements build with React and TailwindCSS",
        href: "#",
    },
    {
        icon: <Rocket className="w-6 h-6 text-yellow-400" />,
        title: "Rocketmeme",
        description:
            "Simple and intuitive meme generator build with React and TailwindCSS",
        href: "#",
    },
];

export default function Projects() {
    const { theme } = useTheme(); // Destructure `theme` from `useTheme`
    return (
        <div className="w-[95%] sm:[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] mx-auto pt-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Projects
                </h1>

                <p className="text-gray-400 text-lg mb-12 max-w-3xl">
                    I&apos;ve worked on tons of little projects over the years
                    but these are the ones that I&apos;m most proud of. Many of
                    them are open-source, so if you see something that piques
                    your interest, check out the code and contribute if you have
                    ideas on how it can be improved.
                </p>

                <div className="flex flex-wrap gap-4">
                    {projects.map((project) => (
                        <MagicCard
                            key={project.title}
                            className="px-4 cursor-pointer w-[350px] md:w-[300px] lg:w-[32%] rounded-2xl shadow-xl bg-transparent"
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            } // Dynamic gradient based on theme
                        >
                            <Link
                                href={project.href}
                                className="flex-1 min-w-[300px] px-4 py-6  rounded-lg"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="shrink-0 ps-2 pt-1  rounded-lg">
                                        {project.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="text-xl  mb-1 truncate">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-400 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
