import React from "react";
import styles from "./preloader.module.css";
import { Box } from "@mui/material";

const Preloader = () => {
  return (
    <Box>
      <span className={styles.loader}></span>
    </Box>
  );
};

export default Preloader;
