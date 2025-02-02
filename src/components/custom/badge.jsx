import Image from "next/image";



const TechBadge = ({ name,imageSrc }) => {
  return (
    <div
      className={`px-3 py-1 w-fit flex items-center gap-2 text-xs font-medium border rounded-full shadow-x bg-[#ec4899]-500/10 `}
    >
      <Image
        src={imageSrc} // Ensure you have icons named accordingly
        width={12}
        height={12}
        alt={`${name} Icon`}
        className="w-3 h-3"
      />
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;

