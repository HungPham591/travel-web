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
      backgroundColor: theme.palette.white,
      color: "#222222",
      padding: "5px 10px",
      borderRadius: "15px",
    },
  },
}));

export default function ItemCardVertical({ data }) {
  return (
    <Card>
      <ImageContainer image={data.image}>
        <Box height="100%" color="white">
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
                href={"/product-detail/" + data.id}
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
      <Box>
        <Box height="300px" p="25px">
          <Box fontSize="20px">
            <AdvancedLink
              href={"/product-detail/" + data.id}
              value={data.title}
            />
          </Box>
          <Typography
            variant="body1"
            fontWeight="300"
            mb="24px"
            color="text.light"
            mt="5px"
          >
            {data.description}
          </Typography>
          <Typography variant="body1" fontWeight="300" color="text.light">
            Giá từ
            <Typography
              color="green"
              fontWeight="600"
              display="inline"
              ml="5px"
            >
              {data.price}₫
            </Typography>
            / {data.unit}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" p="15px 20px" sx={{ borderTop: "2px solid rgb(18, 25, 33, 0.1 )", }}>
          <Box display="flex" alignItems="center" marginTop="5px">
            <VisibilityIcon sx={{ fontSize: "20px" }} />
            <Typography fontWeight="300" ml="5px">
              {data.view} lượt xem
            </Typography>
          </Box>
          <Box display="flex" color="text.light">
            <Box mr="8px">
              <Typography
                variant="subtitle1"
                color="text.light"
                fontWeight="500"
                textAlign="right"
              >
                Tuyệt vời
              </Typography>
              <Typography fontSize="11px" fontWeight="300">
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
