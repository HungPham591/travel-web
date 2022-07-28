import React from "react";
import { styled, Box, Typography, Link, Grid, Card } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import AdvancedLink from "../../atoms/AdvancedLink";
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
      backgroundColor: theme.palette.white,
      color: "#222222",
      padding: "5px 10px",
      borderRadius: "15px",
    },
  },
}));

export default function ItemCardHorizontal({ data }) {
  return (
    <Card>
      <Grid container minHeight="300px">
        <ImageContainer item lg={5} md={5} sm={12} xs={12} image={data.image}>
          <Box height="100%" color="white">
            <Box display="flex" p="20px 20px" justifyContent="flex-end">
              <Box
                sx={{ backgroundColor: "background.dark" }}
                borderRadius="3px"
                p="5px 10px"
              >
                <Typography variant="body2" color="#cccccc" fontWeight="600">
                  {data.label}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" mt="80px">
              <Link
                href={"/hotel-detail/" + data.id}
                className="readmore"
                display="none"
                variant="subtitle1"
              >
                Xem thêm
              </Link>
            </Box>
          </Box>
        </ImageContainer>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box p="30px" position="relative">
              <Box position="absolute" right="20px" top="15px">
                <HeartButton bgColor="rgb(18, 25, 33, 0.15)" color="#555555" />
              </Box>
              <Box fontSize="20px">
                <AdvancedLink href={"/hotel-detail/" + data.id} value={data.title} />
              </Box>
              <Box mb="20px">
                <LocationOnIcon sx={{ fontSize: "13px", marginRight: "5px" }} />
                <Typography
                  variant="body1"
                  fontWeight="300"
                  color="text.light"
                  display="inline"
                  marginTop="-5px"
                >
                  {data.address}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight="300"
                mb="24px"
                color="text.light"
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
                /khách
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              p="10px 20px"
              sx={{ borderTop: "1px solid rgb(18, 25, 33, 0.1)" }}
            >
              <Box display="flex" alignItems="center">
                <VisibilityIcon sx={{ fontSize: "20px" }} />
                <Typography fontWeight="300" ml="5px">
                  {data.view} lượt xem
                </Typography>
              </Box>
              <Box display="flex">
                <Box pr="8px">
                  <Typography
                    fontSize="12px"
                    fontWeight="500"
                    textAlign="right"
                  >
                    Tuyệt vời
                  </Typography>
                  <Typography fontSize="11px" fontWeight="300">
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
