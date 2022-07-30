import React from "react";
import { styled, InputBase, IconButton, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Dropdown from "../../molecules/Dropdown";

const Wrapper = styled(Grid)(({ theme }) => ({
  borderRadius: 20,
  flexWrap: "nowrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    border: "none",
    marginLeft: 0,
    gap: theme.spacing(2),
    maxWidth: 600,
  },
}));

const SearchField = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: "flex",
  justifyContent: "space-between",
  height: theme.spacing(6),
  padding: theme.spacing(1),
  borderRight: "1px solid rgb(18, 25, 33, 0.2 )",
  boxShadow: "1px 1px 5px rgb(18, 25, 33, 0.2 )",
  [theme.breakpoints.down("md")]: {
    borderRadius: theme.shape.borderRadius,
    border: "none",
  },
}));
const NewButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: theme.spacing(6),
  borderRadius: "0px 5px 5px 0px",
  fontWeight: 600,
  transition: "all 0.3s ease-in-out",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.white,
  "&:hover": {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.text.main,
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: theme.shape.borderRadius,
    border: "none",
  },
}));

export default function SearchBox({ searchField }) {
  return (
    <Wrapper container>
      {searchField.secondInput ? (
        <SearchField
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{ borderRadius: "5px 0px 0px 5px" }}
        >
          <InputBase placeholder={searchField.firstInput} />
          <IconButton
            type="submit"
            aria-label="search"
            sx={{ color: "common.grey", fontSize: 24 }}
          >
            <SearchIcon />
          </IconButton>
        </SearchField>
      ) : (
        <SearchField
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          sx={{ borderRadius: "5px 0px 0px 5px" }}
        >
          <InputBase placeholder={searchField.firstInput} />
          <IconButton
            type="submit"
            aria-label="search"
            sx={{ color: "common.grey", fontSize: 24 }}
          >
            <SearchIcon />
          </IconButton>
        </SearchField>
      )}
      {searchField.secondInput && (
        <SearchField item lg={3} md={3} sm={12} xs={12}>
          <InputBase placeholder={searchField.secondInput} />
          <IconButton
            type="submit"
            aria-label="search"
            sx={{ color: "common.grey", fontSize: 24 }}
          >
            <LocationOnIcon />
          </IconButton>
        </SearchField>
      )}
      <SearchField item lg={3} md={3} sm={12} xs={12}>
        <Dropdown values={searchField.selectBox} />
      </SearchField>
      <Grid item lg={2} md={2} sm={12} xs={12}>
        <NewButton>{searchField.buttonValue}</NewButton>
      </Grid>
    </Wrapper>
  );
}
