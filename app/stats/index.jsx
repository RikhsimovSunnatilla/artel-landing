import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import StatsCard from "./stats-card";

const stats = [
  {
    title: "На рынке",
    amount: 13,
    unit: "лет",
  },
  {
    title: "Товарные категории",
    amount: 22,
  },
  {
    title: "Количество SKU",
    amount: 840,
  },
  {
    title: "Количество заводов",
    amount: 15,
  },
  {
    title: "На рынке",
    amount: 13,
    unit: "лет",
  },
  {
    title: "Общая площадь логистического хаба",
    amount: 400,
    unit: "кв.м",
  },
  {
    title: "Общая площадь логистического хаба",
    amount: 400,
    unit: "кв.м",
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      wrapperRef.current,
      { x: "10%" },
      {
        x:
          (wrapperRef.current.scrollWidth - sectionRef.current.offsetWidth) *
          -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
        },
      },
    );
  });

  return (
    <section ref={sectionRef}>
      <div ref={wrapperRef} className="flex space-x-5 pb-[60px] pt-[120px]">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
