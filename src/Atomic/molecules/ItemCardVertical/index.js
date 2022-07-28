import * as React from "react";
import {
  styled,
  Card,
  CardContent,
  Link,
  Typography,
  Box,
} from "@mui/material";
import HahaIcon from "../../../icons/hahaIcon";
import ShareIcon from "@mui/icons-material/Share";
import Score from "../../molecules/Score";
import OvalButton from "../../atoms/Button/OvalButton";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
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
      backgroundColor: theme.palette.white,
      color: "#222222",
      padding: "5px 10px",
      borderRadius: "15px",
    },
  },
}));

const CardBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  borderTop: "2px solid rgb(18, 25, 33, 0.1 )",
}));

export default function ItemCardVertical({ data }) {
  return (
    <Card>
      <ImageContainer image={data.image}>
        <Box color="white">
          <Box display="flex" p="20px 20px" justifyContent="space-between">
            <Box
              sx={{ backgroundColor: "background.dark" }}
              borderRadius="3px"
              p="5px 10px"
            >
              <Typography variant="body2" color="#cccccc" fontWeight="600">
                {data.label}
              </Typography>
            </Box>
            <Box zIndex="5">
              <HeartButton bgColor="rgb(18, 25, 33, 0.5)" color="#ffffff" />
            </Box>
          </Box>
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
            top="0"
            left="0"
          >
            <Box display="flex" justifyContent="center">
              <Link
                href={"/place-detail/" + data.id}
                className="readmore"
                display="none"
                variant="subtitle1"
              >
                Xem thêm
              </Link>
            </Box>
          </Box>
        </Box>
      </ImageContainer>
      <CardContent sx={{ margin: "0px 15px 15px 15px", height: "280px" }}>
        <Box fontSize="20px">
          <AdvancedLink href={"/place-detail/" + data.id} value={data.title} />
        </Box>
        <Typography variant="body1" color="text" fontWeight="400">
          {data.description}
        </Typography>
        <Link href={"/place-detail/" + data.id}>
          <Box width="142px">
            <OvalButton value="Tham quan" />
          </Box>
        </Link>
      </CardContent>
      <CardBottom>
        <Box display="flex" mt="20px">
          <Box display="flex" alignItems="center" mr="19px">
            <HahaIcon fontSize="30px" />
            <Typography ml="5px">{data.like}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ShareIcon fontSize="20px" />
            <Typography ml="5px">{data.share}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Box textAlign="right" mr="10px">
            <Typography
              variant="subtitle1"
              fontWeight="500px"
              color="text.light"
            >
              Tuyệt vời
            </Typography>
            <Typography fontSize="11px">{data.review} đánh giá</Typography>
          </Box>
          <Score score={data.score} />
        </Box>
      </CardBottom>
    </Card>
  );
}
