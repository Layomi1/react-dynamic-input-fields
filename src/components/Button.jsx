import React from "react";

const Button = ({ text, handleAction, isColor = true }) => {
  return (
    <button
      className={`py-2 px-[5px] border-1 text-sm focus:text-white bg-transparent cursor-pointer font-semibold rounded-[2px] ${
        isColor
          ? "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
          : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      }`}
      onClick={handleAction}
    >
      {text}
    </button>
  );
};

export default Button;
