import compta1 from "../../../public/assets/imgs/story/compta1.jpg";
import compta2 from "../../../public/assets/imgs/story/compta2.jpg";
import compta3 from "../../../public/assets/imgs/story/compta3.jpg";
import compta4 from "../../../public/assets/imgs/story/compta4.jpg";
import Image from "next/image";

const ComptaAbout = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Présentation</h2>
                <h3 className="sec-title title-anim">GénéraFi Compta</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  Riche en fonctionnalités et orientée productivité, GénéraFi Compta se présente comme une solution innovante, 
                  performante et sécurisée. Conçue, testée et approuvée par des praticiens de la comptabilité, 
                  GénéraFi Compta vous accompagne tout au long du processus de la production comptable et financière 
                  avec une série de fonctionnalités pratiques et une assistance au traitement pour une meilleure productivité pour tenir vos échéances. 
                  </p>
                  <p>
                  Conforme à la législation comptable marocaine selon ses différents modes, 
                  GénéraFi Compta offre une navigation intuitive et une simplicité à l’exécution 
                  qui vous permettra de faire face aux obligations comptables de votre entreprise et de vos clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={compta1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={compta3}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={compta2}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={compta4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComptaAbout;
