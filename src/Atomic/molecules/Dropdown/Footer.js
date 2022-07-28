import React, { useState } from "react";
import { Button, MenuItem, Typography, styled, Popper } from "@mui/material";

const NewPopper = styled(Popper)(({ theme }) => ({
  backgroundColor: "white",
  maxHeight: "100px",
  minWidth: "50px",
  // width: "24%",
  overflow: "auto",
  zIndex: "20",
  borderTop: "10px solid #ffffff00",
}));


export default function Dropdown({ values, children }) {
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
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          color: "#fff",
          opacity: "0.7",
        }}
        color="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography variant="subtitle1" mr="10px" color="white">{selected}</Typography>
        {children}
      </Button>
      <NewPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        {values.map((value, index) => {
          return (
            <MenuItem key={index} onClick={() => handleChange(value)} fontSize="12px">
              {value}
            </MenuItem>
          );
        })}
      </NewPopper>
    </>
  );
}
