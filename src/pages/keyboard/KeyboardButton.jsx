import React from "react";


const KeyboardButton = ({ content = "", onClick = () => {} }) => {
  // const KeyboardButton = (props) => {
  // const { content = "", onClick = () => {} } = props;
  // return <button>{content}</button>;
  return (
    // <button style={{ color: "green" }} onClick={() => props.onClick()}>
    //   {props.content}
    // </button>
    <button style={{ color: "green" }} onClick={() => onClick()}>
      {content}
    </button>
  );
};

export default KeyboardButton;
