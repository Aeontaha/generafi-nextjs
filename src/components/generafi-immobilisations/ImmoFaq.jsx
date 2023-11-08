import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/application-femme.jpg";
import Image from "next/image";

const ImmoFaq = () => {
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
                 Modules principaux 
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
                        Localisez vos immobilisations en permanence
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        GENERAFI IMMO vous permet de géo-localiser chaque immobilisation au sein de votre organisation. 
                        Grâce à ses fonctionnalités avancées, suivez la traçabilité complète des mouvements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Personnalisez vos Etats et Reportings
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        En plus des multiples états standards intégrés et d’un puissant générateur d’états. 
                        GénéraFi IMMO vous permet de disposer d’une vue transversale et détaillée de vos biens pour être en mesure 
                        d’en tracer les évolutions par la mise à disposition de filtres et d’options de visualisations personnalisés.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        Inventoriez en toute simplicité vos immobilisations
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        Grâce à son module avancé d’inventaire physique, GENERAFI IMMO vous apporte simplicité et fiabilité de vos inventaires immobilisations. 
                        Vous apprécierez l’inventaire par code à barre et les rapports d’inventaire dont vous disposerez pour réaliser vos opérations de rapprochement comptable.
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

export default ImmoFaq;
