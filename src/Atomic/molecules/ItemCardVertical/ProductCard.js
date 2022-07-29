import * as React from "react";
import {
  styled,
  Card,
  Link,
  Typography,
  Box,
} from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
                href={"/product-detail/" + data.id}
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
        <Box sx={{ height: 300, p: 3 }}>
          <Box sx={{ fontSize: 20, mb: 1 }}>
            <AdvancedLink
              href={"/product-detail/" + data.id}
              value={data.title}
            />
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
    </Card>
  );
}
