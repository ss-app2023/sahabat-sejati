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
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Japan"
                src="https://jepang.mitragroup.id/wp-content/uploads/2022/07/20190213_155455_063-1024x768.jpg"
                className="absolute inset-0 h-full w-full object-cover xs:shadow-none md:shadow-2xl"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 md:shadow-2xl xs:shadow-xl">
            <span className="xs:hidden xs:shad lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Program{" "}
                <span className="font-extrabold text-amber-600">
                  Specified Skilled Worker (SSW)
                </span>
              </h2>

              <p className="mt-4 text-gray-600">
                Program SSW merupakan status visa/ijin tinggal bagi warga negara
                asing di Jepang yang mulai berlaku sejak 1 April 2019. Pemegang
                visa SSW dapat bekerja di perusahaan Jepang dengan hak dan
                kewajiban yang sama dengan pekerja Jepang.
              </p>

              <a
                href="#ContentJpn1"
                className="mt-8 inline-block rounded border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionJpn;
