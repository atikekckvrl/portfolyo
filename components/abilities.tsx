import Image from "next/image";
import React from "react";
import { FaCode, FaMicrochip, FaCamera, FaGamepad } from "react-icons/fa";

const Abilities: React.FC<{}> = () => {
  return (
      <section id="experience">
        <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
          Neler Yapabilirim
        </h2>
        <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          YETENEKLERİM
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          {/* Kutu 1: Frontend Geliştirme */}
          <div className="border border-yellow-500 rounded-xl p-6 bg-gray-800">
            <div className="text-yellow-100 text-4xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Frontend Geliştirme
            </h3>
            <p className="text-gray-200 text-sm">
              React, Next.js gibi teknolojilerle kullanıcı dostu ve yüksek performanslı web arayüzleri geliştiriyorum.
            </p>
          </div>

          {/* Kutu 2: Gömülü Sistemler */}
          <div className="border border-yellow-500 rounded-xl p-6 bg-gray-800">
            <div className="text-yellow-100 text-4xl mb-4">
              <FaMicrochip />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Gömülü Sistemler
            </h3>
            <p className="text-gray-200 text-sm">
              C ve C++ dilleri ile gömülü sistemlerde düşük seviyeli programlama yapıyorum.
            </p>
          </div>

          {/* Kutu 3: Görüntü İşleme */}
          <div className="border border-yellow-500 rounded-xl p-6 bg-gray-800">
            <div className="text-yellow-100 text-4xl mb-4">
              <FaCamera />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Görüntü İşleme
            </h3>
            <p className="text-gray-200 text-sm">
              OpenCV ve benzeri kütüphanelerle görüntü analizi, nesne tanıma ve bilgisayarla görme projeleri geliştiriyorum.
            </p>
          </div>

          {/* Kutu 4: Unity ile Oyun Geliştirme */}
          <div className="border border-yellow-500 rounded-xl p-6 bg-gray-800">
            <div className="text-yellow-100 text-4xl mb-4">
              <FaGamepad />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-200">
              Unity ile Oyun Geliştirme
            </h3>
            <p className="text-gray-200 text-sm">
              Unity ve C# kullanarak 2D ve 3D oyun projeleri geliştiriyorum. Hem mobil hem masaüstü platformlara yönelik içerikler üretiyorum.
            </p>
          </div>
        </div>
      </section>
  );
};

export default Abilities;
