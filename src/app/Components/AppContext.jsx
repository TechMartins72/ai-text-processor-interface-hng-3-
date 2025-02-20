"use client";
import React, { createContext, useEffect } from "react";

export const AppContext = createContext();

const inputsArray = [];

const AppContextProvider = (props) => {
  const [input, setInput] = React.useState("");
  const [currentInput, setCurrentInput] = React.useState();
  const [language, setLanguage] = React.useState("");
  const [source, setSource] = React.useState("");
  const [target, setTarget] = React.useState("fr");
  const [response, setResponse] = React.useState("");
  const [loadingLanguage, setLoadingLanguage] = React.useState(false);
  const [loadingResponse, setLoadingResponse] = React.useState(false);
  const [responseLanguage, setResponseLanguage] = React.useState();
  const [showResponse, setShowResponse] = React.useState(false);
  const [isLong, setIsLong] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [notSupported, setNotSupported] = React.useState(false);

  useEffect(() => {
    const supportTranslator =
      "ai" in self && "translator" in self.ai ? "allowed" : "not_allowed";
    if (supportTranslator === "not_allowed") {
      setErrorMessage("Translator is not supported in this browser");
      setNotSupported(true);
    }
  }, []);

  const languages = [
    {
      language: "English",
      _BCP: "en",
    },
    {
      language: "French",
      _BCP: "fr",
    },
    {
      language: "Spanish",
      _BCP: "es",
    },
    {
      language: "Turkish",
      _BCP: "tr",
    },
    {
      language: "Portuguese",
      _BCP: "pt",
    },
    {
      language: "Russian",
      _BCP: "ru",
    },
  ];

  const saveInputs = () => {
    inputsArray.push({
      _userinput: {
        _input: currentInput,
        _inputlanguage: language,
      },
      _userresponse: {
        _response: response,
        _responseLanguage: responseLanguage,
      },
    });
    console.log(inputsArray);
    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentInput !== undefined) {
      saveInputs();
    }
    setResponse("");
    setResponseLanguage("");

    if (input !== "") {
      setCurrentInput(input);
      setLoadingLanguage(true);
      setShowResponse(false);
      checkInputLength();
      detectLanguage();
    } else {
      setErrorMessage("Textarea can't be empty!");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const checkInputLength = () => {
    const _length = input.length;
    if (_length >= 150) {
      setIsLong(true);
    } else {
      setIsLong(false);
    }
  };

  const findBCP = (_language) => {
    const _target = languages.find((language) => {
      return language.language.toLowerCase() == _language;
    });
    setTarget(_target._BCP);
  };

  const handleTranslate = async () => {
    setShowResponse(true);
    setLoadingResponse(true);
    switch (target) {
      case "en":
        setResponseLanguage("English");
        break;
      case "es":
        setResponseLanguage("Spanish");
        break;
      case "tr":
        setResponseLanguage("Turkish");
        break;
      case "ru":
        setResponseLanguage("Russian");
        break;
      case "pt":
        setResponseLanguage("Portuguese");
        break;
      case "fr":
        setResponseLanguage("French");
        break;
    }
    if (target == source) {
      setErrorMessage("Source and target value can't be the same!");
      setError(true);
      setLoadingResponse(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
      setShowResponse(false);
      return;
    }
    const translator = await self.ai.translator.create({
      sourceLanguage: source,
      targetLanguage: target,
    });
    const result = await translator.translate(currentInput);
    setResponse(result);
    setLoadingResponse(false);
  };

  const detectLanguage = async () => {
    const detector = await self.ai.languageDetector.create();
    const detectedLanguage = await detector.detect(input);
    const result = detectedLanguage[0]?.detectedLanguage;
    setSource(result);
    setInput("");
    switch (result) {
      case "en":
        setLanguage("English");
        break;
      case "es":
        setLanguage("Spanish");
        break;
      case "tr":
        setLanguage("Turkish");
        break;
      case "ru":
        setLanguage("Russian");
        break;
      case "pt":
        setLanguage("Portuguese");
        break;
      case "fr":
        setLanguage("French");
        break;
      default:
        setLanguage("Language is undefined!");
    }
    setLoadingLanguage(false);
  };

  return (
    <AppContext.Provider
      value={{
        languages,
        handleSubmit,
        detectLanguage,
        handleTranslate,
        input,
        language,
        source,
        target,
        response,
        setInput,
        currentInput,
        loadingLanguage,
        showResponse,
        loadingResponse,
        setTarget,
        isLong,
        setIsLong,
        findBCP,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        inputsArray,
        responseLanguage,
        notSupported,
        setNotSupported,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
