import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import CarouselDialog from "./carousel-dialog";
import HistoryItem from "./history-item";

const historyItems = [
  {
    year: "2011",
    title: "Мы начали здесь",
    description:
      "Компания Artel начинает свою деятельность с производства газовых плит и пылесосов в городе Ташкенте. В этом же году Artel подписывает партнерское соглашение с Samsung.",
    imgSrc: "/images/history/2011.png",
    isStart: true,
  },
  {
    year: "2012",
    title: "Мы начали здесь",
    description:
      "Компания Artel начинает свою деятельность с производства газовых плит и пылесосов в городе Ташкенте. В этом же году Artel подписывает партнерское соглашение с Samsung.",
    imgSrc: "/images/workers.png",
  },
  {
    year: "2013",
    title: "Мы начали здесь",
    description:
      "Компания Artel начинает свою деятельность с производства газовых плит и пылесосов в городе Ташкенте. В этом же году Artel подписывает партнерское соглашение с Samsung.",
    imgSrc: "/images/mission/opennes.png",
  },
];

const carouselImages = historyItems.map((item) => item.imgSrc);

const History = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useGSAP(
    () => {
      let historyItemElements = gsap.utils.toArray(".history-item");

      gsap.to(historyItemElements, {
        xPercent: -100 * (historyItemElements.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (historyItemElements.length - 1),
          end: `+=${1020 * 3 + 44 * 2}`,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative">
      <div className="absolute h-[750px] w-full rounded-[20px] border-2 border-white border-opacity-10" />
      <div className="px-11 py-[60px]">
        <div className="mb-11">
          <h1 className="mb-5 text-[40px] font-bold text-background">
            Наша История
          </h1>
          <p className="max-w-[365px] text-xl text-background">
            Предприятие «Артель» имеет многолетнюю историю.
          </p>
        </div>
        <div ref={containerRef} className="relative flex space-x-11">
          {historyItems.map((item, i) => (
            <HistoryItem
              key={i}
              className="history-item"
              onImgClick={() => setIsDialogOpen(true)}
              {...item}
            />
          ))}
        </div>
      </div>
      <CarouselDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        images={carouselImages}
      />
    </section>
  );
};

export default History;
