import React, { useState } from "react";
import StyleBtn from "./StyleBtn";
import { motion } from "framer-motion";

function Work() {
  const [elem, setElem] = useState([
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      title: "Columbia Pictures",
      subhead: "Celebrating a Century of Cinema",
      width: "sm:w-[40vw]",
      height: "sm:h-[52vw]",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      title: "Rino & Pelle",
      subhead: "Effortless chic lifestyle",
      width: "sm:w-[35%]",
      height: "sm:h-[33%]",
      align: "sm:items-end",
      mtop: "sm:mt-[-20vw]",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      title: "Aebele Interiors",
      subhead: "Luxurious design experience",
      width: "sm:w-[33vw]",
      height: "sm:h-[42vw]",
      margin: "sm:ml-[31vw] sm:mt-[13vw]",
    },
    {
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      title: "Pixelflakes",
      subhead: "Architectural marketing agency",
      width: "sm:w-[20vw]",
      height: "sm:h-[24vw]",
      margin: "sm:mt-[-10vw]",
    },
  ]);

  return (
    <div className="text-black px-8 sm:px-[13vw] py-[12vw]">
      <div className="text flex flex-col gap-6">
        <div className="label flex sm:order-2 sm:mt-[5vw]">
          <div className="flex gap-2 sm:ml-[50vw]">
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
            <h3 className="text-sm sm:text-[1vw]">Featured Projects</h3>
          </div>
        </div>
        <div className="title sm:order-1">
          <h3 className="text-6xl font-medium sm:font-normal overflow-hidden sm:tracking-tighter sm:text-[18vw]">
            <motion.span
              initial={{ rotate: 90, y: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="inline-block origin-left"
            >
              Work
            </motion.span>
          </h3>
        </div>
        <div className="para w-full sm:order-3 flex sm:mt-[2vw]">
          <p className="text-[4.7vw] sm:text-[1.6vw] sm:ml-[50vw]">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
      </div>
      <div className="projects my-[8.8vw] sm:mt-[-14vw]">
        {elem.map((item, index) => (
          <div
            key={index}
            className={`project w-fit ${item.margin} mb-[8.8vw] sm:mb-0 flex flex-col ${item.align} ${item.mtop}`}
          >
            <div
              className={`item h-[104vw] w-full ${item.width} ${item.height} relative overflow-hidden`}
            >
              <motion.img
                className="w-full h-full object-cover"
                src={item.img}
                alt="project"
              />
              <motion.video
                whileHover={{ opacity: 1 }}
                className="absolute z-[10] top-0 scale-[1.1] w-full h-full sm:opacity-0"
                autoPlay
                loop
                muted
                src={item.video}
              ></motion.video>
            </div>
            <div
              className={`dets mt-[3.3vw] ${item.width} sm:mt-[1vw] font-['Arial'] sm:flex gap-4`}
            >
              <strong className="text-sm font-normal sm:text-[1vw]">
                {item.title}
              </strong>
              <h3 className="text-sm text-gray-400 sm:text-[1vw]">
                {item.subhead}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div>
        <StyleBtn text="Browse all work" />
      </div>
    </div>
  );
}

export default Work;
