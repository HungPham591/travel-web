import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Icon } from "./noteIcon.svg";

export default function NoteIcon(props) {
  return (
    <SvgIcon
      component={Icon}
      {...props}
      inheritViewBox={true}
      color="secondary"
      sx={{ width: "60px", height: "60px", "&: hover": { color: "green" } }}
    />
  );
}
