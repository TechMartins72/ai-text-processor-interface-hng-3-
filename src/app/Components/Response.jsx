"use client";
import React, { useContext } from "react";

import { AppContext } from "./AppContext";

const Response = ({ response, language }) => {
  const { loadingResponse, loadingLanguage } = useContext(AppContext);

  return (
    <div aria-label="AI Response" className="w-full">
      {loadingResponse ? (
        <p>Generating Output...</p>
      ) : (
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="">{response}</div>
          <p className="!bg-red-600 select-none text-xs text-white rounded-full md:py-2 md:px-4 py-1 px-2">
            {language}
          </p>
        </div>
      )}
    </div>
  );
};

export default Response;
