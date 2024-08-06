import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Preloader from "../../components/Preloader";

const InfinityScroll = () => {
  const [photoData, setPhotoData] = useState([]);
  const [currentCount, setCurrentCount] = useState(20);

  const [isLoading, setIsLoading] = useState(false);
  const loadMore = () => {
    if (isLoading) return null;
    setIsLoading(true);
    setTimeout(() => {
      setCurrentCount((prev) => prev + 10);
      setIsLoading(false);
    }, 3000);
  };

  const { ref } = useInView({
    onChange: (inView) => {
      // if (inView) setCurrentCount((prev) => prev + 10);
      if (inView) loadMore();
      // console.log(inView);
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
  useEffect(() => {
    console.log("currentCount", currentCount);
  }, [currentCount]);
  return (
    <Box>
      <Typography variant="h2">InfinityScroll</Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={2} p={2}>
        {photoData
          .slice(0, currentCount)
          // .filter((item, index) => index < currentCount)
          .map((item) => (
            <Box key={item.id}>
              <img src={item.url} alt={item.title} />
            </Box>
          ))}
      </Box>
      {/* {!!photoData.length && ( // если 0 то false, иначе true
        <Button
          ref={ref}
          variant="contained"
          onClick={() => setCurrentCount((prev) => prev + 10)}
        >
          ЗАГРУЗИТЬ ЕЩЁ
        </Button>
      )} */}
      {isLoading ? (
        <Preloader />
      ) : (
        !!photoData.length && (
          // <Button
          //   ref={ref}
          //   variant="contained"
          //   onClick={() => setCurrentCount((prev) => prev + 10)}
          // >
          //   ЗАГРУЗИТЬ ЕЩЁ
          // </Button>
          <Box ref={ref}>КОНЕЦ</Box>
        )
      )}
    </Box>
  );
};

export default InfinityScroll;
