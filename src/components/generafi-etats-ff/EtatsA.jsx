import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const EtatsA = () => {
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
                        Fichier EDI  inversé
                    </h3>
                    <p className="etat-pp">
                    Restitution de la liasse fiscale à partir du fichier EDI
                    </p>
                  
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  
                    <h3 className="ps-title">
                    Récupération automatisée 
                      
                    </h3>
                    <p className="etat-pp">
                    Intégration avec les solutions comptables les plus utilisées
                    </p>
                 
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="portfolio__service-item">
                  
                    <h3 className="ps-title">
                    Paramétrage des périodes 
                    </h3>
                    <p className="etat-pp">
                    Situation comptable avec comparatif multi périodes
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtatsA;
