import React from "react";
import { styled, Box, Typography, Link, Grid, Card, Button } from "@mui/material";
import Score from "../../molecules/Score";
import CustomBackgroundHearButton from "../HeartButton/CustomBackgroundHearButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
      borderRadius: theme.spacing(4)
    },
  },
}));

export default function ItemCardHorizontal({ data }) {
  return (
    <Card>
      <Grid container sx={{ minHeight: 300 }}>
        <ImageContainer item lg={5} md={5} sm={12} xs={12} image={data.image}>
          <Box sx={{ height: "100%", position: "relative" }}>
            <Box sx={(theme) => ({ display: "flex", padding: theme.spacing(3), justifyContent: "flex-end" })}>
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
                <Link href={"/hotel-detail/" + data.id} sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: 20, "&: hover": { color: theme.palette.common.black } })}>{data.title}</Link>
              </Box>
              <Box sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
                <LocationOnIcon sx={(theme) => ({ fontSize: 13, marginRight: theme.spacing(1) })} />
                <Typography sx={(theme) => ({ fontWeight: 300, color: theme.palette.text.light, display: "inline", marginTop: theme.spacing(1) })}>
                  {data.address}
                </Typography>
              </Box>
              <Typography sx={(theme) => ({ fontWeight: 300, marginBottom: theme.spacing(3), color: theme.palette.text.light })}>
                {data.description}
              </Typography>
              <Typography sx={(theme) => ({ fontWeight: 300, color: theme.palette.text.light })}>
                Giá từ
                <Typography sx={(theme) => ({ color: theme.palette.common.green, fontWeight: 600, display: "inline", marginLeft: theme.spacing(1) })}>
                  {data.price}₫
                </Typography>
                /khách
              </Typography>
            </Box>
            <Box sx={(theme) => ({ borderTop: theme.shape.border, display: "flex", justifyContent: "space-between", paddingX: theme.spacing(2), paddingY: theme.spacing(1) })}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <VisibilityIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontWeight: 300, ml: 1 }}>
                  {data.view} lượt xem
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ pr: 1 }}>
                  <Typography sx={{ fontSize: 12, textAlign: "right" }}>
                    Tuyệt vời
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                    {data.review} Đánh giá
                  </Typography>
                </Box>
                <Box>
                  <Score score={data.score} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
