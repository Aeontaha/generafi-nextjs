import Image from "next/image";

const ImmoAbout = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Présentation</h2>
                <h3 className="sec-title title-anim">GénéraFi IMMO</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  Quelle que soit la structure de votre organisation, GENERAFI IMMO est la solution de gestion d’immobilisations 
                  qui vous vous apporte simplicité et sérénité dans la gestion et la maîtrise et de votre parc
                  d’immobilisations tout en assurant une conformité comptable et fiscale permanente. 
                  </p>
                  <p>
                  Gérez l’ensemble de vos biens corporels et incorporels, qu’ils soient en propriété, sous contrat de crédit-bail ou de location…
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

export default ImmoAbout;
