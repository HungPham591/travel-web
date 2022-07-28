import React from 'react';
import { Divider, Box } from '@mui/material';

export default function CenterDivider() {
  return (
        <Box display="flex" justifyContent="center" sx={{ width: "120px" , height: "2px", backgroundColor: "rgb(18, 25, 33, 0.1 )"}} >
            <Divider sx={{ width: "60px", height: "2px", backgroundColor: "red", }} />
        </Box>
  )
}