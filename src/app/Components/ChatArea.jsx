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
      <section className="w-full h-full flex flex-col gap-6 overflow-y-scroll ">
        {inputsArray.map((interaction, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <UserInput
                input={interaction._userinput._input}
                language={interaction._userinput._inputlanguage}
              />
              {interaction._userresponse !== "" && (
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
            <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-600">
              Translate, Detect <br /> Language & Summarize
            </h2>
            <p>with Gemini Nano</p>
          </div>
        )}
      </section>
    );
  }
};

export default ChatArea;
