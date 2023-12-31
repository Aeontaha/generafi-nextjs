import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ComptaHero from "@/components/generafi-compta/ComptaHero";
import ComptaAbout from "@/components/generafi-compta/ComptaAbout";
import Comptaf from "@/components/generafi-compta/Comptaf";
import ComptaWork from "@/components/generafi-compta/ComptaWork";
import ComptClients from "@/components/generafi-compta/ComptaClients";
import ComptaVideo from "@/components/generafi-compta/ComptaVideo";
import ComptaFaq from "@/components/compta-gen-2/ComptaFaq";
import ComptaCta from "@/components/generafi-compta/ComptaCta";
import ComptaClients from "@/components/compta-gen-2/ComptaClients";
import ComptaImage from "@/components/generafi-compta/ComptaImage";
import ComptaHero2 from "@/components/compta-gen-2/ComptaHero2";

export default function Comptabilte2 ( ) {
    return(
        <div>
            <Head>
                <title>Comptabilté</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer4">
                    <ComptaHero2/>
                    <ComptaAbout/>
                    <ComptaVideo/>
                    <Comptaf/>
                    <ComptaWork/>
                    <ComptaClients/>
                    <ComptaFaq/>
                    <ComptaCta/>
                </RootLayout>
            </main>
        </div>
    )
}
