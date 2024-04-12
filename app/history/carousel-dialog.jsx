import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { X } from "lucide-react";
import Image from "next/image";

import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

const CarouselDialog = ({ isOpen, setIsOpen, images }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="h-screen w-screen max-w-none justify-center !rounded-none !border-0 bg-black">
        <DialogClose asChild>
          <button className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700 text-white">
            <X size={24} />
          </button>
        </DialogClose>
        <div className="relative max-w-[1140px]">
          <button className="swiper-button-prev absolute -left-[126px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-700 text-white disabled:opacity-50">
            <ArrowLeft2 size={24} />
          </button>
          <button className="swiper-button-next absolute -right-[126px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-700 text-white disabled:opacity-50">
            <ArrowRight2 size={24} />
          </button>
          <swiper-container
            slides-per-view="1"
            navigation="true"
            navigation-prev-el=".swiper-button-prev"
            navigation-next-el=".swiper-button-next"
            space-between={50}
          >
            {images.map((image, i) => (
              <swiper-slide key={image + i}>
                <Image
                  src={image}
                  width={1140}
                  height={750}
                  className="h-[750px] rounded-3xl object-cover"
                  alt="Brand"
                  unoptimized
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarouselDialog;
