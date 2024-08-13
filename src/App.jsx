// import Keyboard from "./pages/keyboard/Keyboard";
import React, { useState } from "react";
import HomeWorks from "./pages/hws";
// import ModulesStyles from "./hw/L03/module_example/App";
// import Calculator from "./pages/calculator";
import BlogPage from "./pages/blog";
import OldComponent from "./pages/classes";
import { Box, Button } from "@mui/material";
import Forms from "./pages/forms";
import ContextLesson from "./pages/context_api";
import InfinityScroll from "./pages/infinity-scroll";
import ReduxLesson from "./pages/redux-lesson";
import HooksLesson from "./pages/hooks-lesson";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LessonsSelector from "./pages/LessonsSelector";
import Calculator from "./pages/calculator";
import PostsRouting from "./pages/routing";
import Post from "./pages/routing/Post";

// variables
export const LangContext = React.createContext();
// Компонент - функция, которая возвращает jsx разметку или null

function App() {
  const [currentLang, setCurrentLang] = useState("EN");
  return (
    <LangContext.Provider value={currentLang}>
      <>
        {/* <Forms /> */}
        {/* {showLessons && <Keyboard />} */}
        {/* {showLessons && <BlogPage />} */}
        {/* {showLessons && <OldComponent prop1={"11111"} />} */}
        {/* <ContextLesson /> */}
        {/* <InfinityScroll /> */}
        {/* <ReduxLesson /> */}
        {/* <HooksLesson /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
              />
            }
          >
            <Route index element={<b>HOME</b>} />
            <Route path="hws" element={<HomeWorks />} />
            <Route path="lessons" element={<LessonsSelector />} />
            <Route path="lessons/calculator" element={<Calculator />} />
            <Route path="lessons/routing" element={<PostsRouting />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="*" element={<b>страницы не существует</b>} />
          </Route>
        </Routes>
      </>
    </LangContext.Provider>
  );
}

export default App;
