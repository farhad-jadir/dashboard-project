import React from "react";

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 md:px-4 md:py-2 font-semibold bg-[#F26922] text-lg md:text-base flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#d8561e] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;