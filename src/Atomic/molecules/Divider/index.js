import React from 'react';
import { Divider, Box } from '@mui/material';

export default function HorizontalDivider() {
  return (
        <Box sx={(theme) => ({ width: 120 , height: 2, backgroundColor: theme.palette.background.light})} >
            <Divider sx={(theme) =>({ width: 60, height: 2, backgroundColor: theme.palette.secondary.main })} />
        </Box>
  )
}
