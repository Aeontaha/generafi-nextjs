import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ImmoHero  from "@/components/generafi-immobilisations/ImmoHero"
import ImmoAbout from "@/components/generafi-immobilisations/ImmoAbout";
import ImmoAtout from "@/components/generafi-immobilisations/ImmoAtout";
import ImmoA from "@/components/generafi-immobilisations/ImmoA";
import ImmoVideo from "@/components/generafi-immobilisations/ImmoVideo";
import ImmoSecond from "@/components/generafi-immobilisations/ImmoSecond";
import ImmoClient from "@/components/generafi-immobilisations/ImmoClient";
import ImmoFaq from "@/components/generafi-immobilisations/ImmoFaq";


export default function Generafi ( ) {
    return(
        <div>
            <Head>
                <title>Immobilisations</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer4">
                    <ImmoHero/>
                    <ImmoAbout/>
                    <ImmoVideo/>
                    <ImmoSecond/>
                    <ImmoAtout/>
                    <ImmoA/>
                    <ImmoClient/>
                    <ImmoFaq/>
                </RootLayout>
            </main>
        </div>
    )
}