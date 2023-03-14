// Import for system
import Head from "next/head";
import { Inter } from "next/font/google";

// --------------------------------------
// Import for pages
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// --------------------------------------

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
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}
