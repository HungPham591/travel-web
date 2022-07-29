import React from 'react';
import { Divider, Box } from '@mui/material';

export default function CenterDivider() {
  return (
        <Box sx={{ display:"flex", justifyContent: "center", width: 120, height: 2, backgroundColor: "rgb(18, 25, 33, 0.1 )"}} >
            <Divider sx={{ width: "60px", height: "2px", backgroundColor: "secondary.main", }} />
        </Box>
  )
}