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
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
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
            <h5 className="mb-4 text-4xl font-extrabold leading-none xs:leading-tight">
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
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-indigo-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                  <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 xs:mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Important
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Videos
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Gallery <br className="hidden md:block" />
              Mitra Sahabat Sejati
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            Berikut foto galeri kami dari Sahabat Sejati
          </p>
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
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            View gallery
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
