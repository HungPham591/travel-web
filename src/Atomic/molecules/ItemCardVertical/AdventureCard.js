import * as React from "react";
import {
  styled,
  Card,
  CardContent,
  Link,
  Typography,
  Box,
} from "@mui/material";
import HahaIcon from "../../../icons/HahaIcon";
import ShareIcon from "@mui/icons-material/Share";
import Score from "../Score";
import OvalButton from "../../atoms/AdvancedButton/OvalButton";
import CustomBackgroundHearButton from "../HeartButton/CustomBackgroundHearButton";

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

const CardBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  borderTop: theme.shape.border,
}));

export default function ItemCardVertical({ data }) {
  return (
    <Card>
      <ImageContainer image={data.image}>
        <Box sx={{ color: "white" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
            <Box sx={{ backgroundColor: "background.dark", borderRadius: "3px", p: 1 }}>
              <Typography variant="body2" sx={{ color: "text.white", fontWeight: 600 }}  >
                {data.label}
              </Typography>
            </Box>
            <Box sx={{ zIndex: 5 }}>
              <CustomBackgroundHearButton bgColor="rgb(18, 25, 33, 0.5)" color="#ffffff" />
            </Box>
          </Box>
          <Box sx={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", top: 0, left: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                href={"/place-detail/" + data.id}
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
      <CardContent sx={{ m: 2, height: 280 }}>
        <Box sx={{ fontSize: 20, mb: 1 }}>
          <Link href={"/place-detail/" + data.id} sx={{ "&: hover": { color: "black" } }}>{data.title}</Link>
        </Box>
        <Typography variant="body1" sx={{ color: "text.main", fontWeight: 400 }}>
          {data.description}
        </Typography>
        <Link href={"/place-detail/" + data.id}>
          <Box sx={{ width: 142 }}>
            <OvalButton>Tham quan</OvalButton>
          </Box>
        </Link>
      </CardContent>
      <CardBottom>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <HahaIcon sx={{ fontSize: 20 }} />
            <Typography sx={{ ml: 1 }}>{data.like}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShareIcon sx={{ fontSize: 16 }} />
            <Typography ml="5px">{data.share}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 1 }}>
          <Box sx={{ textAlign: "right", mr: 1 }}>
            <Typography variant="subtitle1" sx={{ color: "text.light" }}>
              Tuyệt vời
            </Typography>
            <Typography sx={{ fontSize: 11 }}>{data.review} đánh giá</Typography>
          </Box>
          <Score score={data.score} />
        </Box>
      </CardBottom>
    </Card>
  );
}
