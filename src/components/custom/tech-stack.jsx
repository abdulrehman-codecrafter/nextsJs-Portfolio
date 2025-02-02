"use client"
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const highPriorityTechStacks = [
    {
        name: "Next.js",
        grayIcon: "/assets/icons/nextjs2-grey.svg",
        colorIcon: "/assets/icons/nextjs2.svg",
    },
    {
        name: "React",
        grayIcon: "/assets/icons/reactjs-grey.svg",
        colorIcon: "/assets/icons/reactjs.svg",
    },
    {
        name: "Node.js",
        grayIcon: "/assets/icons/nodejs-grey.svg",
        colorIcon: "/assets/icons/nodejs.svg",
    },
    {
        name: "MongoDB",
        grayIcon: "/assets/icons/mongodb-grey.svg",
        colorIcon: "/assets/icons/mongodb.svg",
    },
    {
        name: "MySQL",
        grayIcon: "/assets/icons/mysql-grey.svg",
        colorIcon: "/assets/icons/mysql.svg",
    },
    {
        name: "HTML5",
        grayIcon: "/assets/icons/html5-grey.svg",
        colorIcon: "/assets/icons/html5.svg",
    },
    {
        name: "CSS3",
        grayIcon: "/assets/icons/css3-grey.svg",
        colorIcon: "/assets/icons/css3.svg",
    },
    
];

const lowPriorityTechStacks = [
    {
        name: "Bootstrap",
        grayIcon: "/assets/icons/bootstrap4-grey.svg",
        colorIcon: "/assets/icons/bootstrap4.svg",
    },
    {
        name: "Tailwind",
        grayIcon: "/assets/icons/tailwindcss-grey.svg",
        colorIcon: "/assets/icons/tailwindcss.svg",
    },
    {
        name: "SASS",
        grayIcon: "/assets/icons/sass-grey.svg",
        colorIcon: "/assets/icons/sass.svg",
    },
    {
        name: "JavaScript",
        grayIcon: "/assets/icons/js-grey.svg",
        colorIcon: "/assets/icons/js.svg",
    },
    {
        name: "Redis",
        grayIcon: "/assets/icons/redis-grey.svg",
        colorIcon: "/assets/icons/redis.svg",
    },
    {
        name: "Firebase",
        grayIcon: "/assets/icons/firebase-grey.svg",
        colorIcon: "/assets/icons/firebase.svg",
    },
    {
        name: "Vite",
        grayIcon: "/assets/icons/vitejs-grey.svg",
        colorIcon: "/assets/icons/vitejs.svg",
    },
]

function StackCard({ stackData }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip open={isOpen}>
                <TooltipTrigger asChild>
                    <div
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="relative w-9 h-9 cursor-pointer mx-1.5">
                            {/* Default Gray Icon (visible by default) */}
                            <img
                                src={stackData.grayIcon}
                                alt={stackData.name}
                                className="w-full h-full transition-opacity duration-300 hover:opacity-0"
                            />
                            {/* Colored Icon (only visible on hover) */}
                            <img
                                src={stackData.colorIcon}
                                alt={stackData.name}
                                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                            />
                        </div>
                    </div>
                </TooltipTrigger>
                <AnimatePresence>
                    {isOpen && (
                        <TooltipContent forceMount side="top" sideOffset={8}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn",
                                    },
                                }}
                            >
                                <p>{stackData.name}</p>
                            </motion.div>
                        </TooltipContent>
                    )}
                </AnimatePresence>
            </Tooltip>
        </TooltipProvider>
    );
}

export default function TechStack() {
    return (
        <div className="">
            <div className="w-[100%] overflow-hidden rounded-lg border backdrop-blur-4xl md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:10s] backdrop-blur-2xl py-3 ">
                    {highPriorityTechStacks.map((stack, index) => (
                        <StackCard key={index} stackData={stack} />
                    ))}
                </Marquee>
            </div>
            <div className="w-[100%] overflow-hidden rounded-lg border backdrop-blur-4xl md:shadow-xl mt-3">
                <Marquee pauseOnHover reverse className="[--duration:10s] backdrop-blur-2xl py-3">
                    {lowPriorityTechStacks.map((stack, index) => (
                        <StackCard key={index} stackData={stack} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
