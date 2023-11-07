import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import comptabanner from "../../../public/assets/imgs/hero/3/comptabanner.jpg";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape24 from "../../../public/assets/imgs/home-7/shape-24.png";
import im from "../../../public/assets/imgs/home-7/im.png"
import Shape44 from "../../../public/assets/imgs/home-7/shape-44.png";
import Image from "next/image.js";

const   ImmoHero = () => {

  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Immobilisations{" "}
                  <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "}
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape24}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about"><Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={im}
                    alt="shape"
                  /></h2>
                <p>
                Performant et puissant, GENERAFI IMMO est l’outil qui vous débarrasse des tracas de la gestion physico-comptable de vos immobilisations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape44}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default ImmoHero;