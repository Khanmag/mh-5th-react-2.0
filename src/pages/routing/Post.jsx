import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api/jsonPH";

const Post = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  useEffect(() => {
    (async () => {
      const newPostData = await getPostById(id);
      console.log(newPostData);
      setPostData(newPostData);
    })();
  }, [id]);
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <h1>POST {id}</h1>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </Box>
  );
};

export default Post;
