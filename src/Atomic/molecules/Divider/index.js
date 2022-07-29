import React from 'react';
import { Divider, Box } from '@mui/material';

export default function HorizontalDivider() {
  return (
        <Box sx={{ width: "120px" , height: "2px", backgroundColor: "rgb(18, 25, 33, 0.1 )"}} >
            <Divider sx={{ width: "60px", height: "2px", backgroundColor: "secondary.main", }} />
        </Box>
  )
}
