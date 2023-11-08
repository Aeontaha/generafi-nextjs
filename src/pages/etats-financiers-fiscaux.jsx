import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import EtatsHero from "@/components/generafi-etats-ff/EtatsHero";
import EtatsAbout from "@/components/generafi-etats-ff/EtatsAbout";
import EtatsVideo from "@/components/generafi-etats-ff/EtatsVideo";
import EtatsSecond from "@/components/generafi-etats-ff/EtatsSecond";
import EtatsA from "@/components/generafi-etats-ff/EtatsA";
import EtatsClient from "@/components/generafi-etats-ff/EtatsClient";
import EtatsFaq from "@/components/generafi-etats-ff/EtatsFaq";
import EtatsCta from "@/components/generafi-etats-ff/EtatsCta";


export default function EtatsF ( ) {
    return(
        <div>
            <Head>
                <title>Etats financiers fiscaux</title>
                <meta name="description" content="Generafi agency "/>
                <meta name="viewport" content="width=device-wedith, initial-scale=1"/>
            </Head>
            <main>
                <RootLayout header="header4" footer="footer4">
                    <EtatsHero/>
                    <EtatsAbout/>
                    <EtatsVideo/>
                    <EtatsSecond/>
                    <EtatsA/>
                    <EtatsClient/>
                    <EtatsFaq/>
                    <EtatsCta/>
                </RootLayout>
            </main>
        </div>
    )
}