// import Keyboard from "./pages/keyboard/Keyboard";
import { useEffect, useState } from "react";
import HomeWorks from "./pages/hws";
// import ModulesStyles from "./hw/L03/module_example/App";
// import Calculator from "./pages/calculator";
import BlogPage from "./pages/blog";
import OldComponent from "./pages/classes";
import { Box } from "@mui/material";
import Forms from "./pages/forms";

// variables

// Компонент - функция, которая возвращает jsx разметку или null
function App() {
  const [showHWs, setShowHWs] = useState(false);
  const [showLessons, setShowLessons] = useState(true);
  const [currentDate, setCurrendDate] = useState(new Date());

  const toggleShowHWs = () => {
    setShowHWs((prev) => !prev);
    if (showLessons) setShowLessons(false);
  };
  const toggleShowLessons = () => {
    setShowLessons((prev) => !prev);
    if (showHWs) setShowHWs(false);
  };
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     console.log("tik tak");
  //     setCurrendDate(new Date());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("rerender");
  // }, [currentDate]);
  return (
    <div>
      <header>
        <button onClick={toggleShowHWs}>HWs</button>
        <button onClick={toggleShowLessons}>Lessons</button>
      </header>
      <Box>
        {/* {currentDate.getHours()} {currentDate.getMinutes()}{" "} */}
        {/* {currentDate.getSeconds()} */}
      </Box>
      {/* <Counter /> */}
      {/* <ModulesStyles /> */}
      {/* <div> */}
      {/* {showHWs && <HomeWorks />} */}
      <Forms />
      {/* {showLessons && <Keyboard />} */}
      {/* {showLessons && <Calculator />} */}
      {/* {showLessons && <BlogPage />} */}
      {/* {showLessons && <OldComponent prop1={"11111"} />} */}
      {/* </div> */}
    </div>
  );
}

export default App;

////
// onClick={() => {
//   // if (showHWs === true) {
//   // if (showHWs) {
//   //   setShowHWs(false);
//   // } else {
//   //   setShowHWs(true);
//   // }
//   //
//   // setShowHWs(prev => {
//   //   if (prev) return false
//   //   else return true
//   // })
// }}
