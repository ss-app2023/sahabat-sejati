// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ---------------------------
import RegistPhoto1 from "../../public/registPhoto1.jpg";

type Props = {};

const ContentJpn2 = (props: Props) => {
  return (
    <div>
      <div
        id="Requirements1"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Benefit
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto xs:leading-tight">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Keuntungan yang di dapat</span>
            </span>{" "}
            SSW di Jepang?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Berikut adalah keuntungan yang di dapat selama Program Specified
            Skilled Worker (SSW)
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Gaji</h6>
              <p className="text-sm text-gray-900">
                Standar gaji sama dengan orang Jepang.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Hak Pekerja</h6>
              <p className="text-sm text-gray-900">
                Mendapatkan hak-hak yang sama dengan orang jepang, seperti
                tunjangan-tunjangan, cuti, dll.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Overtime</h6>
              <p className="text-sm text-gray-900">
                Jam Kerja Lembur disesuaikan dengan pekerja Jepang.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Fasilitas</h6>
              <p className="text-sm text-gray-900">
                Menerima beragam bantuan (dukungan) dari perusahaan.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Asuransi</h6>
              <p className="text-sm text-gray-900">
                Asuransi kerja dapat dicairkan setelah masa kerja berakhir dan
                pulang ke Indonesia
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Tempat Tinggal</h6>
              <p className="text-sm text-gray-900">
                Apartemen atau Tempat tinggal yang layak dan nyaman.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-amber-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Jaminan Pekerjaan
              </h6>
              <p className="text-sm text-gray-900">
                Bisa Pindah Perusahaan (dengan bidang pekerjaan yang sama)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="#Requirements"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-amber-400 hover:bg-amber-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div
        id="Requirements"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <h5 className="mb-2 xs:mb-8 text-4xl font-extrabold leading-none md:pl-2">
          Batasan
          <br className="hidden md:block" />{" "}
          <span className="inline-block text-amber-400">Usia</span>
        </h5>
        <p className="text-base text-gray-700 md:text-lg my-4">
          Batasan usia berlaku untuk orang Indonesia. Hal ini berkaitan dengan
          pendidikan dan pengalaman yang dimiliki.
        </p>
        <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Pria/Wanita, 18 - 30 Tahun
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Tinggi badan min. 165cm (pria), & 155cm (Wanita)
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Tidak bertindik dan tidak bertato
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Tidak buta warna
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Fotocopy KTP, Ijazah, Akte Kelahiran, dan KK
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              SKCK
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-amber-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Foto 3x4 (5 lembar)
            </li>
          </ul>
        </div>
        <div className="text-center my-4">
          <Link
            href="#Registration"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-amber-600 hover:text-amber-800"
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

      <div
        id="Registration"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Registration
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
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Tahapan </span>
            </span>{" "}
            Mendaftar
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Berikut tahapan mendaftar untuk Program Specified Skilled Worker
            (SSW)
          </p>
        </div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Administrasi</p>
                <p className="text-gray-700">
                  Melakukan pendaftaran dikantor kami.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Seleksi</p>
                <p className="text-gray-700">
                  Menyerahkan dan melengkapi dokumen Persyaratan, Medical Check
                  Up, dll.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Pendidikan</p>
                <p className="text-gray-700">
                  Mengikuti pembelajaran Bhs. Jepang N4, & JFT-Basic/JLPT.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Ujian Keterampilan</p>
                <p className="text-gray-700">
                  Siswa mengikuti ujian keterampilan dengan Test Skill di bidang
                  pekerjaan yang akan dilamar.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Wawancara</p>
                <p className="text-gray-700">
                  Siswa melakukan wawancara dengan perusahaan yang akan dilamar.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">Administrasi Visa</p>
                <p className="text-gray-700">
                  Siswa melakukan pengurusan Visa, Passport, dll.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg font-bold">Berangkat Ke Jepang</p>
                <p className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              className="inset-0 object-cover object-center w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src={RegistPhoto1}
              alt=""
            />
          </div>
        </div>
        <div className="text-center my-6">
          <Link
            href="#FormRegistJpn"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-amber-400 hover:bg-amber-700 focus:shadow-outline focus:outline-none"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentJpn2;
