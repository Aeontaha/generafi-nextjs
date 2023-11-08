import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import comptabanner from "../../../public/assets/imgs/hero/3/comptabanner.jpg";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape25 from "../../../public/assets/imgs/home-7/shape-25.png";
import etatf from "../../../public/assets/imgs/home-7/etatf.png"
import Shape55 from "../../../public/assets/imgs/home-7/shape-55.png";
import Image from "next/image.js";

const   EtatsHero = () => {

  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                    Etats financiers{" "}
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
                    src={Shape25}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about"><Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={etatf}
                    alt="shape"
                  /></h2>
                <p>
                Performant et intuitif, GENERAFI ETATS FINANCIERS est la référence pour générer, contrôler et télétransmettre vos déclarations fiscales en mode EDI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={520}
          style={{ height: "auto" }}
          src={Shape55}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default EtatsHero;