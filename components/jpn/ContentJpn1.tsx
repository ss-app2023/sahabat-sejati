// Import for system
import React from "react";
import Image from "next/image";
// -----------------------------
import officeLongJpn1 from "../../public/office_long_jpn_1.jpg";
import officeLongJpn2 from "../../public/office_long_jpn_2.jpg";
import photoJpn5 from "../../public/photo_jpn_5.png";
import photoJpn1 from "../../public/photo_jpn_1.png";
import photoJpn2 from "../../public/photo_jpn_2.png";
import photoJpn3 from "../../public/photo_jpn_3.png";
import photoJpn4 from "../../public/photo_jpn_4.png";

type Props = {};

const ContentGer1 = (props: Props) => {
  return (
    <section id="ContentGer1" className="dark:bg-gray-900">
      {/* First Section */}
      <div className="gap-16 items-center px-10 py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8 mb-4 sm:mb-10">
          <Image className="w-full rounded-lg shadow-slate-800 shadow-md" src={officeLongJpn1} alt="office content 1" />
          <Image className="mt-4 w-full lg:mt-10 rounded-lg shadow-slate-800 shadow-md" src={officeLongJpn2} alt="office content 2" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="xs:mb-4 sm:mb-4 md:mb-8 xs:text-4xl sm:text-4xl md:text-6xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
            Lanjutan Specified Skilled Worker <span className="font-extrabold text-primary-600">(SSW)</span>?
          </h2>
          <p className="mb-10">
            Program SSW ke Negara Jepang menjadi salah satu solusi dari banyaknya masyarakat yang mengeluhkan tentang kesulitan memperoleh pekerjaan dan pendidikan/keahlian yang tidak sesuai dengan kebutuhan dunia kerja.
          </p>
          {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
      </div>

      {/* Second Section */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        {/* Caption */}
        <h2 className="xs:mb-4 sm:mb-4 md:mb-8 xs:text-4xl sm:text-4xl md:text-6xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">Apa saja bidang Magang yang tersedia?</h2>
        <p className="text-lg font-normal xs:mb-4 sm:mb-4 md:mb-8  text-gray-500 lg:text-xl dark:text-gray-400">
          Bidang kerja yang dapat kami salurkan dan memperoleh visa SSW, diantaranya; bidang caregiver, Industri pengolahan makanan, Restoran, Perhotelan, industry pertanian dan peternakan, Building Maintenance, Welding (pengelasan)
        </p>
        <video className="w-full rounded-xl mb-6 xs:mb-2 shadow-slate-600 shadow-md" controls>
          <source width={100} height={100} src="http://jepang.mitragroup.id/wp-content/uploads/2023/02/cp-lpk-update-7-feb-23.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Third Section */}
      {/* Media */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <video className="w-full rounded-xl mb-6 shadow-slate-600 shadow-md" controls>
          <source width={100} height={100} src="http://jepang.mitragroup.id/wp-content/uploads/2022/08/Interview-Jepang-Wm-1.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Caption */}
        <h2 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-4xl xs:text-3xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
          Apa yang Dibutuhkan untuk <span className="font-extrabold text-primary-600">Bekerja</span> di <span className="font-extrabold text-primary-700"> Jepang</span>?
        </h2>
        <ul className="max-w-screen-xl space-y-1 text-lg font-normal xs:mb-4 sm:mb-4 md:mb-8 mb-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>Pemeriksaan yang diperlukan berupa dokumen hasil lulus ujian keterampilan, dan ujian bahasa Jepang.</li>
          <li>Jika Anda lulus ujian, Anda akan memenuhi syarat untuk bekerja di Jepang di bawah skema SSW.</li>
          <li>Setelah itu, Anda akan mengikuti tes wawancara untuk perusahaan Jepang yang Anda inginkan. </li>
        </ul>
      </div>

      {/* Fourth Section */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        {/* Caption */}
        <h2 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-4xl xs:text-3xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
          Testimoni Siswi Mitra Sarana Sejahtera yang <span className="font-extrabold text-primary-600">berangkat</span> ke <span className="font-extrabold text-primary-700"> Jepang</span>
        </h2>
        <video className="w-full rounded-xl mb-6 shadow-slate-600 shadow-md" controls>
          <source width={100} height={100} src="https://jepang.mitragroup.id/wp-content/uploads/2023/02/WhatsApp-Video-2023-02-20-at-10.26.19.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fifth Section */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <Image src={photoJpn5} alt="Photo Japan 5" className="w-auto h-auto object-none object-center shadow-slate-300 shadow-lg col-span-2 row-span-2 rounded-2xl min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
            <Image alt="Photo Japan 1" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-40 dark:bg-gray-500 aspect-square" src={photoJpn1} />
            <Image alt="Photo Japan 2" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-40 dark:bg-gray-500 aspect-square" src={photoJpn2} />
            <Image alt="Photo Japan 3" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-40 dark:bg-gray-500 aspect-square" src={photoJpn3} />
            <Image alt="Photo Japan 4" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-40 dark:bg-gray-500 aspect-square" src={photoJpn4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGer1;
