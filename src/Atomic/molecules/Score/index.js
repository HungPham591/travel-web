import React from "react";
import { styled, Typography, Box } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 34,
  width: 41,
  textAlign: 'center',
  borderRadius: '5px 5px 5px 0px',
  padding: theme.spacing(1),
  fontWeight: 600,
}));


export default function Score({ score }) {
  return (
    <Wrapper>
      <Typography sx={{ pb: 1, color: "white" }}>{score}</Typography>
    </Wrapper>
  );
}
