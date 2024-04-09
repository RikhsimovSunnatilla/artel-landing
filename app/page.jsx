"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft2, ArrowRight2, Flag, LikeShapes } from "iconsax-react";
import { X } from "lucide-react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

import BrandsLine from "@/components/common/elements/brands-line";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import avalon from "@/public/images/brands/avalon.png";
import royal from "@/public/images/brands/royal.png";
import samsung from "@/public/images/brands/samsung.png";
import shivaki from "@/public/images/brands/shivaki.png";
import vesta from "@/public/images/brands/vesta.png";
import subtractImage from "@/public/images/elements/subtract.png";
import symbol from "@/public/images/elements/symbol.png";

register();
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const brandLogos = [
  shivaki,
  vesta,
  avalon,
  royal,
  samsung,
  shivaki,
  vesta,
  avalon,
  royal,
];

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(".image", {
        scale: 31,
        duration: 5,
        scrollTrigger: {
          trigger: "#zoom-out",
          pin: true,
          scrub: true,
        },
      });

      gsap.to(".green-section", {
        yoyo: true,
        scrollTrigger: {
          trigger: ".green-section-trigger",
          scrub: true,
          end: "bottom bottom",
        },
        background:
          "linear-gradient(90deg, rgba(0,108,65,1) 0%, rgba(5,125,69,1) 50%, rgba(20,161,103,1) 100%)",
      });

      const statsSection = document.querySelector(".stats-section");
      const wrapper = document.querySelector(".stats-wrapper");

      const [x, xEnd] = [
        "10%",
        (wrapper.scrollWidth - statsSection.offsetWidth) * -1,
      ];
      gsap.fromTo(
        wrapper,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: statsSection,
            scrub: 0.5,
          },
        },
      );

      let missionSections = gsap.utils.toArray(".mission");

      gsap.to(missionSections, {
        xPercent: -100 * (missionSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".mission-container",
          pin: true,
          scrub: 1,
          snap: 1 / (missionSections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=1000",
        },
      });

      let historySections = gsap.utils.toArray(".history");

      gsap.to(historySections, {
        xPercent: -100 * (historySections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".history-container",
          pin: true,
          scrub: 1,
          snap: 1 / (historySections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: `+=${1020 * 3 + 44 * 2}`,
        },
      });
    },
    // { scope: container },
  );

  // DONE: Bg rang o'zgarishi
  // TODO: Mission bo'limi paddingi
  // DONE: History bo'limi karusel-modal

  return (
    <main className="">
      <div
        id="zoom-out"
        className="-z-[1] h-full min-h-screen overflow-hidden bg-[url('/images/home-bg.jpeg')] bg-cover bg-no-repeat"
      >
        <Image
          src={subtractImage}
          alt=""
          className="image h-full max-h-screen scale-100 object-cover"
        />
      </div>

      <div className="relative">
        <BrandsLine className="absolute left-0 right-0 top-[110px] z-[-1] w-full" />
        <div className="relative pb-[120px] pt-[90px]">
          <Image src={symbol} alt="" className="absolute right-0 top-[60px]" />
          <div className="container">
            <h3 className="mb-11 max-w-[900px] text-4xl font-bold leading-[48px]">
              ARTEL - молодой и амбициозный бренд бытовой техники
              провозглашенный лидером по надежности и эффективности среди
              конечных пользователей.
            </h3>
            <p className="max-w-[1100px] text-xl">
              Ключевая особенность бренда Artel является мультикатегорийность с
              более 16 категорий включая решения бытовой техники для кухни,
              гостинной и уборки, что позволит полностью укомплектовать Ваш дом
              современной техникой.
            </p>
          </div>
        </div>

        <div className="container">
          <div>
            <Image
              src="/images/workers.png"
              width={1260}
              height={680}
              alt="Workers"
              className="mb-11 rounded-[20px] object-cover"
            />
            <div className="mb-[30px] flex items-center space-x-[30px]">
              <Image
                src="/images/logo-ru.svg"
                width={140}
                height={70}
                alt="Logo"
              />
              <h3 className="text-4xl font-bold text-foreground">
                Бренд Портфель-
                <br /> Artel Electronics включает в себя несколько брендов
              </h3>
            </div>
            <p className="mb-11 border-l-[3px] border-primary-dark px-5 text-xl">
              Artel предлагает продукцию под собственной торговой маркой,
              является партнёром Shivaki, Avalon, Vesta и Royal, а также
              является официальным региональным партнером Samsung и Viessmann в
              Узбекистане.
            </p>
            <swiper-container
              slides-per-view="5"
              autoplay="true"
              autoplay-delay="1500"
              space-between={50}
            >
              {brandLogos.map((brandLogo, i) => (
                <swiper-slide
                  key={brandLogo + i}
                  style={{
                    width: 252,
                    height: 130,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={brandLogo}
                    className="object-contain"
                    alt="Brand"
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
      </div>

      <div className="green-section relative bg-white">
        <div className="container">
          <div className="green-section-trigger">
            <div className="stats-section">
              <div className="stats-wrapper flex space-x-5 pb-[60px] pt-[120px]">
                <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
                  <div className="mb-3 text-sm font-bold">На рынке</div>
                  <h2 className="text-5xl font-bold leading-[58px]">
                    13<span className="text-2xl">лет</span>
                  </h2>
                </div>
                <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
                  <div className="mb-3 text-sm font-bold">
                    Товарные категории
                  </div>
                  <h2 className="text-5xl font-bold leading-[58px]">22</h2>
                </div>
                <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
                  <div className="mb-3 text-sm font-bold">Количество SKU</div>
                  <h2 className="text-5xl font-bold leading-[58px]">840</h2>
                </div>
                <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
                  <div className="mb-3 text-sm font-bold">
                    Количество заводов
                  </div>
                  <h2 className="text-5xl font-bold leading-[58px]">15</h2>
                </div>
                <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
                  <div className="mb-3 text-sm font-bold">На рынке</div>
                  <h2 className="text-5xl font-bold leading-[58px]">
                    13<span className="text-2xl">лет</span>
                  </h2>
                </div>
                <div className="flex h-[160px] w-[236px] flex-shrink-0 flex-col justify-center rounded-xl bg-white bg-opacity-15 px-6 text-background">
                  <div className="mb-3 text-sm font-bold">
                    Общая площадь логистического хаба
                  </div>
                  <h2 className="whitespace-nowrap text-5xl font-bold leading-[58px]">
                    400<span className="text-2xl">кв.м</span>
                  </h2>
                </div>
                <div className="flex h-[160px] w-[236px] flex-shrink-0 flex-col justify-center rounded-xl bg-white bg-opacity-15 px-6 text-background">
                  <div className="mb-3 text-sm font-bold">
                    Общая площадь логистического хаба
                  </div>
                  <h2 className="whitespace-nowrap text-5xl font-bold leading-[58px]">
                    400<span className="text-2xl">кв.м</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="py-[60px]">
              <div className="mb-11">
                <h1 className="mb-6 text-5xl font-bold leading-[58px] text-background">
                  Наша Миссия
                </h1>
                <p className="max-w-[490px] border-l-[3px] border-background pl-5 text-xl text-background">
                  Создавать надёжную и выгодную бытовую технику для каждого дома
                </p>
              </div>
              <div className="mission-container relative flex space-x-11">
                <div className="mission w-[800px] flex-shrink-0">
                  <Image
                    src="/images/mission/opennes.png"
                    width={965}
                    height={620}
                    alt="Partners signing the contract"
                    className="mb-[30px] rounded-2xl object-cover"
                  />
                  <div className="mb-5 flex items-center space-x-5 text-white">
                    <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-xl bg-[#ECFCE81A]">
                      <LikeShapes variant="Bold" size={48} />
                    </div>
                    <h2 className="text-[40px] font-bold">Открытость</h2>
                  </div>
                  <p className="text-2xl text-background">
                    Мы открыты к взаимовыгодному сотрудничеству и партнерству.
                    Наши бизнес-процессы открыты для клиентов и партнеров. Мы
                    обеспечиваем финансовую транспарентность в нашей работе.
                  </p>
                </div>
                <div className="mission w-[800px] flex-shrink-0">
                  <Image
                    src="/images/mission/opennes.png"
                    width={965}
                    height={620}
                    alt="Partners signing the contract"
                    className="mb-[30px] rounded-2xl object-cover"
                  />
                  <div className="mb-5 flex items-center space-x-5 text-white">
                    <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-xl bg-[#ECFCE81A]">
                      <LikeShapes variant="Bold" size={48} />
                    </div>
                    <h2 className="text-[40px] font-bold">Открытость</h2>
                  </div>
                  <p className="text-2xl text-background">
                    Мы открыты к взаимовыгодному сотрудничеству и партнерству.
                    Наши бизнес-процессы открыты для клиентов и партнеров. Мы
                    обеспечиваем финансовую транспарентность в нашей работе.
                  </p>
                </div>
                <div className="mission w-[800px] flex-shrink-0">
                  <Image
                    src="/images/mission/opennes.png"
                    width={965}
                    height={620}
                    alt="Partners signing the contract"
                    className="mb-[30px] rounded-2xl object-cover"
                  />
                  <div className="mb-5 flex items-center space-x-5 text-white">
                    <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-xl bg-[#ECFCE81A]">
                      <LikeShapes variant="Bold" size={48} />
                    </div>
                    <h2 className="text-[40px] font-bold">Открытость</h2>
                  </div>
                  <p className="text-2xl text-background">
                    Мы открыты к взаимовыгодному сотрудничеству и партнерству.
                    Наши бизнес-процессы открыты для клиентов и партнеров. Мы
                    обеспечиваем финансовую транспарентность в нашей работе.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
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
              <div className="history-container relative flex space-x-11">
                <div className="history flex-shrink-0 after:absolute after:bottom-[16px] after:w-[1064px] after:border-b after:border-dashed after:border-white after:border-opacity-20 after:content-['']">
                  <div className="flex space-x-5 text-white">
                    <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-[#109D53] p-[30px]">
                      <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
                        2011
                      </div>
                      <h5 className="mb-3 text-2xl font-bold">
                        Мы начали здесь
                      </h5>
                      <p className="text-lg">
                        Компания Artel начинает свою деятельность с производства
                        газовых плит и пылесосов в городе Ташкенте. В этом же
                        году Artel подписывает партнерское соглашение с Samsung.
                      </p>
                    </div>
                    <Image
                      src="/images/history/2011.png"
                      width={600}
                      height={380}
                      alt="Gas plates"
                      className="rounded-[20px] object-cover"
                      onClick={() => setIsDialogOpen(true)}
                    />
                  </div>
                  <div className="relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-primary-dark bg-background text-primary-dark shadow-[0_0_0_3px_rgba(255,255,255,0.5)]">
                    <Flag variant="Bold" size={24} />
                  </div>
                </div>
                <div className="history flex-shrink-0 after:absolute after:bottom-[16px] after:w-[1064px] after:border-b after:border-dashed after:border-white after:border-opacity-20 after:content-['']">
                  <div className="flex space-x-5 text-white">
                    <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-[#109D53] p-[30px]">
                      <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
                        2011
                      </div>
                      <h5 className="mb-3 text-2xl font-bold">
                        Мы начали здесь
                      </h5>
                      <p className="text-lg">
                        Компания Artel начинает свою деятельность с производства
                        газовых плит и пылесосов в городе Ташкенте. В этом же
                        году Artel подписывает партнерское соглашение с Samsung.
                      </p>
                    </div>
                    <Image
                      src="/images/workers.png"
                      width={600}
                      height={380}
                      alt="Gas plates"
                      className="rounded-[20px] object-cover"
                      onClick={() => setIsDialogOpen(true)}
                    />
                  </div>
                  <div className="relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#029A4A] bg-[#35AD6E] text-primary-dark shadow-[0_0_0_3px_rgba(255,255,255,0.2)]"></div>
                </div>
                <div className="history flex-shrink-0 after:absolute after:bottom-[16px] after:w-[1020px] after:border-b after:border-dashed after:border-white after:border-opacity-20 after:content-['']">
                  <div className="flex space-x-5 text-white">
                    <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-[#109D53] p-[30px]">
                      <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
                        2011
                      </div>
                      <h5 className="mb-3 text-2xl font-bold">
                        Мы начали здесь
                      </h5>
                      <p className="text-lg">
                        Компания Artel начинает свою деятельность с производства
                        газовых плит и пылесосов в городе Ташкенте. В этом же
                        году Artel подписывает партнерское соглашение с Samsung.
                      </p>
                    </div>
                    <Image
                      src="/images/mission/opennes.png"
                      width={600}
                      height={380}
                      alt="Gas plates"
                      className="rounded-[20px] object-cover"
                      onClick={() => setIsDialogOpen(true)}
                    />
                  </div>
                  <div className="relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#029A4A] bg-[#35AD6E] text-primary-dark shadow-[0_0_0_3px_rgba(255,255,255,0.2)]"></div>
                </div>
              </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                    {[
                      "/images/history/2011.png",
                      "/images/workers.png",
                      "/images/mission/opennes.png",
                    ].map((image, i) => (
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
          </div>
        </div>
      </div>
    </main>
  );
}
