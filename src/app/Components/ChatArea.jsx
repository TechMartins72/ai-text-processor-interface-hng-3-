"use client";
import React, { useContext } from "react";
import Response from "./Response";
import UserInput from "./UserInput";
import TranslateMenu from "./TranslateMenu";
import { AppContext } from "./AppContext";

const ChatArea = () => {
  const {
    currentInput,
    showResponse,
    language,
    response,
    inputsArray,
    responseLanguage,
  } = useContext(AppContext);

  {
    currentInput !== undefined;
    return (
      <section className="w-full h-full flex flex-col gap-8 overflow-y-scroll pb-8 no-scrollbar">
        {inputsArray.map((interaction, index) => {
          return (
            <div key={index} className="flex flex-col gap-8">
              <UserInput
                input={interaction._userinput._input}
                language={interaction._userinput._inputlanguage}
              />
              {interaction._userresponse._response !== "" && (
                <Response
                  response={interaction._userresponse._response}
                  language={interaction._userresponse._responseLanguage}
                />
              )}
            </div>
          );
        })}
        {currentInput !== undefined ? (
          <>
            <UserInput input={currentInput} language={language} />
            <TranslateMenu />
            {showResponse && (
              <Response response={response} language={responseLanguage} />
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center text-center gap-3">
            <h2 className="lg:text-5xl p-4 md:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-600">
              Translate, Detect <br /> Language & Summarize
            </h2>
            <p className="md:text-xl">with Gemini Nano</p>
          </div>
        )}
      </section>
    );
  }
};

export default ChatArea;
