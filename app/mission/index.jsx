import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import MissionItem from "./mission-item";

const missionItems = [
  {
    imgSrc: "/images/mission/opennes.png",
    title: "Открытость",
    description:
      "Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
  },
  {
    imgSrc: "/images/mission/opennes.png",
    title: "Открытость",
    description:
      "Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
  },
  {
    imgSrc: "/images/mission/opennes.png",
    title: "Открытость",
    description:
      "Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши бизнес-процессы открыты для клиентов и партнеров. Мы обеспечиваем финансовую транспарентность в нашей работе.",
  },
];

const Mission = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let missionItemElements = gsap.utils.toArray(".mission-item");

      gsap.to(missionItemElements, {
        xPercent: -100 * (missionItemElements.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (missionItemElements.length - 1),
          end: "+=1000",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-[60px]">
      <div className="mb-11">
        <h1 className="mb-6 text-5xl font-bold leading-[58px] text-background">
          Наша Миссия
        </h1>
        <p className="max-w-[490px] border-l-[3px] border-background pl-5 text-xl text-background">
          Создавать надёжную и выгодную бытовую технику для каждого дома
        </p>
      </div>
      <div ref={containerRef} className="relative flex space-x-11">
        {missionItems.map((item, i) => (
          <MissionItem key={i} className="mission-item" {...item} />
        ))}
      </div>
    </section>
  );
};

export default Mission;
