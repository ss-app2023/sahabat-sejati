// Import for system
import React from "react";
import Image from "next/image";
import Link from "next/link";
// -----------------------------
import officeLong1 from "../../public/office_long_1.jpg";
import officeLong2 from "../../public/office_long_2.jpg";
import photoGer5 from "../../public/photo_ger_5.jpeg";
import photoGer1 from "../../public/photo_ger_1.png";
import photoGer2 from "../../public/photo_ger_2.png";
import photoGer3 from "../../public/photo_ger_3.png";
import photoGer4 from "../../public/photo_ger_4.png";

type Props = {};

const ContentGer1 = (props: Props) => {
  return (
    <section id="ContentGer1" className="dark:bg-gray-900">
      {/* First Section */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-400">
              <svg className="text-slate-100 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 xs:text-4xl xs:leading-tight">
                Apa itu <br className="hidden md:block" />
                Program{" "}
                <span className="inline-block text-indigo-400">
                  Ausbildung
                </span>{" "}
                ?
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Ausbildung adalah Program Pendidikan dan Pelatihan Profesi
                selama 3 tahun di Jerman. Pembelajaran di sekolah kejuruan
                sebanyak 2 hari untuk teori dan kerja praktik selama 3 hari.
                Beberapa perusahaan juga ada yang menggunakan sistem blok, yaitu
                1 bulan sekolah dan 1 bulan kerja praktik.
              </p>
            </div>
            <div>
              <Link
                href="#SecondSection"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-indigo-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded xs:shadow-xl md:shadow-xl h-28 xs: sm:h-48 xl:h-56 w-28 xs: sm:w-48 xl:w-56"
                src={photoGer2}
                alt=""
              />
              <Image
                className="object-cover w-20 h-20 rounded xs:shadow-xl md:shadow-xl xs: sm:h-32 xl:h-40 xs: sm:w-32 xl:w-40"
                src={photoGer4}
                alt=""
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded xs:shadow-xl md:shadow-xl sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={photoGer3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div
        id="SecondSection"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <Link
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-indigo-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </Link>
            <h5 className="mb-4 text-4xl font-extrabold leading-none xs:text-4xl xs:leading-tight">
              Program <br className="xs:block " />
              Ausbildung{" "}
              <span className="inline-block text-indigo-400">Jerman</span>
            </h5>
            <p className="mb-6 text-gray-900">
              Selama menjalani program di Jerman, kamu akan berpindah-pindah
              departemen pekerjaan mulai dari pekerjaan yang paling mudah sampai
              pekerjaan yang tanggung jawabnya besar. Selain itu, kamu akan
              mendapatkan gaji yang dapat digunakan sebagai biaya hidup selama
              kamu tinggal di Jerman.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div>
              <Link
                href="#ThirdSection"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-indigo-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <video
              className="object-cover w-full h-56 rounded shadow-xl sm:h-96"
              controls
            >
              <source
                width={100}
                height={100}
                src="http://jerman.mitragroup.id/wp-content/uploads/2022/08/Hotel-Occur-Wm-1.m4v"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div
        id="ThirdSection"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 xs:mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Important
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto xs:text-4xl xs:leading-tight">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Proses</span>
              </span>{" "}
              <span className="inline-block text-indigo-400">Ausbildung</span>{" "}
              di <span className="inline-block text-indigo-400">Jerman</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Proses Ausbildung Jerman, meliputi pendaftaran, pembelajaran
              bahasa, kontrak kerja, pemberangkatan ke Jerman.
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <video
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              controls
            >
              <source
                width={100}
                height={100}
                src="http://jerman.mitragroup.id/wp-content/uploads/2023/02/Lia-Amelia-Sari-MSA-Education.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            Kami siap membantu siswa untuk proses tersebut sampai tuntas untuk
            mengikuti Ausbildung di Jerman.
          </p>
          <Link
            href="#FourthSection"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-indigo-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Fourth Section */}
      <div
        id="FourthSection"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Videos
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto xs:text-4xl xs:leading-tight">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Testimonial</span>
            </span>{" "}
            dari siswa dan siswi kami.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Berikut beberapa video dari siswa dan siswi kami yang sudah
            berangkat ke Jerman. Dan sudah menempuh pendidikan Ausbildung di
            Jerman
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 sm:mx-auto">
          <video
            className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md"
            controls
          >
            <source
              width={100}
              height={100}
              src="https://jerman.mitragroup.id/wp-content/uploads/2023/02/WhatsApp-Video-2023-02-16-at-15.17.56.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md"
            controls
          >
            <source
              width={100}
              height={100}
              src="https://jerman.mitragroup.id/wp-content/uploads/2023/02/VID-20230220-WA0016.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md"
            controls
          >
            <source
              width={100}
              height={100}
              src="http://jerman.mitragroup.id/wp-content/uploads/2022/08/Preview-Jerman-WM.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex items-center xs:justify-center sm:justify-center">
          <Link
            href="#FifthSection"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Fifth Section */}
      <div
        id="FifthSection"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group xs:text-4xl xs:leading-tight">
            <span className="inline-block mb-1 xs:mb-1 sm:mb-2">Gallery</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-indigo-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <Link href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover xs:object-center w-full h-56 md:h-64 xl:h-80"
                src={photoGer5}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Proses Pembelajaran
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Proses pembelajaran bahasa Jerman oleh siswa dan siswi kami
                  yang berlokasi di Surabaya.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover xs:object-top w-full h-56 md:h-64 xl:h-80"
                src={photoGer2}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Penyambutan oleh agent kami yang berada di Jerman.
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Agent kami yang berada di Jerman, sedang menyambut para siswi
                  kami yang sudah datang di Bandara International Jerman.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover xs:object-top w-full h-56 md:h-64 xl:h-80"
                src={photoGer3}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Siswi kami yang sudah berada di Jerman
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Siswi kami yang sudah tiba di bandara internasional Jerman.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover xs:object-top w-full h-56 md:h-64 xl:h-80"
                src={photoGer4}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Siswi kami sedang liburan.
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Siswi kami sedang liburan bersama staff dan pembimbing mereka
                  di Jerman.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="#Requirements1"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-deep-purple-800"
          >
            Learn More
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentGer1;
