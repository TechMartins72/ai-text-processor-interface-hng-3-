"use client";
import React, { useContext } from "react";

import { AppContext } from "./AppContext";

const Response = ({ response, language }) => {
  const { loadingResponse, loadingLanguage } = useContext(AppContext);

  return (
    <div
      aria-label="AI Response"
      className="flex flex-1 justify-start items-start gap-6 py-4 sm:max-w-[80%] w-fit md:max-w-[70%]"
    >
      <div className="w-full h-[3rem] rounded-full text-black flex justify-center items-start">
        <img src="/logo.png" alt="GN" className="h-full w-auto" />
      </div>
      {loadingResponse ? (
        <p className="w-full text-nowrap">Generating Output...</p>
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
