import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";

export const App = () => {
  return (
    <>
      <body>
        <div className="backdrop"></div>
        <Topbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl text-blue-200 title-font">Dragon Tool</h1>
        </div>
        <div className="absolute bottom-0 right-0">
          {Svg()}
        </div>
      </body>
    </>
  );
};

function Svg() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M140 140H0L50.5 50.5L140 0V140Z" fill="white" fill-opacity="0.6"/>
</svg>

  );
}

export default App;
