import React from "react";

import styles from "./index.module.css";
import { Box } from "@mui/material";

const Preloader = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} p={2}>
      <span className={styles.loader}></span>
    </Box>
  );
};

export default Preloader;
