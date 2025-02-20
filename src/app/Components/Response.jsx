"use client";

import React, { useContext } from "react";
// import logo from "/public/logo.png";
import { AppContext } from "./AppContext";

const Response = ({ response, language }) => {
  const { loadingResponse, loadingLanguage } = useContext(AppContext);

  return (
    <div aria-label="AI Response" className="flex gap-6 py-6">
      <div className="rounded-full text-black flex justify-center items-start">
        {/* <img src={logo.src} alt="GN" className="h-auto w-[2rem]" /> */}
        <div className="h-[2rem] w-[2rem] rounded-full bg-white text-black flex justify-center items-center">
          GN
        </div>
      </div>
      {loadingResponse ? (
        <p>Generating Output...</p>
      ) : (
        <div className="flex flex-col gap-4 justify-start items-start">
          <p>{response}</p>
          <p className="!bg-red-600 select-none text-xs text-white rounded-full py-2 px-4">
            {language}
          </p>
        </div>
      )}
    </div>
  );
};

export default Response;
