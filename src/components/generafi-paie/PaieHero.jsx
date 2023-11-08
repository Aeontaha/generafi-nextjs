import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import comptabanner from "../../../public/assets/imgs/hero/3/comptabanner.jpg";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape23 from "../../../public/assets/imgs/home-7/shape-23.png";
import paie from "../../../public/assets/imgs/home-7/paie.png"
import Shape33 from "../../../public/assets/imgs/home-7/shape-33.png";
import Image from "next/image.js";

const PaieHero = () => {

  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Paie{" "}
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
                    src={Shape23}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about"><Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={paie}
                    alt="shape"
                  /></h2>
                <p>
                La gestion de la paie à la portée de tout le monde.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={520}
          style={{ height: "auto" }}
          src={Shape33}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default PaieHero;