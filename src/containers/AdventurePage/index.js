import React, { useState } from "react";
import { Typography, Grid, Box, Link, Container, styled } from "@mui/material";
import RectangleButton from "../../Atomic/atoms/Button";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical";
import ParallaxBox from "../../Atomic/organisms/ParallaxBox";
import ImageBanner from "../../Atomic/organisms/ImageBanner";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import ProductSection from "../../Atomic/organisms/ProductSection";
import ItemCardHorizontal from "../../Atomic/molecules/ItemCardHorizontal/AdventureCard";
import { placeData, tourData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa ...",
  secondInput: "Nhập địa điểm ...",
  selectBox: [
    "Tất cả danh mục",
    "Danh lam thắng cảnh",
    "Bảo tàng",
    "Di tích lịch sử",
    "Khác",
  ],
  buttonValue: "Tìm địa danh",
};

const content = {
  tour: {
    title: "Các Tour Khám Phá Hà Giang",
    description: "Các tour du lịch khám phá Hà Giang phổ biến nhất.",
  },
  ParallaxBox: {
    title: "Mùa hoa tam giác mạch đẹp say lòng người tại Hà Giang",
    image: "/Images/parallaxBg2.jpg",
    description:
      "Khác với hoa tam giác mạch ở các nơi khác, ở Hà Giang loại hoa này có màu phơn phớt hồng như đôi má của người thiếu nữ. Hoa mang vẻ đẹp dân dã, mọc trải dài thành cánh đồng, chênh vênh trên những mỏm đá...",
    button: "Tham quan 3D ngay",
  },
};

const Iframe = styled("iframe")(({ theme }) => ({
  position: "absolute",
  top: "-100px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  inset: "0px",
  width: "100%",
  height: "100%",
  minWidth: "1300px",
  minHeight: "980px",
  backfaceVisibility: "hidden",
  willChange: "transform, opacity",
  zIndex: "-1",
  transform: "scale(1.2)",
  [theme.breakpoints.down("md")]: {
    top: "-150px",
  },
  [theme.breakpoints.up("md")]: {
    top: "-90px",
  },
}));

function AdventurePage() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Box position="relative" height="650px" overflow="hidden">
        <Iframe
          src="https://www.youtube.com/embed/BU5kFRM9Sa8?rel=0&autoplay=1&mute=1&loop=1&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="1"
        />
        <Box position="absolute" top="0px" bottom="0px" left="0px" right="0px">
          <Box
            height="100%"
            color="white"
            align="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: "background.main" }}
          >
            <Container>
              <Typography color="white" mb="15px">
                THAM QUAN THỰC TẾ ẢO 3D
              </Typography>
              <Typography variant="h1" fontWeight="700">
                CÁC ĐỊA DANH NỔI TIẾNG HÀ GIANG
              </Typography>
              <Typography
                variant="h4"
                maxWidth="680px"
                fontWeight="300"
                color="white"
                mb="30px"
              >
                Khám phá những địa danh nổi tiếng của Hà Giang qua không gian
                thực tế ảo 3D vô cùng hấp dẫn & thú vị.
              </Typography>
              <Link href="/place-detail">
                <Box width="179px">
                  <RectangleButton value="Khám phá ngay!" />
                </Box>
              </Link>
            </Container>
          </Box>
        </Box>
      </Box>

      {/* Filter section */}

      <Container>
        <FilterBox toggle={toggle} setToggle={setToggle} />
      </Container>

      <Box bgcolor="background.white" pb="100px" pt="15px">
        <Container>
          <Box px="6px">
            <Box display="flex" justifyContent="center" mb="30px">
              <SearchBox searchField={searchField} />
            </Box>

            <Box mb="100px">
              <Grid container spacing={3}>
                {toggle
                  ? placeData.map((data) => (
                      <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                        <ItemCardVertical data={data} />
                      </Grid>
                    ))
                  : placeData.map((data) => (
                      <Grid key={data.id} item width="100%">
                        <ItemCardHorizontal data={data} />
                      </Grid>
                    ))}
              </Grid>
              <Box width="134px" mx="auto" mt="20px">
                <OvalButton value="Xem thêm" />
              </Box>
            </Box>

            <Box mb="60px">
              <ImageBanner />
            </Box>

            <Box>
              <ProductSection content={content.tour} data={tourData} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box height="650px">
        <ParallaxBox content={content.ParallaxBox} />
      </Box>
    </>
  );
}

export default React.memo(AdventurePage);
