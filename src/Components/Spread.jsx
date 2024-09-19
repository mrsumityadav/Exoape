import React from "react";
import StyleBtn from "./StyleBtn";
import { motion } from "framer-motion";

function Spread() {
  return (
    <div className="my-2 sm:mt-[20vw] w-full flex flex-col items-center gap-8 sm:gap-12 text-black">
      <div className="flex gap-2">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h3 className="text-sm sm:text-lg font-['Arial']">In the media</h3>
      </div>
      <div className="text-center">
        {["Work", "the News"].map((elem, index) => (
          <h1 key={index} className="text-6xl font-medium font-['Arial'] overflow-hidden sm:text-[10vw]">
            <motion.span
              initial={{ rotate: 90, y: "30%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="inline-block origin-left"
            >
              {elem}
            </motion.span>
          </h1>
        ))}
      </div>
      <div>
        <p className="w-[66.66vw] sm:w-[33vw] sm:text-[1.6vw] text-lg leading-2 sm:leading-[2.5vw] text-center">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
      </div>
      <StyleBtn text="Browse all news" />
    </div>
  );
}

export default Spread;
