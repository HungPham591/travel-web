import React from 'react';
import { Divider, Box } from '@mui/material';

export default function CenterDivider() {
  return (
        <Box sx={{ display:"flex", justifyContent: "center", width: 120, height: 2, backgroundColor: "background.light"}} >
            <Divider sx={{ width: 60, height: 2, backgroundColor: "secondary.main", }} />
        </Box>
  )
}