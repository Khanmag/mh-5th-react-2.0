import { Box, Button, Pagination, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
import Preloader from "../../components/Preloader";
import { getComments } from "../../api/jsonPH";

// variables
const perPage = 15;
// --------------------------------------------------
const BlogPage = () => {
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const onPageChange = (_, newPage) => setPage(newPage);
  const [searchText, setSearchText] = useState("");
  // useEffect( () => {}, []) // func  deps

  const fetchFunction = async () => {
    setIsLoading(true);
    const data = await getComments(35);
    setCurrentData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchFunction();
  }, []);

  // const filteredData = currentData.filter((item) => {
  // if (item.name.includes(searchText)) return true;
  // if (item.body.includes(searchText)) return true;
  // });
  const filteredData = currentData.filter(
    (item) => item.name.includes(searchText) || item.body.includes(searchText)
  );

  return (
    <Box>
      {isLoading ? (
        <Preloader />
      ) : (
        <Box p={2}>
          <Box>
            <TextField
              color="secondary"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Box>
          <Box>
            {filteredData
              .slice((page - 1) * perPage, page * perPage - 1)
              .map((item) => (
                <CommentBox key={item.id} {...item} />
              ))}
          </Box>
          {filteredData.length > perPage && (
            <Box>
              <Pagination
                variant="outlined"
                color="secondary"
                count={Math.ceil(filteredData.length / perPage)}
                page={page}
                onChange={onPageChange}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default BlogPage;
