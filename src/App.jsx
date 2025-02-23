import React from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import Topbar from "./components/Topbar";
import Slideboard from "./components/Sideboard";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="backdrop" />
      <div className="interface h-full">
        <div className="h-full">
          <Slideboard />
        </div>
        <div className="flex-col justify-center items-center">
          <Topbar />
          <div className="flex justify-center items-center h-[75vh]">
            <h1 className="text-8xl text-blue-200 title-font">Dragon Tool</h1>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-16 h-16 rounded-full bg-blue-300 border-4 border-blue-200 flex items-center justify-center absolute bottom-[1.5vh] right-[1.5vh] cursor-pointer theme-switch">
          <WiMoonAltThirdQuarter className="w-16 h-16 svg" />
        </div>
        {Svg()}
      </div>
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
