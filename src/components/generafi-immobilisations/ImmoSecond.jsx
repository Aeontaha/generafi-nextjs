import ServiceDetail from "../../../public/assets/imgs/portfolio/detail/BanImmo.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const ImmoSecond = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pt-100">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim immoI">
                GénéraFi Immo saura combler vos attentes !
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span className="immo"></span>
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
                    "En disposant d’actions multiples sur vos immobilisations : entrées, mise en service, plan d’amortissement, imputation analytique, réévaluation, groupage, éclatement, inventaire par lecture code à barre… Avec des rapports personnalisables, suivez et contrôlez en temps réel la situation de vos immobilisations et de vos amortissements."
                  }
                </p>
                <p>
                En tant que solution de gestion complète, performante et ergonomique, GénéraFi IMMO s’adapte avec toute structure grâce à son paramétrage avancé en fonction des besoins de chaque organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmoSecond;
