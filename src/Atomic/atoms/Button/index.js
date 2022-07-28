import React from "react";
import { styled, Button } from "@mui/material";

const NewButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "50px",
  borderRadius: "3px 3px 3px 3px",
  fontWeight: "600",
  transition: "all 0.3s ease-in-out",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.text.main,
  },
}));

export default function RectangleButton({ value }) {
  return (
    <>
      <NewButton variant="contained">{value}</NewButton>
    </>
  );
}
