"use client";

import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const TranslateMenu = () => {
  const { handleTranslate, language, isLong, findBCP, handleSummarizer } =
    useContext(AppContext);

  return (
    <div className="flex flex-wrap items-center justify-end gap-4">
      <div className="flex gap-2 items-center">
        <p> Translate to </p>
        <select
          onChange={(e) => {
            let _language = e.target.value;
            console.log(_language);
            findBCP(_language);
          }}
          defaultValue="french"
          className="appearance-none bg-transparent border border-gray-400 text-white rounded px-3 py-2 leading-tight focus:outline-none focus:ring-0 focus:border-gray-500"
        >
          <option value="english" className="text-black">
            English
          </option>
          <option value="portuguese" className="text-black">
            Portuguese
          </option>
          <option value="spanish" className="text-black">
            Spanish
          </option>
          <option value="russian" className="text-black">
            Russian
          </option>
          <option value="turkish" className="text-black">
            Turkish
          </option>
          <option value="french" className="text-black">
            French
          </option>
        </select>
      </div>
      <button
        onClick={handleTranslate}
        aria-label="Translate"
        className="bg-red-600 text-white button"
      >
        {" "}
        Translate{" "}
      </button>
      {(language == "English") & isLong ? (
        <button
          aria-label="Summarize"
          onClick={handleSummarizer}
          className="bg-white text-black button"
        >
          Summarize
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default TranslateMenu;
