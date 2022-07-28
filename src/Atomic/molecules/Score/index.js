import React from "react";
import { styled, Typography } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '34px',
  width: '41px',
  textAlign: 'center',
  borderRadius: '5px 5px 5px 0px',
  padding: '5px',
  fontWeight: '600',
}));


export default function Score({ score }) {
  return (
    <Wrapper>
      <Typography pb="10px" color={"white"}>{score}</Typography>
    </Wrapper>
  );
}
