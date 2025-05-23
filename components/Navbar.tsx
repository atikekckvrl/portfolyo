"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  const handleScrollToContact = () => {
    setTimeout(() => {
      const section = document.getElementById("iletisim");
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
      <div className="w-full h-[65px] fixed z-50 px-10 bg-gray-600">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
              title="Atike Küçükvarol"
              href="/"
              className="h-auto w-auto flex flex-row items-center"
          >
            <Image
                src="/Logo.png"
                alt="Atike Küçükvarol - Geliştirici"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[80px] h-[80px]"
            />
          </a>

          <div className="flex flex-row gap-5">
            <div
                onClick={handleScrollToContact}
                className="z-[1] cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
            >
              İletişim
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
