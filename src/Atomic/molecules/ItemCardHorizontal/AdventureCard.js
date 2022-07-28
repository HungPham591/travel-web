import React from "react";
import { styled, Box, Typography, Link, Grid, Card } from "@mui/material";
import Score from "../../molecules/Score";
import HeartButton from "../../molecules/HeartButton/BlackBackground";
import HahaIcon from "../../../icons/hahaIcon";
import ShareIcon from "@mui/icons-material/Share";

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
                href={"/place-detail/" + data.id}
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
              <Link
                href={"/place-detail/" + data.id}
                variant="h5"
                pb="8px"
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: "30px",
                }}
              >
                {data.title}
              </Link>
              <Typography variant="body1" fontWeight="300" pb="10px">
                {data.description}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              p="10px 20px"
              sx={{ borderTop: "1px solid rgb(18, 25, 33, 0.1)" }}
            >
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
                    350 Đánh giá
                  </Typography>
                </Box>
                <Box>
                  <Score score="8.9" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
