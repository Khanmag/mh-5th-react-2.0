import React, { useState } from "react";
import KeyboardButton from "./KeyboardButton";

const Keyboard = () => {
  const [text, setText] = useState("");
  const backSpace = () => setText((prev) => prev.slice(0, prev.length - 1));
  const addToText = (value) => setText((prev) => prev + value);

  const buttons = [
    {
      text: "AC",
      func: backSpace,
      class: "AC",
    },
    {
      text: "/",
      func: addToText,
      class: "sign",
    },
    {
      text: "*",
      func: addToText,
      class: "sign",
    },
    {
      text: "7",
      func: addToText,
      class: ""
    },

    {
      text: "8",
      func: addToText,
      class: ""
    },

    {
      text: "9",
      func: addToText,
      class: ""
    },

    {
      text: "-",
      func: addToText,
      class: "sign",
    },

    {
      text: "4",
      func: addToText,
      class: "" 
    },

    {
      text: "5",
      func: addToText,
      class: "",
    },

    {
      text: "6",
      func: addToText,
      class: "",
    },

    {
      text: "+",
      func: addToText,
      class: "sign",
    },
    {
      text: "1",
      func: addToText,
      class: ""
    },

    {
      text: "2",
      func: addToText,
      class: ""
    },

    {
      text: "3",
      func: addToText,
      class: ""
    },

    {
      text: "=",
      func: addToText,
      class: "equal",
    },
    {
      text: "0",
      func: addToText,
      class: "zero"
    },

    {
      text: ",",
      func: addToText,
      class: ""
    },
  ];

  return (
    <div>

      <p className="textFieled">{text}</p>

      <div className="buttons">
        {buttons.map((buttonItem) => (
          <KeyboardButton
          key={buttonItem.text}
          text={buttonItem.text}
          setText={() => setText(text + buttonItem.text)}
          onClick={() => buttonItem.func(buttonItem.text)}
          className={buttonItem.class}
          />
        ))}
      </div>
    </div>
  )

};

export default Keyboard;
