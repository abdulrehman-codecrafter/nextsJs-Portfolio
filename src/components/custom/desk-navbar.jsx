"use client";

import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";

export default function DeskNavbar() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] md:w-[600px] text-[15px] sm:text-[16px] backdrop-blur-3xl rounded-xl shadow-lg">
            <nav className="flex justify-between items-center px-8 py-1.5">
                <Link href="/" className="flex gap-2 text-slate-600  hover:text-violet-400 transition-all duration-300" >
                    
                    <span >Home</span>
                </Link>
                <Link href="/about" className="flex gap-2 text-slate-600  hover:text-violet-400 transition-all duration-300 ">
                    <span >About</span>
                </Link>
                <Link href="/projects" className="flex gap-2 text-slate-600  hover:text-violet-400 transition-all duration-300">
                    <span >Projects</span>
                </Link>
                <Link href="/blogs" className="flex gap-2 text-slate-600  hover:text-violet-400 transition-all duration-300">

                    <span >Blogs</span>
                </Link>
                <div
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg p-2"
                >
                    <ThemeToggler />
                </div>
            </nav>
        </div>
    );
}
