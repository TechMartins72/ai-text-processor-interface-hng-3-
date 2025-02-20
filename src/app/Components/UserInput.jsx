"use client";
import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const UserInput = ({ language, input }) => {
  const { loadingLanguage } = useContext(AppContext);

  return (
    <>
      <div
        aria-label="User Input"
        className="place-self-end flex flex-col gap-4 items-end w-full "
      >
        <div className="sm:max-w-[80%] w-fit md:max-w-[70%] flex flex-col justify-center items-start gap-4 p-3 md:px-6 md:py-4  bg-[#2c2828] rounded-3xl">
          <article>{input}</article>
          <div className="!bg-red-600 select-none text-xs text-white rounded-full md:py-2 md:px-4 py-1 px-2">
            {!loadingLanguage ? <p>{language}</p> : "loading..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInput;
