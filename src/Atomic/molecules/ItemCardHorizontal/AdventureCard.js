import React from "react";
import { styled, Box, Typography, Link, Grid, Card, Button } from "@mui/material";
import Score from "../../molecules/Score";
import CustomBackgroundHearButton from "../../molecules/HeartButton/CustomBackgroundHearButton";
import HahaIcon from "../../../icons/HahaIcon";
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
      borderRadius: theme.spacing(3),
      fontSize: 12
    },
  },
}));

export default function ItemCardHorizontal({ data }) {
  return (
    <Card>
      <Grid container sx={{ minHeight: 300 }}>
        <ImageContainer item lg={5} md={5} sm={12} xs={12} image={data.image}>
          <Box sx={{ height: "100%", position: "relative" }}>
            <Box sx={(theme) => ({ display: "flex", justifyContent: "flex-end", padding: theme.spacing(3) })}>
              <Box sx={(theme) => ({ backgroundColor: theme.palette.background.dark, borderRadius: theme.shape.borderRadius, padding: theme.spacing(1) })}>
                <Typography variant="body2" sx={(theme) => ({ fontWeight: 600, color: theme.palette.text.white })}>
                  {data.label}
                </Typography>
              </Box>
            </Box>
            <Box sx={(theme) => ({ position: "absolute", height: "100%", width: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alighItems: "center" })}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button
                  className="readmore"
                  commponent={Link}
                  href={"/place-detail/" + data.id}
                  sx={{ display: "none" }}
                >
                  Xem thêm
                </Button>
              </Box>
            </Box>
          </Box> 
        </ImageContainer>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <Box sx={(theme) => ({ padding: theme.spacing(4), position: "relative" })}>
              <Box sx={{ position: "absolute", right: 30, top: 15 }}>
                <CustomBackgroundHearButton bgColor="rgb(18, 25, 33, 0.15)" color="#555555" />
              </Box>
              <Box sx={(theme) => ({ fontSize: 20, marginBottom: theme.spacing(1) })}>
                <Link href={"/product-detail/" + data.id} sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: 20, "&: hover": { color: theme.palette.common.black } })}>{data.title}</Link>
              </Box>
              <Typography variant="body1" sx={(theme) => ({ fontWeight: 300, paddingBottom: theme.spacing(1) })}>
                {data.description}
              </Typography>
            </Box>
            <Box sx={(theme) => ({ borderTop: theme.shape.border, display: "flex", justifyContent: "space-between", paddingX: theme.spacing(2), paddingY: theme.spacing(1) })}>
              <Box sx={(theme) => ({ display: "flex", marginTop: theme.spacing(3) })}>
                <Box sx={(theme) => ({ display: "flex", alignItems: "center", marginRight: theme.spacing(2) })}>
                  <HahaIcon sx={{ fontSize: 22 }} />
                  <Typography sx={(theme) => ({ marginLeft: theme.spacing(1) })}>{data.like}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ShareIcon sx={{ fontSize: 18 }} />
                  <Typography sx={(theme) => ({ marginLeft: theme.spacing(1) })}>{data.share}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={(theme) => ({ paddingRight: theme.spacing(1) })}>
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
