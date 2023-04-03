// Import for system
import Head from "next/head";
import { Inter } from "next/font/google";

// ------------------------------------------------
// Import for pages
import HeaderLogo from "@/components/HeaderLogo";
import HeroSectionGer from "@/components/ger/HeroSectionGer";
import ContentGer1 from "@/components/ger/ContentGer1";
import ContentGer2 from "@/components/ger/ContentGer2";
import BtnBckHome from "@/components/BtnBckHome";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <HeroSectionGer />
        <ContentGer1 />
        <ContentGer2 />
        <BtnBckHome />
        <Footer />
      </main>
    </>
  );
}
