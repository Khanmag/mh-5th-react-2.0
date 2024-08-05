import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import Preloader from "../../../L07/Madina/Blog/Preloader/Preloader";

const InfinityScroll = () => {
  const [photoData, setPhotoData] = useState([]);
  const [currentCount, setCurrentCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    if (isLoading) return null;
    setTimeout(() => {
      setCurrentCount((prev) => prev + 10);
      setIsLoading(false);
    });
  };

  const { ref } = useInView({
    onChange: (InView) => {
      if (InView) loadMore();
    },
  });
  const fetchPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    if (response.status !== 200) return null;

    const data = await response.json();

    setPhotoData(data);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Box>
      <Typography variant="h2">InfinityScroll</Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={2} p={2}>
        {photoData.slice(0, currentCount).map((item) => (
          <Box key={item.id}>
            <img src={item.url} alt={item.title} width={250}></img>
          </Box>
        ))}
      </Box>
      {/* {!!photoData.length && (
        <Button
          ref={ref}
          variant="contained"
          onClick={() => setCurrentCount((prev) => prev + 10)}
        >
          Load more
        </Button>
      )} */}
      {isLoading ? (
        <Preloader />
      ) : (
        !!photoData.length && (
          <Button
            ref={ref}
            variant="contained"
            onClick={() => setCurrentCount((prev) => prev + 10)}
          >
            Load more
          </Button>
        )
      )}
    </Box>
  );
};

export default InfinityScroll;
