import React from "react";
import { FaA, FaArrowRight } from "react-icons/fa6";

function StyleBtn({ text = "The Studio", color = "text-black" }) {
  return (
    <div
      className={`w-fit cursor-pointer flex gap-1 hover:gap-3 duration-500 group items-center ${color}`}
    >
      <div
        className={`w-10 h-10 scale-[0.2] flex items-center justify-center rounded-full border border-black group-hover:border-0 group-hover:scale-[1] group-hover:bg-black duration-500 overflow-hidden`}
      >
        <FaArrowRight className="-translate-x-[300%] group-hover:-translate-x-0 delay-100 duration-500 text-white" />
      </div>
      <a
        href="#"
        className="inline-block relative text-base overflow-hidden
           before:absolute before:w-[100%] before:h-[0.01vw] before:bottom-[0.1vw] before:left-0 before:bg-black hover:before:left-[100%] before:duration-300 before:ease-out"
      >
        {text}
      </a>
    </div>
  );
}

export default StyleBtn;
