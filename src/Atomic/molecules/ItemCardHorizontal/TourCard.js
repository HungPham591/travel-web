import React from "react";
import { styled, Box, Typography, Link, Grid, Card, Button } from "@mui/material";
import Score from "../../molecules/Score";
import CustomBackgroundHearButton from "../HeartButton/CustomBackgroundHearButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
                  Xem th??m
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
                <Link href={"/tour-detail/" + data.id} sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: 20, "&: hover": { color: theme.palette.common.black } })}>{data.title}</Link>
              </Box>
              <Typography sx={{ fontWeight: 300, color: "text.light", mt: 1 }} >
                M?? tour:
                <Typography sx={{ fontWeight: 600, display: "inline", ml: 1 }}>
                  {data.tourCode}
                </Typography>
              </Typography>
              <Typography sx={{ fontWeight: 300, mb: 3, color: "text.light" }}>
                N??i kh???i h??nh:
                <Typography sx={{ fontWeight: 600, display: "inline", ml: 1 }}>
                  {data.startingGate}
                </Typography>
              </Typography>
              <Typography sx={{ fontWeight: 300, color: "text.light" }}>
                Gi?? t???
                <Typography sx={{ color: "common.green", fontWeight: 600, display: "inline", ml: 1 }}>
                  {data.price} ??
                </Typography>
                /kh??ch
              </Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid rgb(18, 25, 33, 0.1)", display: "flex", justifyContent: "space-between", px: 3, py: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTimeIcon sx={{ fontSize: "16px" }} />
                <Typography sx={{ fontWeight: 300, ml: 1 }}>
                  {data.startTime} - {data.period.days}N{data.period.nights}??
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ pr: 1 }}>
                  <Typography sx={{ fontSize: 12, textAlign: "right" }}>
                    Tuy???t v???i
                  </Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                    {data.review} ????nh gi??
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
