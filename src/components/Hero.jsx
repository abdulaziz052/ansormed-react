import React from "react";
import heroBanner from '../img/hero-img.png'


function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__info">
            <h1 className="hero_title">
              Tabiiy davolash usullari yordamida kasalliklardan xalos bo'ling
            </h1>
            <p className="hero__text">
              Hijoma, manual terapoya, zuluk va turli tabiiy giyohlar eng kop
              uchraydigan kasalliklarni yengishda yordam beradi. Sogligingizni
              oz ishining proffessionaliga ishonib topshiring.
            </p>
            <a href="#kontakt" className="btn">
              Qabulga yozilish
            </a>
          </div>
          <img className="hero__img" src={heroBanner} alt="hero banner" />
        </div>
      </section>
    </>
  );
}

export default Hero;
