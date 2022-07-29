import React from "react";
import { styled, Box, Typography, Link, Grid, Card } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import AdvancedLink from "../../atoms/AdvancedLink";
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
          <Box sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", p: 3, justifyContent: "flex-end" }}>
              <Box sx={{ backgroundColor: "background.dark", borderRadius: "3px", p: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "600", color: "text.white" }}>
                  {data.label}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 9 }}>
              <Link
                href={"/product-detail/" + data.id}
                className="readmore"
                variant="subtitle1"
                sx={{ display: "none", fontSize: 12 }}
              >
                Xem thêm
              </Link>
            </Box>
          </Box> 
        </ImageContainer>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column",justifyContent: "space-between", height: "100%" }}>
            <Box sx={{ p: 3, position: "relative" }}>
              <Box sx={{ position: "absolute", right: 30, top: 15 }}>
                <HeartButton bgColor="rgb(18, 25, 33, 0.15)" color="#555555" />
              </Box>
              <Box sx={{ fontSize: 20, mb: 1 }}>
                <AdvancedLink href={"/product-detail/" + data.id} value={data.title} />
              </Box>
              <Typography variant="body1" sx={{ fontWeight: "300", pb: 1 }}>
                {data.description}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "300", color: "text.light" }}>
                Giá
                <Typography sx={{ color: "green", display: "inline", ml: 1 }}>
                  {data.price}₫
                </Typography>
                / {data.unit}
              </Typography>
            </Box>
            <Box sx={{ borderTop: "shape.border", display: "flex", justifyContent: "space-between", px: 3, py: 1 }} >
              <Box display="flex" alignItems="center">
                <VisibilityIcon sx={{ fontSize: "20px" }} />
                <Typography sx={{ fontWeight: "300", ml: 1 }}>
                  {data.view} lượt xem
                </Typography>
              </Box>
              <Box sx={{ display:"flex" }}>
                <Box sx={{ pr: 1 }}>
                  <Typography sx={{ fontSize: 12, textAlign: "right"}}>
                    Tuyệt vời
                  </Typography>
                  <Typography sx={{ fontSize: 11,  fontWeight: 300 }}>
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
