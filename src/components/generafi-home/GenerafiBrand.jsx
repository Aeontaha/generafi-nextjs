import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import fest from "../../../public/assets/imgs/brand/fest.jpg";
import hassan from "../../../public/assets/imgs/brand/hassan.jpg";
import onp from "../../../public/assets/imgs/brand/onp.jpg";
import rado from "../../../public/assets/imgs/brand/rado.jpg";
import rbt from "../../../public/assets/imgs/brand/rbt.jpg";
import sita from "../../../public/assets/imgs/brand/sita.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GenerafiBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
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
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
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
      <section className="brand__area-4">
        <div className="container g-0 line_4 pt-130 pb-150">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim" data-speed="1">
                We worked with global largest brands
              </h2>
              <div className="brand__list-3">
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={97}
                    height={67}
                    src={fest}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={85}
                    height={67}
                    src={hassan}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={114}
                    height={64}
                    src={onp}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={82}
                    height={70}
                    src={rado}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={115}
                    height={67}
                    src={rbt}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={121}
                    height={63}
                    src={sita}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerafiBrand;
