import React from "react";
import Score from "../../molecules/Score";
import { styled, Typography, Box, Rating, Link } from "@mui/material";


const Wrapper = styled(Box)(({ theme, image }) => ({
  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%), url(${image})`,
  backgroundColor: theme.palette.background.main,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "110%",
  aspectRatio: "16/11",
  transition: "all 0.2s linear",
  "&: hover": {
    backgroundSize: "105%",
  },
}));

export default function ItemCardImage({ data }) {
  return (
    <Wrapper image={data.image}>
      <Link href={data.href + "/" + data.id}>
        <Box sx={{ position: "relative", backgroundColor: "background.main", height: "100%" }}>
          <Box sx={{ position: "absolute", right: 20, top: 20 }}>
            <Score score={data.score} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", height: "100%" }} >
            <Box sx={{ display: "flex", color: "white", flexDirection: "column", p: 2 }}>
              {data.rating &&
                <Box>
                  <Rating name="read-only" value={data.rating} readOnly sx={{ color: 'white', fontSize: 12 }} />
                </Box>
              }
              <Typography variant="subtitle1" sx={{ color: "white" }}>{data.subtitle}</Typography>
              <Typography variant="subtitle1" sx={{ lineHeight: "21.6px", color: "white", fontSize: 18, fontWeight: 500 }}>
                {data.title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </Wrapper>
  );
}
