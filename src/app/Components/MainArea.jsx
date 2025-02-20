import React from "react";
import TextArea from "./TextArea";
import ChatArea from "./ChatArea.jsx";

const MainArea = () => {
  return (
    <section className="h-[calc(100vh-4rem)] flex flex-col md:w-[75%] lg:w-[60%] w-[100%] mx-auto pb-12 justify-center items-center px-8">
      <div className="flex-1 w-full overflow-hidden pt-4 h-full">
        <ChatArea />
      </div>
      <TextArea />
      <small className="mt-2 text-gray-500">
        Please provide longer text to optimize result
      </small>
    </section>
  );
};

export default MainArea;
