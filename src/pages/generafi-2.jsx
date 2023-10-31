import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";
import StartupAgencyWorkflow from "@/components/workflow/StartupAgencyWorkflow";
import StartupAgencyFeature from "@/components/feature/StartupAgencyFeature";
import StartupAgencyService from "@/components/service/StartupAgencyService";
import StartupAgencyFaq from "@/components/faq/StartupAgencyFaq";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import StartupAgencyBrand from "@/components/brand/StartupAgencyBrand";
import StartupAgencyTestimonial from "@/components/testimonial/StartupAgencyTestimonial";
import StartupAgencySolution from "@/components/solution/StartupAgencySolution";
import StartupAgencyBlog from "@/components/blog/StartupAgencyBlog";
import StartupAgencyCTA from "@/components/cta/StartupAgencyCTA";
import GenerafiProduction from "@/components/generafi-home/GenerafiProduction";
import GenerafiService from "@/components/generafi-home/GenerafiService";
import GenerafiCounter from "@/components/generafi-home/GenerafiCounter";
import GenerafiBrand from "@/components/generafi-home/GenerafiBrand";
import GenerafiTestimonial from "@/components/generafi-home/GenerafiTestimonial";
import GenerafiWorkflow from "@/components/generafi-home/GenerafiWorkflow"; 



const Generafi2 = () => {
  return (
    <div>
      <Head>
        <title>Genrafi</title>
        <meta name="description" content="Startup Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer3">
          <StartupAgencyHero />
          <GenerafiProduction/>
          <StartupAgencyService />
          <GenerafiService/>
          <StartupAgencyFeature />
          <GenerafiCounter/>
          <GenerafiWorkflow/>
          <GenerafiBrand/>
          <GenerafiTestimonial/>
        </RootLayout>
      </main>
    </div>
  );
};

export default Generafi2;
