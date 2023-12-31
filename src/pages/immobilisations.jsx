import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ImmoHero  from "@/components/generafi-immobilisations/ImmoHero"
import ImmoAbout from "@/components/generafi-immobilisations/ImmoAbout";
import ImmoA from "@/components/generafi-immobilisations/ImmoA";
import ImmoVideo from "@/components/generafi-immobilisations/ImmoVideo";
import ImmoSecond from "@/components/generafi-immobilisations/ImmoSecond";
import ImmoClient from "@/components/generafi-immobilisations/ImmoClient";
import ImmoFaq from "@/components/generafi-immobilisations/ImmoFaq";
import ImmoCta from "@/components/generafi-immobilisations/ImmoCta";


export default function Immobilisations ( ) {
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
                    <ImmoA/>
                    <ImmoClient/>
                    <ImmoFaq/>
                    <ImmoCta/>
                </RootLayout>
            </main>
        </div>
    )
}