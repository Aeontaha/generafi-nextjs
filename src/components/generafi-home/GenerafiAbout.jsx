import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import About11 from "../../../public/assets/imgs/about/1/arriere-plan-technologique.jpg";
import About12 from "../../../public/assets/imgs/about/1/generafiabout2.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GenerafiAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title title-anim">
                Professionnels Comptables : GénéraFi vous accompagne dans la digitalisation de votre cabinet!
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={About11}
                      alt="About Image"
                      data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <Image
                      priority
                      width={220}
                      style={{ height: "auto" }}
                      src={About12}
                      alt="About Image Right"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                  En s’inscrivant dans un processus de digitalisation globale, votre cabinet peut améliorer 
                  la qualité de son offre et se positionner sur de nouveaux marchés. GénéraFi devient votre allié pour réussir 
                  cette transition digitale en vous proposant des outils applicatifs 
                  basés sur des technologies innovantes et un conseil adapté tant au niveau technique qu’au niveau organisationnel.
                  </p>

                  <div className="cursor-btn btn_wrapper">
                    <Link
                      className="btn-item wc-btn-primary btn-hover"
                      href="/about"
                    >
                      <span></span> Découvrir{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerafiAbout;
