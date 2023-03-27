// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ----------------------------
import smallScreenHeader from "../../public/program_ausbildung.png";
import largeScreenHeader from "../../public/program_ausbildung.png";

type Props = {};

const HeroSectionGer = (props: Props) => {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img alt="Germany" src="https://jerman.mitragroup.id/wp-content/uploads/2022/07/IMG_1371-1024x768.jpeg" className="absolute inset-0 h-full w-full object-cover xs:shadow-none md:shadow-2xl" />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 md:shadow-2xl xs:shadow-xl">
            <span className="xs:hidden xs:shad lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Program <span className="font-extrabold text-indigo-600">Ausbildung</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Sahabat Sejati - MSA adalah lembaga konsultan pendidikan luar negeri resmi yang berlokasi di Surabaya, JawaTimur. Kami menyediakan berbagai pilihan pendidikan bahasa yang siap mendukung kesuksesan masa depan anda mengikuti
                pendidikan maupun mengembangkan karir di luar negeri, Khususnya pendidikan vokasi dan bekerja di Jerman (Eropa) . Program ini (Ausbildung) saat ini tersedia dibidang perhotelan, restoran, chef dan keperawatan.
              </p>

              <a
                href="#ContentGer1"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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

export default HeroSectionGer;
