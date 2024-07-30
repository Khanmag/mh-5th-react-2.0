import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const Forms = () => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [textErrors, setTextErrors] = useState([]);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const errorHandler = (text) => {
    //
    if (text.length > 20) {
      if (!textErrors.includes("слишком длинный email"))
        setTextErrors((prev) => [...prev, "слишком длинный email"]);
      return false;
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "слишком длинный email")
      );
    //
    if (text.length < 5) {
      if (!textErrors.includes("слишком короткий email"))
        setTextErrors((prev) => [...prev, "слишком короткий email"]);
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "слишком короткий email")
      );
    //
    if (!text.includes("@")) {
      if (!textErrors.includes("нет символа @")) {
        setTextErrors((prev) => [...prev, "нет символа @"]);
      }
    } else
      setTextErrors((prev) => prev.filter((item) => item !== "нет символа @"));

    if (!(text.endsWith(".ru") || text.endsWith(".com"))) {
      if (!textErrors.includes("не корректный адрес")) {
        setTextErrors((prev) => [...prev, "не корректный адрес"]);
      }
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "не корректный адрес")
      );

    return true;
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    // if (newValue.length > 20) return setErrorText("слишком длинный email");
    // if (newValue.length < 20) setErrorText("");
    // if (newValue.length < 5) setErrorText("слишком короткий email");
    // if (newValue.length > 5) setErrorText("");
    // if (!newValue.includes("@")) setErrorText("нет символа @");
    // if (newValue.includes("@")) setErrorText("");
    if (errorHandler(newValue)) setValue(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && !textErrors.length) alert("Данные отправлены!");
    else alert("Невозможно отправить!!!");
  };
  return (
    <div>
      <h1>FORMS</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
            <h4>email</h4>
            {/* <input
              name="email"
              type="email"
              value={value}
              onChange={handleChange}
            /> */}
          </Box>
          <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
            <h4>email</h4>
            <input
              // name="email"
              type={isPassVisible ? "text" : "password"}
              // value={value}
              // onChange={handleChange}
            />
            <RemoveRedEyeIcon
              onClick={() => setIsPassVisible((prev) => !prev)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </label>
        {/* <p>{errorText}</p> */}
        {textErrors.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <button type="reset" onClick={() => setValue("")}>
          Стереть
        </button>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Forms;
