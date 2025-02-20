"use client";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const ErrorComponent = () => {
  const { errorMessage } = useContext(AppContext);
  return (
    <div className="w-fit h-fit absolute top-[2rem] rounded-2xl max-lg:text-xs right-[2rem] p-4 py-2 bg-[#2c2828] z-20 text-red-500">
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;
