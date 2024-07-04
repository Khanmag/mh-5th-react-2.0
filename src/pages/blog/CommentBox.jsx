import { Box, Typography } from '@mui/material'
import React from 'react'

const CommentBox = ({name, email, body}) => {
  return (
    <Box>
      <Typography>{name}</Typography>
    </Box>
  )
}

export default CommentBox
