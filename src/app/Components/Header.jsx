import React from "react";

const Header = () => {
  return (
    <header
      aria-label="Gemini Logo"
      className="absolute top-0 left-0 right-0 z-10 h-[4rem] font-semibold bg-[#0d0d0d] flex items-center border-b-[1px] border-[#2c2828] px-12"
    >
      <h2 className="cursor-pointer">Gemini Nano</h2>
    </header>
  );
};

export default Header;
