import TechStack from "@/components/custom/tech-stack";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowUpRight, Download, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] mx-auto mt-40 px-4">
            <div className="flex flex-col-reverse md:flex-row items-start gap-12">
                {/* Left Section */}
                <div className="flex-1 space-y-8">
                    <BlurFade delay={0.2} direction="up" inView>
                        <h1 className="text-5xl md:text-[60px] font-bold text-[rgb(167,139,250)]">
                            About
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.3} direction="up" inView>
                        <p className="font-medium text-[22px] text-[#6A6A6A]">
                            A short story of me
                        </p>
                    </BlurFade>

                    <div className="space-y-6 text-gray-500">
                        <BlurFade delay={0.4} direction="up" inView>
                            <p className="text-lg">
                                I am a self-driven, career-oriented software
                                engineer specializing in front-end development
                                and open-source, currently pursuing a bachelor's
                                degree in computer science. My expertise lies in
                                building interactive web and mobile
                                applications, primarily using{" "}
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    JavaScript
                                </span>
                                ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    React.js
                                </span>
                                ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    Next.js
                                </span>
                                ,
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    Node.js
                                </span>
                                , and
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    TypeScript
                                </span>
                                .
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.5} direction="up" inView>
                            <p className="text-lg">
                                I strongly believe in continuous learning and
                                improving myself, so I try my best to learn in
                                any situation possible, unfavorable or not.
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.6} direction="up" inView>
                            <p className="text-lg">
                                Outside of coding, I love playing
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    video games
                                </span>{" "}
                                and
                                <span className="text-[rgb(167,139,250)] font-semibold">
                                    {" "}
                                    football
                                </span>
                                , which help me unwind and keep my creativity
                                flowing. Whether it's strategizing in a game or
                                making plays on the field, I enjoy challenges
                                that push me to think differently.{" "}
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.7} direction="up" inView>
                            <div className="mt-12 p-8 rounded-lg border border-gray-300 dark:border-secondary">
                                <span className="text-lg">
                                    If you ever spot me in the wild, don't
                                    hesitate to say hello! Let's grab a drink
                                    and geek-out over the latest advancements in
                                    front-end development or discuss our
                                    favorite programming language.{" "}
                                    <Zap className="w-6 h-6 mt-0 text-yellow-400 inline" />
                                </span>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Right Section */}
                <BlurFade delay={0.5} direction="right" inView>
                    <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-[450px] md:w-[310px] lg:w-[400px]">
                        <div className="rounded-2xl overflow-hidden w-full">
                            <Image
                                src="/assets/images/profile2.png"
                                alt="Profile photo at the beach"
                                width={400}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col w-full space-y-4">
                            <Link
                                href="#"
                                className="w-full flex items-center justify-between px-6 py-3 rounded-lg border border-gray-300 dark:border-secondary"
                            >
                                <span>View Resume</span>
                                <Download className="w-5 h-5 text-[#00FF85]" />
                            </Link>

                            <Link
                                href="mailto:abdulrahman.sde@gmail.com"
                                className="w-full flex items-center justify-between px-6 py-3 rounded-lg border border-gray-300 dark:border-secondary"
                            >
                                <span>abdulrahman.sde@gmail.com</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </BlurFade>
            </div>

            {/* Tech Stack Section */}
            <BlurFade delay={0.2} direction="down" inView>
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-6 text-[rgb(167,139,250)]">
                        Tech Stack and Tools
                    </h2>
                    <div className="px-10">
                        <TechStack />
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}
