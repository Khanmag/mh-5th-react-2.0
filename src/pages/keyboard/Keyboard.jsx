import React, { useState } from "react";
import KeyboardButton from "./KeyboardButton";

// variables
const buttonsData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const maxSymbols = 10;

// ---------------------------------------------------------------
const Keyboard = () => {
  const [text, setText] = useState("");
  const backSpace = () => setText((prev) => prev.slice(0, prev.length - 1));
  const addSymbol = (symbol) => {
    if (text.length >= maxSymbols) return null;
    setText((prev) => prev + symbol);
  };

  return (
    <div>
      <div>
        <p
          style={text.length >= maxSymbols ? { borderColor: "red" } : {}}
          className="textField"
        >
          {text}
        </p>
        {text.length >= maxSymbols && (
          <p style={{ color: "red" }}>вы превысили лимит символов</p>
        )}
      </div>
      <div>
        {buttonsData.map((item) => (
          <KeyboardButton content={item} onClock={() => addSymbol(item)} />
        ))}
        <button onClick={backSpace}>&larr;</button>
      </div>
    </div>
  );
};

export default Keyboard;
