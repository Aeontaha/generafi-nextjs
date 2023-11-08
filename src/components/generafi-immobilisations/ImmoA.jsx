import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ImmoA = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <div>
      <section className="portfolio__service service-v5 pt-140 pb-140 sec-immo">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title animation__char_come" ref={charAnim}>
                {" "}
                Atout
              </h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text">
                <p>
                  Static and dynamic secure code review can prevent a 0day
                  before your product is even released. We can integrate with
                  your dev environment
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  
                    <h3 className="ps-title">
                      Gestion électronique <br /> de documentes
                    </h3>
                  
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  
                    <h3 className="ps-title">
                    Fonctions
                      <br />  d’impression avancées
                    </h3>
                 
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  
                    <h3 className="ps-title">
                    Assistant à 
                      <br /> l’inventaire physique
                    </h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmoA;
