import React from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import Topbar from "./components/Topbar";
import Slideboard from "./components/Sideboard";
import "./App.css";

export const App = () => {
  return (
    <>
      <body>
        <div className="backdrop"></div>
        <div className=" grid gird"></div>
        <Slideboard />
        <div className="main-content"></div>
        <Topbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl text-blue-200 title-font">Dragon Tool</h1>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="w-[7vh] h-[7vh] rounded-full bg-blue-300 border-4 border-blue-200 flex items-center justify-center absolute bottom-[2vh] right-[2vh] theme-switch">
            <WiMoonAltThirdQuarter className="w-[5vh] h-[5vh] svg" />
          </div>
          {Svg()}
        </div>
      </body>
    </>
  );
};

function Svg() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M140 140H0L50.5 50.5L140 0V140Z"
        fill="white"
        fill-opacity="0.6"
      />
    </svg>
  );
}

export default App;
