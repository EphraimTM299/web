import React from "react";
import Link from "next/link";

const ButtonPrimary = ({ children, addClass , link }) => {
  return (
    <button
   
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none " +
        addClass
      }
    >
   <Link href={link}>{children}</Link>   
    </button>
  );
};

export default ButtonPrimary;
  