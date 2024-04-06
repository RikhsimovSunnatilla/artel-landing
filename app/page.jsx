"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flag, LikeShapes } from "iconsax-react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

import BrandsLine from "@/components/common/elements/brands-line";
import avalon from "@/public/images/brands/avalon.png";
import royal from "@/public/images/brands/royal.png";
import samsung from "@/public/images/brands/samsung.png";
import shivaki from "@/public/images/brands/shivaki.png";
import vesta from "@/public/images/brands/vesta.png";
import brandsLine from "@/public/images/elements/brands-line.svg";
import subtractImage from "@/public/images/elements/subtract.png";
import symbol from "@/public/images/elements/symbol.png";

register();
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);

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

      // gsap.set("#line", { drawSVG: "0% 0%" });

      // gsap.from("#line", {
      //   // scale: 31,
      //   duration: 8,
      //   drawSVG: 0,
      //   ease: "Cubic.easeInOut",
      //   scrollTrigger: {
      //     trigger: ".line",
      //     // pin: true,
      //     // scrub: 1,
      //   },
      // });

      // gsap.set("#line", { visibility: "visible" });

      gsap.from("#line", {
        drawSVG: 0,
        duration: 1,
        // ease: "power1.inOut",
      });
    },
    // { scope: container },
  );

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

      <div className="line relative">
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
        {/* <hr className="mb-[150px] mt-[30px]" /> */}
      </div>

      <div className="container">
        <div className="flex space-x-5 pb-[60px] pt-[120px]">
          <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
            <div className="mb-3 text-sm font-bold">На рынке</div>
            <h2 className="text-5xl font-bold leading-[58px]">
              13<span className="text-2xl">лет</span>
            </h2>
          </div>
          <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
            <div className="mb-3 text-sm font-bold">Товарные категории</div>
            <h2 className="text-5xl font-bold leading-[58px]">22</h2>
          </div>
          <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
            <div className="mb-3 text-sm font-bold">Количество SKU</div>
            <h2 className="text-5xl font-bold leading-[58px]">840</h2>
          </div>
          <div className="h-[160px] w-[236px] flex-shrink-0 rounded-xl bg-white bg-opacity-15 px-6 py-[34px] text-background">
            <div className="mb-3 text-sm font-bold">Количество заводов</div>
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
          <div className="flex space-x-11">
            <div className="w-[965px] flex-shrink-0">
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
                Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши
                бизнес-процессы открыты для клиентов и партнеров. Мы
                обеспечиваем финансовую транспарентность в нашей работе.
              </p>
            </div>
            <div className="w-[965px] flex-shrink-0">
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
                Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши
                бизнес-процессы открыты для клиентов и партнеров. Мы
                обеспечиваем финансовую транспарентность в нашей работе.
              </p>
            </div>
            <div className="w-[965px] flex-shrink-0">
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
                Мы открыты к взаимовыгодному сотрудничеству и партнерству. Наши
                бизнес-процессы открыты для клиентов и партнеров. Мы
                обеспечиваем финансовую транспарентность в нашей работе.
              </p>
            </div>
          </div>
        </div>

        <div className="py-[60px]">
          <div className="mb-11">
            <h1 className="mb-5 text-[40px] font-bold text-background">
              Наша История
            </h1>
            <p className="max-w-[365px] text-xl text-background">
              Предприятие «Артель» имеет многолетнюю историю.
            </p>
          </div>
          <div className="relative flex space-x-11 after:absolute after:bottom-[16px] after:w-full after:border-b after:border-dashed after:border-white after:border-opacity-20 after:content-['']">
            <div className="flex-shrink-0">
              <div className="flex space-x-5 text-white">
                <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-white bg-opacity-5 p-[30px]">
                  <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
                    2011
                  </div>
                  <h5 className="mb-3 text-2xl font-bold">Мы начали здесь</h5>
                  <p className="text-lg">
                    Компания Artel начинает свою деятельность с производства
                    газовых плит и пылесосов в городе Ташкенте. В этом же году
                    Artel подписывает партнерское соглашение с Samsung.
                  </p>
                </div>
                <Image
                  src="/images/history/2011.png"
                  width={600}
                  height={380}
                  alt="Gas plates"
                  className="rounded-[20px] object-cover"
                />
              </div>
              <div className="relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-primary-dark bg-background text-primary-dark shadow-[0_0_0_3px_rgba(255,255,255,0.5)]">
                <Flag variant="Bold" size={24} />
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex space-x-5 text-white">
                <div className="w-[400px] rounded-2xl border border-white border-opacity-10 bg-white bg-opacity-5 p-[30px]">
                  <div className="mb-5 inline-flex rounded-md border border-white border-opacity-20 px-6 py-1.5 text-xl font-medium text-background">
                    2011
                  </div>
                  <h5 className="mb-3 text-2xl font-bold">Мы начали здесь</h5>
                  <p className="text-lg">
                    Компания Artel начинает свою деятельность с производства
                    газовых плит и пылесосов в городе Ташкенте. В этом же году
                    Artel подписывает партнерское соглашение с Samsung.
                  </p>
                </div>
                <Image
                  src="/images/history/2011.png"
                  width={600}
                  height={380}
                  alt="Gas plates"
                  className="rounded-[20px] object-cover"
                />
              </div>
              <div className="relative z-[1] mt-10 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#029A4A] bg-[#35AD6E] text-primary-dark shadow-[0_0_0_3px_rgba(255,255,255,0.2)]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
