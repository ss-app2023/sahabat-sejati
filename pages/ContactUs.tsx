// // Import for system
import React from "react";
import Head from "next/head";
// --------------------------------------
import Footer from "@/components/Footer";
import FormContactUs from "@/components/FormContactsUs";
import BtnBckHome from "@/components/BtnBckHome";
import HeaderLogo from "@/components/HeaderLogo";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <Head>
        <title>Sahabat Sejati</title>
        <meta name="description" content="Sahabat Sejati" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mitra_1.png" />
      </Head>
      <HeaderLogo />
      <FormContactUs />
      <BtnBckHome />
      <Footer />
    </>
  );
};

export default ContactUs;
