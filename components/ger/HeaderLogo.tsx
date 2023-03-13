// Import for system
import React from "react";
import Image from "next/image";
// -----------------------------

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <section>
      <div className="px-8 py-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <Image className="h-20 sm:h-16 mx-auto" src="/header_logo_company.png" alt="Logo Company" />
      </div>
    </section>
  );
};

export default HeaderLogo;
