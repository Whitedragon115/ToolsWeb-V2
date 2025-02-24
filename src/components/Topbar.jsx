import React, { useState } from "react";
import { FaTools, FaGithub, FaLink, FaQuestion } from "react-icons/fa";
import "../assets/css/topbar.css";
import anime from "animejs";

const Topbar = () => {
  const [toolsBgColor, setToolsBgColor] = useState("#CAF1FF");
  const [move, setMove] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toolsClick = () => {
    setToolsBgColor(toolsBgColor === "#CAF1FF" ? "#ffffff" : "#CAF1FF");
    setToggle(!toggle);
    setMove(toggle ? 0 : -150);

    anime({
      targets: ".interface",
      gridTemplateColumns: toggle ? "0fr 7fr" : "1fr 7fr",
      duration: 1000,
      easing: "easeInOutQuad",
    })

    anime({
      targets: ".side-bar",
      left: toggle ? "-25vh" : 0,
      opacity: toggle ? 0 : .5,
      duration: 1000,
      delay: 500,
      easing: "easeInOutQuad",
    })

  };

  return (
    <>
      <div className={`flex justify-center`}>
        <div
          className={`flex justify-center items-center h-[10vh] w-[70vh] topbar-box p-[1.2vh] opacity-90`}
          style={{ transform: `translateY(${move}px)`, transition: "all 0.5s", transitionDelay: "0.3s" }}
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
              <div
                className="flex items-center justify-center rounded-full h-full aspect-square border-[.5vh] border-[#D9D9D9] z-10 btn-tools testing"
                style={{ backgroundColor: toolsBgColor }}
                onClick={toolsClick}
              >
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
