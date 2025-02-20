"use client";
import React, { useContext } from "react";
import { IoSend } from "react-icons/io5";
import { AppContext } from "./AppContext";

const TextArea = () => {
  const { input, setInput, handleSubmit } = useContext(AppContext);

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex gap-4 w-full"
      >
        <textarea
          placeholder="Enter your text..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full rounded-2xl p-4 min-h-12 bg-transparent border-[1px] border-[#2c2828] hover:border-white focus:border-[1px] transition-all ease-in-out duration-300 resize-none"
          autoFocus="true"
        ></textarea>
        <button
          type="submit"
          className="min-h-12 w-12 rounded-lg text-2xl text-white flex justify-center items-center hover:bg-white hover:text-black transition-all ease-in-out duration-300"
        >
          <IoSend />
        </button>
      </form>
    </>
  );
};

export default TextArea;
