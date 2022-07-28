import React, { useState } from "react";
import { styled, Typography, Box, Button, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.white,
  padding: "11px 6px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "11px 6px",
  },
}));

const BorderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid rgb(18, 25, 33, 0.2)",
  borderRadius: "5px",
  justifyContent: "space-around",
  alignItems: "center",
  color: "#000000",
  [theme.breakpoints.down("sm")]: {
    margin: "5px",
  },
}));

const NewButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.main, 
  fontSize: "12px", 
  fontWeight: "600", 
  "&: hover": { color: theme.palette.secondary.main }
}));

export default function FilterBox({ toggle, setToggle }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Wrapper>
        <Box>
        <BorderBox>
            <NewButton>Tất cả</NewButton>
            <NewButton>Phổ biến</NewButton>
            <NewButton>Mới nhất</NewButton>
        </BorderBox>
        </Box>
        <Box display="flex">
          <BorderBox mr="10px">
            <NewButton onClick={handleClick}>
              <LocationOnIcon sx={{ fontSize: "14px", marginRight: "5px" }} />
              <Typography variant="subtitle1" display="inline" color="inherit">
                {show ? "Hide map" : "View on map"}
              </Typography>
            </NewButton>
          </BorderBox>
          <BorderBox>
            <IconButton sx={{ "&: hover": { color: "secondary.main" } }} onClick={() => setToggle(true)}>
              <ViewComfyIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <IconButton sx={{ "&: hover": { color: "secondary.main" } }} onClick={() => setToggle(false)}>
              <FormatListBulletedIcon sx={{ fontSize: "18px" }} />
            </IconButton>
          </BorderBox>
        </Box>
      </Wrapper>

      <Box display={show ? "block" : "none"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.404851185806!2d104.98487493793704!3d22.819044389855932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc79b180b4239d%3A0xb7a373a73bc23544!2zVHAuIEjDoCBHaWFuZywgSMOgIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1656476736230!5m2!1svi!2s"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ha giang"
        ></iframe>
      </Box>
    </>
  );
}
