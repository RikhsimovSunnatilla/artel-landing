import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

import subtractImage from "@/public/images/elements/subtract.png";

const Hero = () => {
  const imageRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      scale: 31,
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={triggerRef}
      className="-z-[1] h-full min-h-screen overflow-hidden bg-[url('/images/home-bg.jpeg')] bg-cover bg-no-repeat"
    >
      <Image
        ref={imageRef}
        src={subtractImage}
        alt="Artel symbol"
        className="image h-full max-h-screen scale-100 object-cover"
      />
    </section>
  );
};

export default Hero;
