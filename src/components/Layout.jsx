import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { dictionary } from "../utils/lang";
import styles from "./index.module.css";

const getActiveStyle = ({ isActive }) => (isActive ? styles.activeLink : "");

const Layout = ({ currentLang, setCurrentLang }) => {
  const _ = (text) => dictionary[text][currentLang];
  return (
    <>
      <header>
        <Box>logo</Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          {/* <Link to="/">{getHomeName(currentLang)}</Link> */}
          <NavLink className={getActiveStyle} to="/">
            {_("главная")}
          </NavLink>
          <NavLink className={getActiveStyle} to="/hws">
            {_("домашки")}
          </NavLink>
          <NavLink className={getActiveStyle} to="/lessons">
            {_("уроки")}
          </NavLink>
        </Box>
        <Box>
          <Select
            value={currentLang}
            onChange={(e) => setCurrentLang(e.target.value)}
          >
            <MenuItem value="RU">RU</MenuItem>
            <MenuItem value="EN">EN</MenuItem>
          </Select>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Box display={"flex"} justifyContent={"center"} height={50}>
          2024
        </Box>
      </footer>
    </>
  );
};

export default Layout;
