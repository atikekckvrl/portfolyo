import React from "react";

const About: React.FC<{}> = () => {
  return (
      <section
          id="about"
          className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
          style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
          <h1 className="text-white font-semibold text-6xl">Ben Kimim?</h1>
          <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
            HAKKIMDA
          </p>
          <p className="text-gray-300 text-center">
            Merhaba! Ben Atike Küçükvarol. Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümü 4.Sınıf öğrencisiyim. Web tasarım ve geliştirme öğrenme üzerine çalışıyorum.
            Şu anda React ve web teknolojileri üzerine kendimi geliştiriyorum.
            Kullanıcı deneyimini öncelikli hedefim haline getirerek, estetik ve erişilebilir web arayüzleri tasarlamayı amaçlıyorum.
            <br />
            <br />
            Kod yazmak, benim için yalnızca bir meslek değil; aynı zamanda yaratıcılığımı ifade etme biçimim. Her yeni proje, öğrenme ve keşfetme fırsatı sunuyor.
            Gelişen teknolojileri yakından takip ederek, öğrendiklerimi projelerime entegre ediyor ve kendimi sürekli olarak geliştiriyorum.
          </p>
        </div>
      </section>
  );
};

export default About;
