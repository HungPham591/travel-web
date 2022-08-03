import React from "react";
import { styled, Box, Typography, Link, Grid, Card } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import HahaIcon from "../../../icons/hahaIcon";
import ShareIcon from "@mui/icons-material/Share";

const ImageContainer = styled(Grid)(({ theme, image }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "105%",
  transition: "all 0.5s ease-in-out",
  "&: hover": {
    backgroundSize: "100%",
    "& .readmore": {
      display: "block",
      backgroundColor: theme.palette.background.white,
      color: theme.palette.text.main,
      padding: theme.spacing(1),
      borderRadius: theme.spacing(3)
    },
  },
}));

export default function ItemCardHorizontal({ data }) {
  return (
    <Card>
      <Grid container sx={{ minHeight: 300 }}>
        <ImageContainer item lg={5} md={5} sm={12} xs={12} image={data.image}>
          <Box sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", p: 3, justifyContent: "flex-end" }}>
              <Box sx={(theme) => ({ backgroundColor: theme.palette.background.dark, borderRadius: "3px", padding: theme.space.padding(1) })}>
                <Typography variant="body2" sx={(theme) => ({ fontWeight: 600, color: theme.palette.text.white })}>
                  {data.label}
                </Typography>
              </Box>
            </Box>
            <Box sx={(theme) => ({ display: "flex", justifyContent: "center", marginTop: theme.spacing(6) })}>
              <Link
                href={"/place-detail/" + data.id}
                className="readmore"
                sx={{ display: "none", fontSize: 12 }}
              >
                Xem thêm
              </Link>
            </Box>
          </Box>
        </ImageContainer>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <Box sx={{ p: 4, position: "relative" }}>
              <Box sx={{ position: "absolute", right: 30, top: 15 }}>
                <HeartButton bgColor="rgb(18, 25, 33, 0.15)" color="#555555" />
              </Box>
              <Box sx={{ fontSize: 20, mb: 1 }}>
                <Link href={"/product-detail/" + data.id} sx={{ "&: hover": { color: "black" } }}>{data.title}</Link>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "300", pb: 1 }}>
                {data.description}
              </Typography>
            </Box>
            <Box sx={{ borderTop: "shape.border", display: "flex", justifyContent: "space-between", px: 2, py: 1 }}>
              <Box sx={{ display: "flex", mt: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <HahaIcon sx={{ fontSize: 22 }} />
                  <Typography sx={{ ml: 1 }}>{data.like}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ShareIcon sx={{ fontSize: 18 }} />
                  <Typography sx={{ ml: 1 }}>{data.share}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ pr: 1 }}>
                  <Typography sx={{ fontSize: 12, textAlign: "right" }}>
                    Tuyệt vời
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                    350 Đánh giá
                  </Typography>
                </Box>
                <Box>
                  <Score score="8.9" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
