import { useEffect } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Home7m from "../../../public/assets/imgs/home-7/m.png";
import Home7w from "../../../public/assets/imgs/home-7/w.png";
import Home7fwa from "../../../public/assets/imgs/home-7/fwa.png";
import Home7webby from "../../../public/assets/imgs/home-7/webby.png";
import logoGenerafi from "../../../public/assets/imgs/logo/generafilogo.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ComptaClients = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });
        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            gsap.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
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
        const counterNumber = gsap.utils.toArray(".counter__number");
        gsap.from(counterNumber, {
          textContent: 0,
          duration: 1,
          ease: Power1.easeIn,
          snap: { textContent: 1 },
          stagger: 1,
          scrollTrigger: {
            trigger: ".counter__number",
          },
        });
        gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5 });
        gsap.to(".zoom_in", {
          scrollTrigger: {
            trigger: ".zoom_in",
            start: "top center+=200",
            markers: false,
          },
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="award__area-7">
        <div className="container">
          <div className="row inherit_row">
            <div className="col-xxl-12">
              <div className="award__top-7">
                <div className="award__counter fade_bottom_2 compta">
                  <h2 className="counter__number">79%</h2>
                  <p>Tickets traités en moins de 4h</p>
                </div>
                <div className="award-video-7">
                  <video loop muted autoPlay playsInline>
                    <source src="assets/video/generafi-compta.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="award__btm-7 clients2">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                <div className="award__left-7">
                 
                  <Image
                        priority
                        width={200}
                        style={{ height: "auto" }}
                        src={logoGenerafi}
                        alt="Image"
                      />
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-8">
                <div className="award__mid-7 text-anim">
                  <p>
                  Une équipe d’experts vous accompagnent par un suivi personnalisé. Et un service d’assistance disponible en illimité
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="award__right-7">
                  <div className="award__list-7">
                    <div className="fade_bottom_2 counter2">
                      <h2 className="counter__number">2000+</h2>
                      <p>Clients</p>
                    </div>
                    <div className=" fade_bottom_2 counter2 ">
                      <h2 className="counter__number">5000+</h2>
                      <p>Utilisateurs</p>
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

export default ComptaClients;
