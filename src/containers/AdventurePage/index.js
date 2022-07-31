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
    image: "/Images/banner/parallaxBg2.jpg",
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
      <Box sx={{ position: "relative", height: 650, overflow: "hidden" }}>
        <Iframe
          src="https://www.youtube.com/embed/BU5kFRM9Sa8?rel=0&autoplay=1&mute=1&loop=1&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="1"
        />
        <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
          <Box
            sx={{ 
              backgroundColor: "background.main", 
              height: "100%",
              color: "white",
              align: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Container>
              <Typography sx={{ color: "white", mb: 2 }}>
                THAM QUAN THỰC TẾ ẢO 3D
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                CÁC ĐỊA DANH NỔI TIẾNG HÀ GIANG
              </Typography>
              <Typography
                variant="h4"
                sx={{ 
                  maxWidth: 680,
                  fontWeight: 300,
                  color: "white",
                  mb: 4 
                }}
              >
                Khám phá những địa danh nổi tiếng của Hà Giang qua không gian
                thực tế ảo 3D vô cùng hấp dẫn & thú vị.
              </Typography>
              <Link href="/place-detail">
                <Box sx={{ width: 180 }}>
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

      <Box sx={{ bgcolor: "background.white", pb: 13, pt: 2 }}>
        <Container>
          <Box sx={{ px: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <SearchBox searchField={searchField} />
            </Box>

            <Box sx={{ mb: 13 }}>
              <Grid container spacing={3}>
                {toggle
                  ? placeData.map((data) => (
                      <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                        <ItemCardVertical data={data} />
                      </Grid>
                    ))
                  : placeData.map((data) => (
                      <Grid key={data.id} item sx={{ width: "100%" }}>
                        <ItemCardHorizontal data={data} />
                      </Grid>
                    ))}
              </Grid>
              <Box sx={{ width: 134, mt: 3, m: "auto" }}>
                <OvalButton value="Xem thêm" />
              </Box>
            </Box>

            <Box sx={{ mb: 8 }}>
              <ImageBanner />
            </Box>

            <Box>
              <ProductSection content={content.tour} data={tourData} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ height: 650 }}>
        <ParallaxBox content={content.ParallaxBox} />
      </Box>
    </>
  );
}

export default React.memo(AdventurePage);
