import React, { useState } from "react";
import { Button, MenuItem, Typography, styled, Popper } from "@mui/material";

const NewPopper = styled(Popper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  maxHeight: 100,
  minWidth: 50,
  overflow: "auto",
  borderTop: "1 solid common.white",
}));


export default function FooterDropdown({ values, children }) {
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState(values[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClick = (event) => {
    toggle ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
    setToggle(!toggle);
  };

  function handleChange(value) {
    setSelected(value);
    setAnchorEl(null);
    setToggle(!toggle);
  }

  return (
    <>
      <Button
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "background.inputBase",
          color: "text.primary",
          opacity: "0.7",
        }}
        color="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography variant="subtitle1" sx={{ mr: 1, color: "common.white" }}>{selected}</Typography>
        {children}
      </Button>
      <NewPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        {values.map((value, index) => {
          return (
            <MenuItem key={index} onClick={() => handleChange(value)} sx={{ fontSize: 12 }}>
              {value}
            </MenuItem>
          );
        })}
      </NewPopper>
    </>
  );
}
