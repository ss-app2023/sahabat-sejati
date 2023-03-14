// Import for system
import React from "react";
import Link from "next/link";
import Image from "next/image";
// ----------------------------

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="h-10 mx-3" width={50} height={50} src="/logo_mitra_1.png" alt="MITRA MSA" />
          Sahabat Sejati
        </Link>
        <p className="my-3 text-gray-500 dark:text-gray-400">Kami Sahabat Sejati adalah lembaga konsultan pendidikan luar negeri resmi yang berlokasi di Surabaya, JawaTimur.</p>

        <li className="flex flex-none justify-center items-center my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-whatsapp mx-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="green"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
          </svg>
          <Link href="https://wa.me/6282211598583?text=I'm%20interested%20in%20your%20programs%20to%20getting%20a%20job%20on%20Germany%20and%20Japan" className="hover:text-primary-700 font-semibold text-center" target="_blank">
            0822-1159-8583 - Information Contact
          </Link>
        </li>

        {/* Bottom Navbar */}
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="mr-4 hover:underline md:mr-6">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="#OurPrograms" className="mr-4 hover:underline md:mr-6 ">
              Our Programs
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="#" className="hover:underline hover:text-primary-700">
            Sahabat Sejati
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
