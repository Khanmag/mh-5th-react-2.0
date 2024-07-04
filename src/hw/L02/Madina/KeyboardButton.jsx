import React from "react";
import "./global.css";

const KeyboardButton = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default KeyboardButton;