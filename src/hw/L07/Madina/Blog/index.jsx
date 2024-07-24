import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogBox from "./BlogBox";
import Preloader from "./Preloader/Preloader";

const BlogPage = () => {
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    try {
      setisLoading(true);

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setTimeout(() => {
            console.log(data);
            setCurrentData(data?.length ? data : []);
            setisLoading(false);
          }, 1500);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Box>
      {isLoading ? (
        // <Typography>Loading</Typography>
        <Preloader/>
      ) : (
        <Box>
          {currentData.map((item) => (
            <BlogBox key={item.id} {...item}/>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BlogPage;
