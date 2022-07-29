import * as React from "react";
import { styled, Card, Link, Typography, Box } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AdvancedLink from "../../atoms/AdvancedLink";

const ImageContainer = styled(Box)(({ theme, image }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "105%",
  position: "relative",
  aspectRatio: "3/2",
  transition: "0.1s linear",
  "&: hover": {
    backgroundSize: "100%",
    "& .readmore": {
      display: "block",
      backgroundColor: theme.palette.background.white,
      color: theme.palette.text.main,
      padding: theme.spacing(1),
      borderRadius: theme.spacing(3),
    },
  },
}));

export default function ItemCardVertical({ data }) {
  return (
    <Card>
      <ImageContainer image={data.image}>
        <Box sx={{ color: "white" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Box sx={{ backgroundColor: "background.dark", borderRadius: "3px", p: 1 }}>
              <Typography variant="body2" sx={{ color: "text.white", fontWeight: 600 }}>
                {data.label}
              </Typography>
            </Box>
            <Box sx={{ zIndex: 5 }}>
              <HeartButton bgColor="rgb(18, 25, 33, 0.5)" color="#ffffff" />
            </Box>
          </Box>
          <Box sx={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", top: 0, left: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                href={"/restaurant-detail/" + data.id}
                className="readmore"
                variant="subtitle1"
                sx={{ display: "none" }}
              >
                Xem thêm
              </Link>
            </Box>
          </Box>
        </Box>
      </ImageContainer>
      <Box>
        <Box sx={{ height: 270, p: 3 }}>
          <Box sx={{ fontSize: 20, mb: 1 }}>
            <AdvancedLink href={"/restaurant-detail/" + data.id} value={data.title} />
          </Box>
          <Box sx={{ mb: 3 }}>
            <LocationOnIcon sx={{ fontSize: 13, mr: 1 }} />
            <Typography variant="body1" sx={{ fontWeight: 300, color: "text.light", display: "inline"}} >
              {data.address}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: 300, mb: 3, color: "text.light" }}>
            {data.description}
          </Typography>
        </Box>
        <Box sx={{ borderTop: "2px solid rgb(18, 25, 33, 0.1 )", display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <VisibilityIcon sx={{ fontSize: 20 }} />
            <Typography sx={{ fontSfontWeight: 300, ml: 1 }}>
              {data.view} lượt xem
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: "text.light" }}>
            <Box sx={{ mr: 1 }}>
              <Typography sx={{ fontSize: 12, textAlign: "right" }}>
                Tuyệt vời
              </Typography>
              <Typography sx={{ fontSize: 11, fontWeight: 300 }}>
                {data.review} đánh giá
              </Typography>
            </Box>
            <Score score={data.score} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
