import React from "react";
import { styled, Button } from "@mui/material";

const NewButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  width: "100%",
  marginTop: "30px",
  padding: "10px",
  fontWeight: "500",
  backgroundColor: theme.palette.secondary.main,
}));

export default function OvalButton({ value, width, onClick }) {
  return (
    <>
      <NewButton
        variant="contained"
        onClick={onClick}
      >
        {value}
      </NewButton>
    </>
  );
}
