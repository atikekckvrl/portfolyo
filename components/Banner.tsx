"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
      <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20]">
        <div className="flex flex-col justify-center text-center">
          <div className="justify-center flex">
            <Image
                priority
                src="/atike.png"
                height={250}
                width={250}
                alt="Atike Küçükvarol"
            />
          </div>

          <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
            Atike Küçükvarol
          </div>

          <div className="flex justify-center">
            <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
              KODLAMANIN{" "}
              <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              PEŞİNDE
            </span>
            </p>
          </div>

          <p className="text-md text-gray-200 my-5 max-w-[600px]">
            React ve modern web teknolojileri kullanarak kullanıcı dostu, şık ve erişilebilir arayüzler geliştirmeye çalışıyorum. Kodlamaya olan ilgim, her projede kendini gösteriyor.
          </p>
        </div>
      </div>
  );
};

export default Banner;



