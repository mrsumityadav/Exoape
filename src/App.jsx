import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Img from "./Components/Img";
import Spread from "./Components/Spread";
import StyleBtn from "./Components/StyleBtn";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-white">
      <Navbar />
      <Landing />
      {/* some change in work.jsx */}
      <Work />
      <PlayReel />
      <Img />
      <Spread />
    </div>
  );
}

export default App;
