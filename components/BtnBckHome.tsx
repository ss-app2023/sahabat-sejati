// Import for system
import React from "react";
import Link from "next/link";
// --------------------------

type Props = {};

const BtnBckHome = (props: Props) => {
  return (
    <div className="text-center p-6">
      <Link
        href="/"
        className="shadow-slate-300 shadow-md py-3 px-5 mt-4 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default BtnBckHome;
