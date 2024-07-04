import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const ShowOnClickButton = ({ buttonText, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <Box>
      <Button onClick={() => setShowContent((prev) => !prev)}>
        {buttonText}
      </Button>
      {showContent && <Box>{content}</Box>}
    </Box>
  );
};

export default ShowOnClickButton;
