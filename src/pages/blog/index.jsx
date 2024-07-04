import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentBox from "./CommentBox";

const BlogPage = () => {
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect( () => {}, []) // func  deps
  useEffect(() => {
    // then принимает в себя функцию, аргумент которой будет возвратом предыдущей функции
    try {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setTimeout(() => {
            console.log(data);
            setCurrentData(data?.length ? data : []);
            setIsLoading(false);
          }, 100);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Box>
      {isLoading ? (
        <Typography>Загрузка</Typography>
      ) : (
        <Box>
          {/* {currentData.map((item) => (
            <CommentBox
              key={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
            />
          ))} */}
          {/* {currentData.map(({ id, name, email, body }) => (
            <CommentBox key={id} name={name} email={email} body={body} />
          ))} */}
          {currentData.map((item) => (
            <CommentBox key={item.id} {...item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BlogPage;
