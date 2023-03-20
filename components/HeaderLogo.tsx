// Import for system
import React from "react";
import Image from "next/image";
// ----------------------------
import headerLogoCompany from "../public/header_logo_company.png";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <section>
      <div className="px-8 xs:py-4 md:py-4 mx-auto max-w-screen-xl lg:px-6">
        <Image className="sm:h-16 sm:w-72 xs:h-16 xs:w-72 mx-auto" src={headerLogoCompany} alt="Header Logo" />
      </div>
    </section>
  );
};

export default HeaderLogo;
