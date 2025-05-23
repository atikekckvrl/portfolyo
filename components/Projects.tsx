import Image from "next/image";
import React from "react";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Dünya Haritası Eğitim Oyunu",
      description:
          "Bu proje, Next.js ve Tailwind CSS kullanılarak geliştirilmiş, dünya haritası üzerinde ülkeleri tahmin etmeye yönelik interaktif bir coğrafya eğitim oyunudur.",
      image: "/Proje1.png",
    },
    {
      title: "Tiktok Efekti",
      description:
          "Bu proje, bir webcam görüntüsünü dört bölgeye ayırarak her bölgeye farklı efektler uygulayan, fotoğraf çekme ve kalp emojisi yerleştirme özelliklerine sahip etkileşimli bir görüntü işleme uygulamasıdır; OpenCV kütüphanesi kullanılarak Python ile geliştirilmiştir.",
      image: "/Proje2.png",
    },
    {
      title: "Portfolio",
      description:
          "Bu proje, React, Next.js ve Tailwind CSS kullanılarak geliştirilen kişisel bir portföy sitesidir.",
      image: "/Proje3.png",
    },
    {
      title: "Kedi Koş",
      description:
          "Bu projede Unity kullanarak bir sonsuz koşu (endless runner) tarzı oyun geliştirdik. Oyunda bir karakter engellerden kaçarak ilerliyor; C# diliyle karakter kontrolü, çarpışma sistemi ve skor takibi gibi temel mekanikler kodlandı.",
      image: "/Proje4.jpg",
    },
  ];

  return (
      <section id="projects" className="py-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-4">PROJELERİM</h2>
        <p className="text-center text-sm text-gray-400 mb-8 tracking-wider">
          ÖNE ÇIKAN ÇALIŞMALAR
        </p>
        <div className="container mx-auto max-w-6xl grid gap-6 grid-cols-1 md:grid-cols-2 px-4">
          {projectList.map((project, index) => (
              <div
                  key={index}
                  className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col justify-start items-center min-h-[520px] pt-4"
              >

                <div className="relative w-full h-[260px] bg-gray-800 flex justify-center items-center">
                  <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={260}
                      className="object-contain"
                  />
                </div>


                <div className="mt-6 px-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
