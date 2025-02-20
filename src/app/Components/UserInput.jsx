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
        <div className="sm:max-w-[80%] w-fit md:max-w-[70%] flex flex-col justify-center items-start gap-4 p-6 bg-[#2c2828] rounded-3xl">
          <article>{input}</article>
          <div className="!bg-red-600 select-none text-xs text-white rounded-full py-2 px-4">
            {!loadingLanguage ? <p>{language}</p> : "loading..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInput;
