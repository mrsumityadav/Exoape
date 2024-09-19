import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PlayReel() {
  const parent = useRef(null);
  const vdodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  const reels = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1
      },
    })
    tl.to(vdodiv.current, {
      width: "100%",
      height: "100%",
      ease: Power4,
    },'a')
    tl.to(reels.current, {
      gap:"20vw",
      duration: 20,
      ease: Power4,
    },'a');
  });

  return (
    <div
      ref={parent}
      className="w-full relative h-screen bg-[#0D0E13] py-24 sm:py-12 text-white"
    >
      <div className="w-full h-full relative z-20 flex flex-col items-center justify-between ">
        <div className="flex gap-3">
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
          <h3 className="font-medium tracking-tight sm:text-[1vw]">
            Work in motion
          </h3>
        </div>
        <div ref={reels} className="flex gap-24 sm:gap-[40vw]">
          <h1 ref={play} className="text-6xl sm:text-[12vw]">Play</h1>
          <h1 ref={reel} className="text-6xl sm:text-[12vw]">Reel</h1>
        </div>
        <div>
          <p className="w-[80vw] sm:w-[22vw] text-center text-sm sm:text-[1vw] font-medium">
            Our work is best experienced in motion. Don’t forget to put on your
            headphones.
          </p>
        </div>
      </div>
      <div
        ref={vdodiv}
        className="vdo absolute overflow-hidden top-1/2  sm:w-[25vw] sm:h-[13vw] left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full opacity-40 h-full object-cover"
          src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
        ></video>
      </div>
    </div>
  );
}

export default PlayReel;
