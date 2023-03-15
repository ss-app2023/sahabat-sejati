// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ----------------------------
import smallScreenHeader from "../../public/program_japan.png";
import largeScreenHeader from "../../public/program_japan.png";

type Props = {};

const HeroSectionJpn = (props: Props) => {
  return (
    <section className="dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
        {/* Image for small screen */}
        <div className="sm:h-96 sm:mb-6 sm:mt-0 sm:col-span-5 sm:flex sm:justify-center lg:hidden">
          <Image className="xs:h-80 xs:w-96" src={smallScreenHeader} alt="Program Ausbildung" />
        </div>

        {/* Description*/}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-5xl xs:text-5xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
          SPECIFIED SKILLED WORKER <span className="font-extrabold text-primary-600">(SSW)</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Program SSW merupakan status visa/ijin tinggal bagi warga negara asing di Jepang yang mulai berlaku sejak 1 April 2019. Pemegang visa SSW dapat bekerja di perusahaan Jepang dengan hak dan kewajiban yang sama dengan pekerja Jepang.
          </p>

          {/* Button Navigation */}
          <Link
            href="#Form"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 shadow-slate-400 shadow-md text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 "
            scroll={false}
          >
            Register now!
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </Link>
          <Link
            href="#ContentGer1"
            className="inline-flex items-center justify-center px-5 py-3 shadow-slate-400 shadow-md text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            scroll={false}
          >
            Continue
          </Link>
        </div>

        {/* Image for large screen */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
          <Image className="md:h-72 lg:h-96 xl:h-112 md:w-72 lg:w-96 xl:w-112" src={largeScreenHeader} alt="Program Ausbildung" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionJpn;
