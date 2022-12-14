import React, { useState } from "react";
import { styled, Button, Popper, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NewPopper = styled(Popper)(({ theme }) => ({
  backgroundColor: "white",
  overflow: "auto",
  maxHeight: 150,
  minWidth: 320,
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    maxWidth: 590,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  }
}));

export default function Dropdown({ values }) {
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
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
        color="text"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography>{selected}</Typography>
        {open ? (
          <KeyboardArrowUpIcon sx={(theme) => ({ fontSize: 30, color: theme.palette.common.grey })} />
        ) : (
          <KeyboardArrowDownIcon sx={(theme) => ({ fontSize: 30, color: theme.palette.common.grey })} />
        )}
      </Button>
      <NewPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
      >
        {values.map((value, index) => {
          return (
            <MenuItem key={index} onClick={() => handleChange(value)}>
              {value}
            </MenuItem>
          );
        })}
      </NewPopper>
    </>
  );
}
