import { LikeShapes } from "iconsax-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const MissionItem = ({ imgSrc, title, description, className = "" }) => {
  return (
    <div className={cn("w-[800px] flex-shrink-0", className)}>
      <Image
        src={imgSrc}
        width={965}
        height={620}
        alt="Partners signing the contract"
        className="mb-[30px] rounded-2xl object-cover"
      />
      <div className="mb-5 flex items-center space-x-5 text-white">
        <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-xl bg-[#ECFCE81A]">
          <LikeShapes variant="Bold" size={48} />
        </div>
        <h2 className="text-[40px] font-bold">{title}</h2>
      </div>
      <p className="text-2xl text-background">{description}</p>
    </div>
  );
};
export default MissionItem;
