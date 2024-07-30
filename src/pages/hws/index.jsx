import React, { useState } from "react";
import MadinaHW2 from "../../hw/L02/Madina";
import MadinaHW3 from "../../hw/L03/module_example/App";
import MadinaHW4 from "../../hw/L04/Madina/Calc";
import MadinaHW5 from "../../hw/L05/Madina/Calc";
import MadinaHW7 from "../../hw/L07/Madina/Blog";
import ShowOnClickButton from "../../components/ShowOnClickButton";
import { Box, Button } from "@mui/material";

// variables
const hws = {
  Madina: [
    {
      label: "HW2",
      component: <MadinaHW2 />,
    },
    {
      label: "HW3",
      component: <MadinaHW3 />,
    },
    {
      label: "HW4",
      component: <MadinaHW4 />,
    },
    {
      label: "HW5",
      component: <MadinaHW5 />,
    },
    {
      label: "HW7",
      component: <MadinaHW7 />,
    },
  ],
  Sasha: [
    {
      label: "HW2",
      component: null,
    },
  ],
};
// -----------------------------------------------------------------
const HomeWorks = () => {
  const [showMadinasHW, setShowMadinasHW] = useState(false);
  const [showSashasHW, setShowSashasHW] = useState(false);

  const toggleContent = (name) => {
    if (name === "Мадина") {
      setShowSashasHW(false);
      setShowMadinasHW((prev) => !prev);
    }
    if (name === "Саша") {
      setShowMadinasHW(false);
      setShowSashasHW((prev) => !prev);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={3}>
      <Box display={"flex"} gap={2}>
        {["Мадина", "Саша"].map((nameItem) => (
          <Button
            key={nameItem}
            variant="contained"
            onClick={() => toggleContent(nameItem)}
          >
            {nameItem}
          </Button>
        ))}
      </Box>
      <Box display={"flex"} gap={1} mt={5}>
        {showMadinasHW &&
          hws.Madina.map((item) => (
            <ShowOnClickButton
              buttonText={item.label}
              content={item.component}
            />
          ))}
        {showSashasHW &&
          hws.Sasha.map((item) => (
            <ShowOnClickButton
              buttonText={item.label}
              content={item.component}
            />
          ))}
      </Box>
    </Box>
  );
};

export default HomeWorks;
