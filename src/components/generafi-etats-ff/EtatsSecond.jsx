import ServiceDetail from "../../../public/assets/imgs/portfolio/detail/Banetats.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const EtatsSecond = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pt-100">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim immoI">
                Fiez-vous au leader historique de la télé-déclaration fiscale !
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span className="etats"></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>
                  {
                    "Depuis les prémices de la télé-déclaration fiscale au Maroc, GénéraFi États Financiers & Fiscaux a su s’imposer comme un leader auprès des Grandes Entreprises, des PME et des Professionnels Comptables avec l’ambition d’innovation continue afin de garder des parts de marchés à la hauteur de l’offre de service et d’accompagnement prônées par GénéraFi."
                  }
                </p>
                <p>
                Régulièrement à jour pour rester conforme au cahier de charges de la Direction Générale des Impôt, GénéraFi EF demeure l’indétrônable et l’incontournable à ce jour sur son segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EtatsSecond;
