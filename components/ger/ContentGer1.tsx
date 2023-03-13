// Import for system
import React from "react";
import Image from "next/image";
// -----------------------------

type Props = {};

const ContentGer1 = (props: Props) => {
  return (
    <section id="ContentGer1" className="dark:bg-gray-900">
      {/* First Section */}
      <div className="gap-16 items-center px-10 py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8 mb-4 sm:mb-10">
          <Image className="w-full rounded-lg shadow-slate-800 shadow-md" src="/office_long_1.jpg" alt="office content 1" />
          <Image className="mt-4 w-full lg:mt-10 rounded-lg shadow-slate-800 shadow-md" src="/office_long_2.jpg" alt="office content 2" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-4xl xs:text-4xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
            Apa itu program <span className="font-extrabold text-primary-600">Ausbildung</span>?
          </h2>
          <p className="mb-4">
            Ausbildung adalah Program Pendidikan dan Pelatihan Profesi selama 3 tahun di Jerman. Pembelajaran di sekolah kejuruan sebanyak 2 hari untuk teori dan kerja praktik selama 3 hari. Beberapa perusahaan juga ada yang menggunakan
            sistem blok, yaitu 1 bulan sekolah dan 1 bulan kerja praktik.
          </p>
          {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
      </div>

      {/* Second Section */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        {/* Caption */}
        <h2 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-4xl xs:text-4xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
          Ausbildung <span className="font-extrabold text-primary-600">Jerman</span>
        </h2>
        <p className="text-lg font-normal md:mb-8 sm:mb-4 xs:mb-4 text-gray-500 lg:text-xl dark:text-gray-400">
          Selama menjalani program di Jerman, kamu akan berpindah-pindah departemen pekerjaan mulai dari pekerjaan yang paling mudah sampai pekerjaan yang tanggung jawabnya besar. Selain itu, kamu akan mendapatkan gaji yang dapat digunakan
          sebagai biaya hidup selama kamu tinggal di Jerman.
        </p>

        <video className="w-full rounded-xl mb-6 xs:mb-2 shadow-slate-600 shadow-md" controls>
          <source src="http://jerman.mitragroup.id/wp-content/uploads/2022/08/Hotel-Occur-Wm-1.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Third Section */}
      {/* Media */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <video className="w-full rounded-xl mb-6 shadow-slate-600 shadow-md" controls>
          <source src="http://jerman.mitragroup.id/wp-content/uploads/2023/02/Lia-Amelia-Sari-MSA-Education.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Caption */}
        <h2 className="md:mb-8 sm:mb-4 xs:mb-4 md:text-6xl sm:text-4xl xs:text-3xl tracking-tight sm:leading-tight font-bold text-gray-900 dark:text-white">
          Proses <span className="font-extrabold text-primary-600">Ausbildung</span> di <span className="font-extrabold text-primary-700"> Jerman</span>
        </h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Proses Ausbildung Jerman, meliputi pendaftaran, pembelajaran bahasa, kontrak kerja, pemberangkatan ke Jerman. Kami siap membantu siswa untuk proses tersebut sampai tuntas untuk mengikuti Ausbildung di Jerman
        </p>
      </div>

      {/* Fourth Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-2 px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
          <video className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md" controls>
            <source src="https://jerman.mitragroup.id/wp-content/uploads/2023/02/WhatsApp-Video-2023-02-16-at-15.17.56.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Caption */}
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Siswa kami yang sedang berada di Stadion Allianz Jerman.</p>
        </div>
        <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
          <video className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md" controls>
            <source src="https://jerman.mitragroup.id/wp-content/uploads/2023/02/VID-20230220-WA0016.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Caption */}
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Penginapan siswa kami selama di Jerman.</p>
        </div>
        <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
          <video className="w-full rounded-xl mb-6 shadow-slate-300 shadow-md" controls>
            <source src="http://jerman.mitragroup.id/wp-content/uploads/2022/08/Preview-Jerman-WM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Caption */}
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Ini adalah penginapan siswa kami selama di Jerman, memiliki 2 tempat tidur yang bisa di tempati 2 siswa sekaligus.</p>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="px-10 py-8 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <Image src="/photo_ger_5.jpeg" alt="" className="w-auto h-auto object-none object-center shadow-slate-300 shadow-lg col-span-2 row-span-2 rounded-2xl min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
            <Image alt="" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-48 dark:bg-gray-500 aspect-square" src="/photo_ger_1.png" />
            <Image alt="" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-48 dark:bg-gray-500 aspect-square" src="/photo_ger_2.png" />
            <Image alt="" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-48 dark:bg-gray-500 aspect-square" src="/photo_ger_3.png" />
            <Image alt="" className="w-full h-full rounded-2xl shadow-slate-300 shadow-lg min-h-48 dark:bg-gray-500 aspect-square" src="/photo_ger_4.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGer1;
