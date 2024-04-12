"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Brand from "./brand";
import Hero from "./hero";
import History from "./history";
import Mission from "./mission";
import Stats from "./stats";

const Home = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        background:
          "linear-gradient(90deg, rgba(0,108,65,1) 0%, rgba(5,125,69,1) 50%, rgba(20,161,103,1) 100%)",
        yoyo: true,
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          end: "bottom bottom",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <main>
      <Hero />
      <Brand />
      <div ref={containerRef} className="relative bg-white">
        <div className="container">
          <div ref={triggerRef}>
            <Stats />
            <Mission />
          </div>
          <History />
        </div>
      </div>
    </main>
  );
};

export default Home;
