import React from "react";
import { styled, Typography, Box, Link, Grid } from "@mui/material";

const ImageContainer = styled(Grid)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  position: "relative",
  backgroundSize: "120%",
  minWidth: "240px",
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
        <Box position="absolute" top="0px" right="0px">
        <Box
          backgroundColor="yellow"
          pt="4px"
          width= "60px"
          height="60px"
          textAlign="center"
          color="white"
        >
          <Typography variant="h6" fontWeight="600" color="white">
            28
          </Typography>
          <Typography color="white">Dec</Typography>
        </Box>
        </Box>
      </ImageContainer>
      <Grid item lg={7} md={7} sm={7} xs={12}>
        <Box display="flex" mt="-10px">
          <Typography variant="subtitle1" fontWeight="300" mr="2px">{data.userName} - </Typography>
          <Typography variant="subtitle1" fontWeight="300">{data.date}</Typography>
        </Box>
        <Link fontSize="18px" fontWeight="600" color="black" sx={{textDecoration: "none", cursor: "pointer", "&: hover": {color: "secondary.main"}}}>
          {data.title}
        </Link>
        <Typography fontWeight="300" mt="10px">
          {data.description}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
