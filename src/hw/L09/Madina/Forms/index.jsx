import { Box, Button } from "@mui/material";
import React, { useState } from "react";



function Form() {
  const [value, setValue] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [textErrors, setTextErrors] = useState([]);
  const [otherTextErrors, setOtherTextErrors] = useState([]);

  const errorHandler = (text) => {
    //
    if (text.length > 20) {
      if (!textErrors.includes("Too long"))
        setTextErrors((prev) => [...prev, "Too long"]);
      return false;
    } else setTextErrors((prev) => prev.filter((item) => item !== "Too long"));
    if (text.length < 5)
      if (!textErrors.includes("Too short"))
        setTextErrors((prev) => [...prev, "Too short"]);
      else setTextErrors((prev) => prev.filter((item) => item !== "Too short"));
    if (!text.includes("@")) {
      if (!textErrors.includes("No @"))
        setTextErrors((prev) => [...prev, "No @"]);
    } else setTextErrors((prev) => prev.filter((item) => item !== "No @"));
    if (!(text.endsWith(".ru") || text.endsWith(".com"))) {
      if (!textErrors.includes("Incorrect address"))
        setTextErrors((prev) => [...prev, "Incorrect address"]);
    }
    else
      setTextErrors((prev) => prev.filter((item) => item !== "Incorrect address")
      );
    return true;
  };

  const otherErrorHandler = (text) => {
    //
    if (text.length > 20) {
      if (!otherTextErrors.includes("Too long Pass"))
        setOtherTextErrors((prev) => [...prev, "Too long Pass"]);
      return false;
    }
    else
      setOtherTextErrors((prev) => prev.filter((item) => item !== "Too long Pass")
      );
    if (text.length < 8)
      if (!otherTextErrors.includes("Too short Pass"))
        setOtherTextErrors((prev) => [...prev, "Too short Pass"]);

      else
        setOtherTextErrors((prev) => prev.filter((item) => item !== "Too short Pass")
        );

    const numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (!numberArr.some((num) => text.includes(num))) {
      if (!otherTextErrors.includes("No Number"))
        setOtherTextErrors((prev) => [...prev, "No Number"]);
    }
    else
      setOtherTextErrors((prev) => prev.filter((item) => item !== "No Number"));

    const symbolArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    if (!symbolArr.some((symbol) => text.includes(symbol))) {
      if (!otherTextErrors.includes("No Symbol")) {
        setOtherTextErrors((prev) => [...prev, "No Symbol"]);
      }
    } else {
      setOtherTextErrors((prev) => prev.filter((item) => item !== "No Symbol"));
    }
    return true;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (errorHandler(newValue)) setValue(newValue);
  };
  const otherHandleChange = (e) => {
    const newOtherValue = e.target.value;
    if (otherErrorHandler(newOtherValue)) setOtherValue(newOtherValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && !textErrors.length) alert("Data sent!");
    else alert("Can't send data");
  };
  const otherHandleSubmit = (e) => {
    e.preventDefault();
    if (otherValue && !otherTextErrors.length) alert("Data sent!");
    else alert("Can't send data");
  };

  return (
    <>
      <h1>FORMS</h1>
      <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)">
        <form onSubmit={handleSubmit}>
          <label>
            <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
              <h4>e-mail</h4>
              <input
                name="email"
                type="email"
                value={value}
                onChange={handleChange} />
            </Box>
          </label>
          {textErrors.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <Box display={"flex"} gap={3}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              variant="contained"
              type="reset"
              onClick={() => setValue("")}
            >
              Reset
            </Button>
          </Box>
        </form>

        <form onSubmit={otherHandleSubmit}>
          <label>
            <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
              <h4>Password</h4>
              <input
                name="password"
                type="password"
                value={otherValue}
                onChange={otherHandleChange} />
            </Box>
          </label>
          {otherTextErrors.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <Box display={"flex"} gap={3}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              variant="contained"
              type="reset"
              onClick={() => setOtherValue("")}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default Form;
