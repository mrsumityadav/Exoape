import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Img() {
  const parent = useRef(null);
  const first = useRef(null);
  const sec = useRef(null);
  const third = useRef(null);
  const four = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    });
    tl.to(first.current, {
      x:"-20%",
      ease:Power4
    }, 'a');
    tl.to(sec.current, {
      x:"40%",
      ease:Power4
    }, 'a');
    tl.to(third.current, {
      x:"-40%",
      ease:Power4
    }, 'a');
    tl.to(four.current, {
      x:"20%",
      y:"-10%",
      ease:Power4
    }, 'a');
  });

  return (
    <div ref={parent} className="w-full h-[75vh] sm:h-[50vw] sm:my-[10vw]">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-[40%] sm:w-[28%] h-1/2 sm:h-[90%] relative">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            alt=""
          />
          <div
            ref={first}
            className="absolute aspect-video top-[20vw] sm:top-[15vw] -left-2/3 w-[8rem] sm:w-[28vw] sm:left-[-20vw]"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            ></video>
          </div>
          <div ref={sec} className="absolute top-[5vw] sm:top-[3vw] -right-12 sm:right-[-10vw] aspect-[0.66/1] w-16 sm:w-[12vw]">
            <img
              className="w-ful h-full object-cover"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
              alt=""
            />
          </div>
          <div
            ref={third}
            className="absolute bottom-[-18vw] -left-[70%] aspect-[1.5/1.1] w-32 sm:w-[28vw]"
          >
            <img
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
              alt=""
            />
          </div>
          <div ref={four} className="absolute bottom-[-28vw] sm:bottom-[-22vw] -right-[28vw] sm:right-[-20vw] aspect-[1/1] w-32 sm:w-[25vw]">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Img;
