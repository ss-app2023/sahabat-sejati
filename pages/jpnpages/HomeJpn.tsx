// Import for system
import Head from "next/head";
import { Inter } from "next/font/google";

// ------------------------------------------------
// Import for pages
import HeaderLogo from "@/components/HeaderLogo";
import HeroSectionJpn from "@/components/jpn/HeroSectionJpn";
import ContentJpn1 from "@/components/jpn/ContentJpn1";
import ContentJpn2 from "@/components/jpn/ContentJpn2";
import Footer from "@/components/Footer";
import BtnBckHome from "@/components/BtnBckHome";

type Props = {};

const HomeJpn = (props: Props) => {
  return (
    <>
      <Head>
        <title>Sahabat Sejati</title>
        <meta name="description" content="Sahabat Sejati" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mitra_1.png" />
      </Head>
      <main>
        <HeaderLogo />
        <HeroSectionJpn />
        <ContentJpn1 />
        <ContentJpn2 />
        <BtnBckHome />
        <Footer />
      </main>
    </>
  );
};

export default HomeJpn;
