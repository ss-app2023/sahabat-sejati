// Import for system
import Head from "next/head";
import { Inter } from "next/font/google";

// ------------------------------------------------
// Import for pages
import HeroSectionGer from "@/components/ger/HeroSectionGer";
import Footer from "@/components/Footer";
import ContentGer1 from "@/components/ger/ContentGer1";
import ContentGer2 from "@/components/ger/ContentGer2";
import FormRegGer from "@/components/ger/FormRegGer";
import HeaderLogo from "@/components/HeaderLogo";

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
        <FormRegGer />
        <Footer />
      </main>
    </>
  );
}
