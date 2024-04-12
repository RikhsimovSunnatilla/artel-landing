import { Flag } from "iconsax-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const HistoryItem = ({
  year,
  title,
  description,
  imgSrc,
  onImgClick,
  isStart,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 after:absolute after:bottom-[16px] after:w-[1064px] after:border-b after:border-dashed after:border-white after:border-opacity-20 after:content-['']",
        className,
      )}
    >
      <div className="flex min-h-[380px] space-x-5 text-white">
        <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-[#109D53] p-[30px]">
          <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
            {year}
          </div>
          <h5 className="mb-3 text-2xl font-bold">{title}</h5>
          <p className="text-lg">{description}</p>
        </div>
        <Image
          src={imgSrc}
          width={600}
          height={380}
          alt="Gas plates"
          className="cursor-pointer rounded-[20px] object-cover"
          onClick={onImgClick}
        />
      </div>
      <div
        className={cn(
          "relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 text-primary-dark",
          isStart
            ? "border-primary-dark bg-background shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"
            : "border-[#029A4A] bg-[#35AD6E] shadow-[0_0_0_3px_rgba(255,255,255,0.2)]",
        )}
      >
        {isStart && <Flag variant="Bold" size={24} />}
      </div>
    </div>
  );
};

export default HistoryItem;
