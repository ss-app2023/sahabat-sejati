// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// --------------------------

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Button */}
        <Link
          href="#OurPrograms"
          className="inline-flex justify-between items-center shadow-slate-300 shadow-md py-1 px-1 pr-4 mb-10 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Join now!</span>
          <span className="text-sm font-medium">Your future is here with us!</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </Link>

        <Image className="md:h-96 sm:h-72 rounded-full shadow-xl mx-auto" src="/herosection_photo.png" alt="Photo HeroSection" />

        {/* Title HeroSection */}
        <div className="bg-white md:-my-24 sm:-my-20 xs:-my-20 md:mb-10 sm:mb-10">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Education Consultant</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Kami Mitra MSA adalah lembaga konsultan pendidikan luar negeri resmi yang siap mendukung kesuksesan masa depan anda mengikuti pendidikan maupun mengembangkan karir di luar negeri.
          </p>
        </div>

        {/* Button */}
        <div className="flex flex-col mb-8 lg:mb-16 xs:mt-24 gap-4 space-y-4 sm:flex-row xs:flex-row sm:justify-center xs:justify-center sm:space-y-0 xs:space-y-0 sm:space-x-4 xs:space-x-4">
          <Link
            href="#OurPrograms"
            className="inline-flex justify-center items-center shadow-slate-300 shadow-md py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join us now!
          </Link>
          <Link
            href="/ContactUs"
            className="inline-flex justify-center items-center shadow-slate-300 shadow-md py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Our Program Section */}
      {/* px-4 mt-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 */}
      <div id="OurPrograms" className="py-4 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Programs</h2>
        <h3 className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-10 dark:text-gray-400">
          Kami membantu anda belajar bahasa Jerman dan Jepang serta siap mendukung kesuksesan masa depan anda mengikuti pendidikan maupun mengembangkan karir di luar negeri.
        </h3>

        {/* Image Section */}
        <div className="flex flex-wrap mx-auto mt-8 text-gray-500 sm:justify-between">
          {/* Japan Banner image */}
          <div className="mx-auto lg:mb-0 p-4 hover:text-gray-800 dark:hover:text-gray-400">
            <Image className="h-80 rounded-2xl shadow-slate-400 shadow-md" src="/banner_jepang_1.jpg" alt="Banner Jepang" />
            <Link
              href="/HomeJpn"
              className="inline-flex justify-center items-center shadow-slate-300 shadow-md py-3 px-5 mt-4 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 "
            >
              Learn more
            </Link>
          </div>

          {/* Jerman Banner image */}
          <div className="mx-auto lg:mb-0 p-4 hover:text-gray-800 dark:hover:text-gray-400">
            <Image className="h-80 rounded-2xl shadow-slate-400 shadow-md" src="/banner_jerman_1.jpg" alt="Banner Jerman" />
            <Link
              href="/gerpages/HomeGer"
              className="inline-flex justify-center items-center shadow-slate-300 shadow-md py-3 px-5 mt-4 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
