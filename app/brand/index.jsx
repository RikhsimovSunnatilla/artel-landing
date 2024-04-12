import Image from "next/image";

import BrandsLine from "@/components/common/elements/brands-line";
import avalon from "@/public/images/brands/avalon.png";
import royal from "@/public/images/brands/royal.png";
import samsung from "@/public/images/brands/samsung.png";
import shivaki from "@/public/images/brands/shivaki.png";
import vesta from "@/public/images/brands/vesta.png";
import symbol from "@/public/images/elements/symbol.png";

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

const Brand = () => {
  return (
    <section className="relative">
      <BrandsLine className="absolute left-0 right-0 top-[110px] z-[-1] w-full" />
      <div className="relative pb-[120px] pt-[90px]">
        <Image src={symbol} alt="" className="absolute right-0 top-[60px]" />
        <div className="container">
          <h3 className="mb-11 max-w-[900px] text-4xl font-bold leading-[48px]">
            ARTEL - молодой и амбициозный бренд бытовой техники провозглашенный
            лидером по надежности и эффективности среди конечных пользователей.
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
              Бренд Портфель -
              <br /> Artel Electronics включает в себя несколько брендов
            </h3>
          </div>
          <p className="mb-11 border-l-[3px] border-primary-dark px-5 text-xl">
            Artel предлагает продукцию под собственной торговой маркой, является
            партнёром Shivaki, Avalon, Vesta и Royal, а также является
            официальным региональным партнером Samsung и Viessmann в
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
                <Image src={brandLogo} className="object-contain" alt="Brand" />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default Brand;
