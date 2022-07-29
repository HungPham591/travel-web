import React from "react";
import { styled, Typography, Box, Link, Grid } from "@mui/material";

const ImageContainer = styled(Grid)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  position: "relative",
  backgroundSize: "120%",
  minWidth: 240,
  aspectRatio: "3/2",
  transition: "all 0.2s linear",
  "&: hover": {
    backgroundSize: "115%",
  }
}));

export default function ItemCardNews( { data } ) {
  return (
    <React.Fragment>
      <ImageContainer item lg={5} md={5} sm={5} xs={12} image={data.image}>
        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Box sx={{ backgroundColor: "common.yellow", width: 60, height: 60, textAlign: "center", color: "white" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
            28
          </Typography>
          <Typography sx={{ color: "white" }}>Dec</Typography>
        </Box>
        </Box>
      </ImageContainer>
      <Grid item lg={7} md={7} sm={7} xs={12}>
        <Box sx={{ display: "flex", mt: -1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 300, mr: "2px" }}>{data.userName} - </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>{data.date}</Typography>
        </Box>
        <Link sx={{ fontSize: 18, fontWeight: 600, color: "black", "&: hover": {color: "secondary.main"}}}>
          {data.title}
        </Link>
        <Typography sx={{ fontWeight: 300, mt: 1 }}>
          {data.description}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
