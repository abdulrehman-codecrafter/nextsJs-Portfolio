import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
import Safari from "@/components/ui/safari";
import TechBadge from "@/components/custom/badge";

export default function HighlightedProjects() {
    const theme = useTheme();
    const projects = [
        {
            title: "Food Ordering Website",
            description:
                "A seamless online food ordering app built with the MERN stack. Features real-time order tracking, secure payments, and a user-friendly interface.",
            url: "magicui.design",
            imageSrc: "/assets/images/food-project.png",
            stack: [
                { name: "React", imageSrc: "/assets/icons/reactjs.svg" },
                { name: "Firebase", imageSrc: "/assets/icons/firebase.svg" },
                { name: "Vite", imageSrc: "/assets/icons/vitejs.svg" },
            ],
        },
        {
            title: "Ecommerce Website",
            description:
                "A seamless online products ordering app built with the MERN stack. Features real-time order tracking, secure payments, and a user-friendly interface.",
            url: "magicui.design",
            imageSrc: "/assets/images/ecommerce-project.png",
            stack: [
                { name: "React", imageSrc: "/assets/icons/reactjs.svg" },
                { name: "Mongodb", imageSrc: "/assets/icons/mongodb.svg" },
                { name: "Nodejs", imageSrc: "/assets/icons/nodejs.svg" },
            ],
        },
        
    ];

    return (
        <>
            {projects.map((project, index) => (
                <MagicCard
                    className="cursor-pointer flex whitespace-nowrap text-4xl shadow-2xl w-[350px] sm:w-[450px] md:w-[500px] lg:w-[380px] xl:w-[470px] "
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    key={index}
                >
                    <div className="project-card py-[25px] rounded-lg w-fit">
                        <div className="flex justify-center overflow-hidden">
                            <Safari
                                url="magicui.design"
                                className="w-[90%] h-min rounded-lg"
                                imageSrc={project.imageSrc}
                            />
                        </div>
                        <div className="px-5">
                            <h2 className="font-semibold text-xl my-3">
                                {project.title}
                            </h2>
                            <p className="font-light text-base text-wrap">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.stack.map((tech, index) => (
                                    <TechBadge
                                        key={index}
                                        name={tech.name}
                                        imageSrc={tech.imageSrc}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </MagicCard>
            ))}
        </>
    );
}
