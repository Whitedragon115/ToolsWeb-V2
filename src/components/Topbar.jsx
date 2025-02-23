import React from "react";
import { FaTools, FaGithub, FaLink, FaQuestion } from "react-icons/fa";
import "../assets/css/topbar.css";
import anime from "animejs";

const Topbar = () => {
  return (
    <>
      <div className={`flex justify-center`}>
        <div
          className={`flex justify-center items-center h-[10vh] w-[70vh] topbar-box p-[1.2vh] opacity-90`}
        >
          <div
            className={`flex justify-between items-center h-full w-full rounded-full topbar-box-inner`}
          >
            <div>
              <a className="text-[3vh] text-white p-6 slogn">Make life eazy</a>
            </div>
            <div className="flex justify-between items-center h-full w-4/9 topbar-box-inner-btn">
              <div className="rounded-full bg-[#CAF1FF] h-6/9 aspect-square border-[.5vh] border-[#D9D9D9] z-10 flex items-center justify-center btn-question-top">
                <div className="h-full w-full bg-[#D9D9D9] rounded-full flex items-center justify-center btn-question">
                  <FaQuestion className="h-3/5 w-3/5" />
                </div>
              </div>
              <div className="rounded-full bg-[#CAF1FF] h-6/9 aspect-square border-[.5vh] border-[#D9D9D9] z-10 flex items-center justify-center btn-question-top">
                <div className="h-full w-full bg-[#D9D9D9] rounded-full flex items-center justify-center btn-question">
                  <FaLink className="h-3/5 w-3/5" />
                </div>
              </div>
              <div className="rounded-full bg-[#CAF1FF] h-6/9 aspect-square border-[.5vh] border-[#D9D9D9] z-10 flex items-center justify-center btn-question-top">
                <div className="h-full w-full bg-[#D9D9D9] rounded-full flex items-center justify-center btn-question">
                  <FaGithub className="h-3/5 w-3/5" />
                </div>
              </div>
              <div className="flex items-center justify-center rounded-full bg-[#CAF1FF] h-full aspect-square border-[.5vh] border-[#D9D9D9] z-10 btn-tools testing">
                <FaTools className="btn-tools-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
