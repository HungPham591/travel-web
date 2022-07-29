import React from "react";
import { styled, Button } from "@mui/material";

const NewButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightMedium,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(5),
  padding: theme.spacing(1),
  width: "inherit",
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function RectangleButton({ value }) {
  return (
      <NewButton>
        {value}
      </NewButton>
  );
}
