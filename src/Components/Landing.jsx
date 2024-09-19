import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import StyleBtn from "./StyleBtn";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

function Landing() {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative">
      <div className="absolute top-0 z-10 w-full px-8 sm:px-32 h-full flex flex-col gap-8 sm:gap-20">
        <div className="mt-72 sm:mt-[30vw] font-medium text-[4.72vw] sm:text-[1.6vw]">
          {[
            "Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people live, work, and unwind.",
          ].map((elem, index) => (
            <p key={index} className="overflow-hidden">
              <motion.span
                initial={{ rotate: 90, y: "50%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: Power4.easeOut,
                  delay: index * 0.1,
                }}
                className="inline-block origin-left"
              >
                {elem}
              </motion.span>
            </p>
          ))}
        </div>
        <div className="text-6xl sm:text-[14.5vw] font-medium">
          {["Digital", "Design", "Experience"].map((elem, index) => (
            <h1
              key={index}
              className="overflow-hidden font-normal sm:pb-10 leading-none"
            >
              <motion.span
                initial={{ rotate: 90, y: "50%" }}
                viewport={{ once: true }}
                whileInView={{ rotate: 0, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block origin-left"
              >
                {elem}
              </motion.span>
            </h1>
          ))}
        </div>
        <div>
          <FaArrowDown className="sm:hidden" />
        </div>
        <div className="font-medium text-[1.06rem] sm:text-[1.6vw] sm:tracking-tight sm:w-[40vw]">
          <p>
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
        </div>
        <div className="flex gap-3 group w-fit">
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 group-hover:w-8 duration-500"
            data-v-5152decb=""
          >
            <circle
              cx="25"
              stroke="white"
              cy="25"
              r="23"
              data-v-5152decb=""
            ></circle>
          </svg>
          <a href="#" className="inline-block border-b font-semibold text-lg">
            The Studio
          </a>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full top-0 object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;
