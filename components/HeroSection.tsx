// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ----------------------------
import heroSectionPhoto from "../public/herosection_photo.png";
import heroSectionPhoto1 from "../public/heroSectionPhoto1.png";
import bannerJepang1 from "../public/banner_jepang_1.jpg";
import bannerJerman1 from "../public/banner_jerman_1.jpg";
import HeaderLogo from "./HeaderLogo";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="dark:bg-gray-900">
      <HeaderLogo />

      {/* Header */}
      <div className="px-4 py-16 xs:py-4 md:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <Image
            className="object-cover w-full h-56 rounded-2xl xs:shadow-xl md:shadow-lg md:h-64 lg:h-80"
            src={heroSectionPhoto1}
            alt=""
          />
        </div>
        <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Education{" "}
            <span className="inline-block text-emerald-400">Consultant</span>
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg">
            Kami Sahabat Sejati adalah lembaga konsultan pendidikan luar negeri
            resmi yang siap mendukung kesuksesan masa depan anda mengikuti
            pendidikan maupun mengembangkan karir di luar negeri.
          </p>
          <div className="flex items-center md:justify-center">
            <Link
              href="#OurPrograms"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-700 focus:shadow-emerald-500 focus:outline-emerald-500"
            >
              Get started
            </Link>
            <Link
              href="/ContactUs"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-emerald-700"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Our Programs */}
      <div
        id="OurPrograms"
        className="px-4 py-16 xs:py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 xs:mb-4 sm:mb-0 sm:text-center">
            <Link
              href="/"
              className="mb-2 xs:mb-6 sm:mx-auto w-10 h-10 text-emerald-400"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M14 6H6v8h8V6z" />
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M9.25 3V1.75a.75.75 0 011.5 0V3h1.5V1.75a.75.75 0 011.5 0V3h.5A2.75 2.75 0 0117 5.75v.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v.5A2.75 2.75 0 0114.25 17h-.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-.5A2.75 2.75 0 013 14.25v-.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-.5A2.75 2.75 0 015.75 3h.5V1.75a.75.75 0 011.5 0V3h1.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5z"
                  />
                </svg>
              </div>
            </Link>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Our</span>
                </span>{" "}
                Programs
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Kami membantu anda belajar bahasa Jerman dan Jepang serta siap
                mendukung kesuksesan masa depan anda mengikuti pendidikan maupun
                mengembangkan karir di luar negeri.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Media Our Programs */}
      <div className="px-4 py-16 xs:py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 xs:gap-16 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          {/* Image 1 */}
          <div className="transition duration-300 transform bg-white rounded shadow-sm xs:shadow-lg hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <Image
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src={bannerJerman1}
                alt="Banner Jerman"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Program Ausbildung
              </h5>
              <p className="mb-5 text-gray-700">
                Ausbildung adalah Program Pendidikan dan Pelatihan Profesi
                selama 3 tahun di Jerman. Pembelajaran di sekolah kejuruan
                sebanyak 2 hari untuk teori dan kerja praktik selama 3 hari.
                Beberapa perusahaan juga ada yang menggunakan sistem blok, yaitu
                1 bulan sekolah dan 1 bulan kerja praktik.
              </p>
              <Link
                href="/gerpages/HomeGer"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-700 focus:shadow-emerald-500 focus:outline-emerald-500"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="transition duration-300 transform bg-white rounded shadow-sm xs:shadow-lg hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <Image
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src={bannerJepang1}
                alt="Banner Jepang"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Program Specified Skill Worker (SSW)
              </h5>
              <p className="mb-5 text-gray-700">
                ke Negara Jepang menjadi salah satu solusi dari banyaknya
                masyarakat yang mengeluhkan tentang kesulitan memperoleh
                pekerjaan dan pendidikan/keahlian yang tidak sesuai dengan
                kebutuhan dunia kerja.
              </p>
              <Link
                href="/jpnpages/HomeJpn"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-emerald-400 hover:bg-emerald-700 focus:shadow-emerald-500 focus:outline-emerald-500"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
