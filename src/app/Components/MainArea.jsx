import React from "react";
import TextArea from "./TextArea";
import ChatArea from "./ChatArea.jsx";

const MainArea = () => {
  return (
    <section className="h-[calc(100vh-4rem)] flex flex-col md:w-[65%] w-[100%] mx-auto pb-12 justify-center items-center px-8">
      <div className="flex-1 w-full">
        <ChatArea />
      </div>
      <TextArea />
    </section>
  );
};

export default MainArea;
