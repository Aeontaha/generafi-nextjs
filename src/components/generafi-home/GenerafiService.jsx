import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Gestionhome from "../../../public/assets/imgs/service/4/Gestionhome.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GenerafiService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-4">
        <div className="container g-0 line_4 pt-150 pb-140">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div className="service__left-6">
                <h2 className="sec-subtile-6">Services</h2>
                <h3 className="sec-title-6 title-anim">
                  Gestion<br />d’entrprise
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="service__right-4">
                <p>
                Nous réinventons en permanence l’avenir en développant la prochaine génération de produits,
                de marques et de services dans le domaine de la gestion d’entreprise{" "}
                  <span>, en adoptant une approche hybride.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="service__inner-4">
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                <div className="service__img-left">
                  <Image
                    priority
                    width={430}
                    style={{ height: "auto" }}
                    src={Gestionhome}
                    alt="Service"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                <div className="service__list-4">
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>01</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Gestion commerciale
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>02</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Gestion d’immobilisations
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
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

export default GenerafiService;
