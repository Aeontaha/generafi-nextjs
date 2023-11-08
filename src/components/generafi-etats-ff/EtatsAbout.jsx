import Image from "next/image";

const EtatsAbout = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Présentation</h2>
                <h3 className="sec-title title-anim">GénéraFi Etats financiers</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  Performant et intuitif, GénéraFi États Financiers & Fiscaux est la référence nationale pour générer, 
                  contrôler et télé-déclarer votre liasse fiscale, vos rémunérations et votre état des ventes.
 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EtatsAbout;
