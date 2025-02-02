"use client";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { Cpu, Smartphone, Zap } from "lucide-react";

import ChooseMeCard from "@/components/custom/choose-me-card";
import ExploreButton from "../components/ui/explore-btn";
import { BlurFade } from "@/components/ui/blur-fade";
import {
    GitHubButton,
    InstagramButton,
    LinkedInButton,
    WhatsAppButton,
} from "@/components/custom/social-links";
import TechStack from "@/components/custom/tech-stack";
import HighlightedProject from "@/components/custom/highlighted-project";
import Footer from "@/components/custom/footer";
export default function Home() {
    const words = ["interactive", "responsive"];
    return (
        <>
            <div className="w-[95%] sm:[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] mx-auto pt-20 px-4">
                <div className="flex items-center justify-between flex-col-reverse md:flex-row mt-10">
                    {/* Hero Introduction */}
                    <div>
                        <BlurFade delay={0.01} inView direction="right">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Hi, I'm
                                <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                                    {" "}
                                    Abdul Rahman
                                </span>
                                <br />
                                Software Engineer
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.2} inView direction="right">
                            <div className="text-lg mt-4 ">
                                I like to build beautiful
                                {/* <FlipWords
                                words={words}
                                duration={1000}
                                className={"text-violet-500"}
                            /> */}{" "}
                                web and mobile apps with code. <br /> I also
                                talk and write about those things.
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.4} inView direction="right">
                            <div className="mt-4">
                                <ExploreButton />
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.6} inView direction="down">
                            <div className="flex gap-5 mt-7">
                                <LinkedInButton />
                                <GitHubButton />
                                <InstagramButton />
                                <WhatsAppButton />
                            </div>
                        </BlurFade>
                    </div>

                    {/* Hero Image */}
                    <BlurFade delay={0.2} inView direction="down">
                        <Image
                            src="/assets/images/profile2.png"
                            alt="logo"
                            priority
                            width={350}
                            height={350}
                            className=""
                        />
                    </BlurFade>
                </div>

                {/* Skill Sets */}
                

                {/* Why Choose Me */}

                <div className="mt-10">
                    <BlurFade delay={0.8} direction="down" inView>
                        <h1 className="text-violet-400 font-semibold text-[22px] mb-6">
                            Why Choose Me
                        </h1>
                    </BlurFade>
                    <BlurFade delay={1} direction="down" inView>
                        <div className="flex gap-4 flex-wrap">
                            <ChooseMeCard
                                icon={<Cpu size={24} />}
                                title="Scalable Web Apps"
                                description="Building high-performance web applications with modern frameworks like React, Next.js, and Node.js."
                                iconBgColor="#6c8ae4" // Lighter shade of #185adb
                            />
                            <ChooseMeCard
                                icon={<Smartphone size={24} />}
                                title="Robust Mobile Solutions"
                                description="Creating cross-platform and native mobile applications with React Native for seamless user experiences."
                                iconBgColor="#ff6b8b" // Lighter shade of #ff3e67
                            />
                            <ChooseMeCard
                                icon={<Zap size={24} />}
                                title="Optimized Performance"
                                description="Ensuring fast, secure, and efficient code for smooth functionality across web and mobile devices."
                                iconBgColor="#8bc78a" // Lighter shade of #62b15c
                            />
                        </div>
                    </BlurFade>
                </div>

                {/* HighLighted Projects */}

                <div className="mt-12">
                    <BlurFade delay={0.2} direction="down" inView>
                        <h1 className=" text-violet-400 font-semibold text-[22px] ">
                            What I've been working on
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.4} direction="down" inView>
                        <p className=" text-[#6A6A6A] font-medium text-[18px] mb-4">
                            Highlighted Projects
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.6} direction="down" inView>
                    <div className="flex flex-wrap mt-1 gap-10">
                            <HighlightedProject />
                        </div>
                    </BlurFade>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}
