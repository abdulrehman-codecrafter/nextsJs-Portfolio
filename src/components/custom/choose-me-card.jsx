
"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";

export default function ChooseMeCard({ icon, title, description, iconBgColor }) {
    const { theme } = useTheme(); // Destructure `theme` from `useTheme`

    return (
        <MagicCard
            className="p-6 cursor-pointer w-[350px] md:w-[300px] lg:w-[32%] rounded-2xl shadow-xl bg-transparent"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} // Dynamic gradient based on theme
        >
            <div className="bg-transparent">
                {/* Icon Container */}
                <div
                    className="inline-block mb-3 p-2 rounded-xl shadow-lg text-white"
                    style={{
                        backgroundColor: iconBgColor,
                        // boxShadow: `3px 3px 10px ${iconBgColor}D0`,
                    }}
                >
                    {icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold">{title}</h4>

                {/* Description */}
                <p className="mt-2 font-light text-[15px]">{description}</p>
            </div>
        </MagicCard>
    );
}