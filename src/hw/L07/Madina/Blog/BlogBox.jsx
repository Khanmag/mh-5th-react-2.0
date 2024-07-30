import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./blogBox.module.css"

const BlogBox = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Box className={styles.blogBox}>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => setIsOpen((prev) => !prev)}
        variant="h4"
      >
        {title}
      </Typography>
      {isOpen && (
        <Box>
          <Typography>{body}</Typography>
          {isLiked ? (
            <FavoriteIcon onClick={() => setIsLiked(false)} />
          ) : (
            <FavoriteBorderIcon onClick={() => setIsLiked(true)} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default BlogBox;
