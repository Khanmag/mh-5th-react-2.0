import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import styles from "./index.module.css";

const CommentBox = ({ name, email, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Box className={styles.commentBox}>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() => setIsOpen((prev) => !prev)}
        variant="h5"
      >
        {name}
      </Typography>
      {isOpen && (
        <Box>
          <Box>
            <Typography>{body}</Typography>
            {isLiked ? (
              <FavoriteIcon onClick={() => setIsLiked(false)} />
            ) : (
              <FavoriteBorderIcon onClick={() => setIsLiked(true)} />
            )}
          </Box>
          <Typography variant="subtitle">
            <a href={"mailto:" + email}> {email}</a>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CommentBox;
