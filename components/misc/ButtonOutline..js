import Link from "next/link";
import React from "react";

const ButtonOutline = ({ children, link }) => {
  return (
    <button  className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-xl  capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue ">
      {" "}
     <Link href={link}>{children}</Link> 
    </button>
  );
};

export default ButtonOutline;
