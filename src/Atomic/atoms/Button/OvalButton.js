import React from "react";
import { styled, Button } from "@mui/material";

const NewButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(4),
  marginTop: theme.spacing(5),
  padding: theme.spacing(1),
  width: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.text.main,
  },
}));

export default function OvalButton({ value, onClick }) {
  return (
      <NewButton onClick={onClick}>
        {value}
      </NewButton>
  );
}
