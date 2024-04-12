"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown, ChevronRight, Globe, Menu, Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";

const Navbar = () => {
  const navbarRef = useRef(null);

  useGSAP((context, contextSafe) => {
    const handleScroll = contextSafe(() => {
      if (window.scrollY > 100) {
        gsap.to(navbarRef.current, { opacity: 0, zIndex: -1, duration: 0.5 });
      } else {
        gsap.to(navbarRef.current, { opacity: 1, zIndex: 10, duration: 0.5 });
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      ref={navbarRef}
      className="container sticky top-0 mx-auto w-full bg-transparent pb-3 pt-4"
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo-uz.svg"
            width={91}
            height={46}
            alt="Artel logo"
            priority
          />
          <span className="ml-4 mr-2 h-9 border-l border-gray-400" />
          <button className="flex items-center px-3.5 py-1.5 text-sm text-background">
            Ташкент <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center space-x-12 text-background">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1.5">
              <Globe className="h-5 w-5" />
              <span className="text-sm">RU</span>
            </button>
            <a
              href="tel:+998781488888"
              className="flex items-center space-x-1.5"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">+998 78 148-88-88</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Бизнес</Button>
            <Button variant="outline">
              Меню
              <Menu className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center space-x-3 text-background">
        <Button>Назад</Button>
        <div className="flex items-center">
          <Button variant="ghost" className="">
            Главная
          </Button>
          <ChevronRight className="h-4 w-4" />
          <Button variant="ghost" className="text-primary-light">
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
