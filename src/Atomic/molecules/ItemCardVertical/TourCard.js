import * as React from "react";
import { styled, Card, Link, Typography, Box } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
    <Card
      sx={{
        boxShadow: "1px 1px 10px rgb(18, 25, 33, 0.2 )",
      }}
    >
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
                href={"/tour-detail/" + data.id}
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
        <Box height="250px" p="25px">
          <Box fontSize="20px">
            <AdvancedLink href={"/tour-detail/" + data.id} value={data.title} />
          </Box>
          <Typography
            variant="body1"
            fontWeight="300"
            color="text.light"
            mt="10px"
          >
            Mã tour:
            <Typography fontWeight="600" display="inline" ml="5px">
              {data.tourCode}
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            fontWeight="300"
            mb="24px"
            color="text.light"
          >
            Nơi khởi hành:
            <Typography fontWeight="600" display="inline" ml="5px">
              {data.startingGate}
            </Typography>
          </Typography>
          <Typography variant="body1" fontWeight="300" color="text.light">
            Giá từ
            <Typography
              color="green"
              fontWeight="600"
              display="inline"
              ml="5px"
            >
              {data.price} đ
            </Typography>
            /khách
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          p="20px 15px"
          sx={{ borderTop: "2px solid rgb(18, 25, 33, 0.1 )" }}
        >
          <Box display="flex" alignItems="center">
            <AccessTimeIcon sx={{ fontSize: "16px" }} />
            <Typography fontWeight="300" ml="5px">
              {data.startTime} - {data.period.days}N{data.period.nights}Đ
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
