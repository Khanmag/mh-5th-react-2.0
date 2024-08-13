import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/jsonPH";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './index.module.css'

const PostsRouting = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
    })();
  }, []);
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box maxWidth={600}>
        {posts.map((postItem) => (
          <li>
            <Link className={styles.postItem} to={`/posts/${postItem.id}`}>{postItem.title}</Link>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default PostsRouting;
