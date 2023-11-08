import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/application-femme.jpg";
import Image from "next/image";

const EtatsFaq = () => {
  return (
    <>
      <section className="faq__area paie_faq">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                Fonctionnalités principales 
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        Établissez et contrôlez votre liasse fiscale
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p className="et-faq">
                        Les tableaux de votre liasse fiscale sont générés automatiquement d’après votre balance comptable. 
                        Consultez le détail de chaque rubrique et modifier les formules de calcul des rubriques que vous jugez nécessaire. 
                        Générez votre contrôle de concordance qui vous indiquera les irrégularités restantes au niveau de vos tableaux de liasse fiscale 
                        avant de l’imprimer en sous format Pdf ou xls.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Renseignez en toute simplicité votre tableau des dotations aux amortissements relatifs aux immobilisations
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p className="et-faq">
                        Grâce à un module d’importation paramétrable intégré à cette solution,
                         importez d’Excel votre tableau de dotations aux amortissements relatifs aux immobilisations en toute simplicité
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        Laissez-vous guider par l’Assistant Télédéclaration
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p className="et-faq">
                        Grâce à ses fonctionnalités innovantes, 
                        l’Assistant vous apporte simplicité et sérénité dans le processus 
                        de dépôt de vos déclarations fiscales sur la plateforme Simpl-IS https://is.tax.gov.ma/is de l’administration fiscale.
                        </p>
                        
                      </Accordion.Body>
                    </Accordion.Item> 
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EtatsFaq;
