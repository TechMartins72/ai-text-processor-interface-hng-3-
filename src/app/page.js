"use client";

import Header from "./Components/Header";
import MainArea from "./Components/MainArea";
import ErrorComponent from "./Components/ErrorComponent";
import React, { useContext } from "react";
import { AppContext } from "./Components/AppContext";

const Home = () => {
  const { error, notSupported, errorMessage } = useContext(AppContext);

  return (
    <main className="bg-[#0d0d0d] h-screen w-screen text-white relative flex items-end">
      <Header />
      {notSupported ? (
        <div className="h-[calc(100vh-4rem)] flex flex-col md:w-[65%] w-[100%] mx-auto pb-12 justify-center items-center px-8 text-center text-white">
          <h1 className="text-3xl font-bold text-red-500">Error</h1>
          <p className="mt-2">{errorMessage}</p>
        </div>
      ) : (
        <MainArea />
      )}
      {error && <ErrorComponent />}
    </main>
  );
};

export default Home;
