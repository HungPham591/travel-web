import React from "react";
import { Typography, Box, Container, styled } from "@mui/material";
import BeautySpotSection from "../../Atomic/organisms/BeautySpotSection";
import ProductSection from "../../Atomic/organisms/ProductSection";
import ImageBanner from "../../Atomic/organisms/ImageBanner";
import NewsSection from "../../Atomic/organisms/NewsSection";
import ParallaxBox from "../../Atomic/organisms/ParallaxBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import { tourData, hotelData, restaurantData, productData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa tìm kiếm ...",
  secondInput: "Nhập địa điểm tìm kiếm ...",
  selectBox: [
    "Tất cả danh mục",
    "Tour du lịch",
    "Khách sạn & chỗ ở",
    "Địa điểm ăn uống",
    "Đặc sản địa phương",
    "Tham quan",
  ],
  buttonValue: "Tìm kiếm",
};

const content = {
  tour: {
    title: "Các Tour Khám Phá Hà Giang",
    description: "Các tour du lịch khám phá Hà Giang phổ biến nhất.",
  },
  hotel: {
    title: "Khách sạn và Chỗ ở",
    description: "Khách sạn và chỗ ở phổ biến nhất tại Hà Giang.",
  },
  restaurant: {
    title: "Địa Điểm Ăn Uống",
    description: "Khám phá ẩm thực đặc sắc & độc đáo của Hà Giang.",
  },
  product: {
    title: "Đặc Sản Địa Phương",
    description: "Sản phẩm, đặc sản địa phương hấp dẫn của Hà Giang.",
  },
  ParallaxBox: {
    title: "Tham Quan Không Gian Thực Tế Ảo 3D Ở Đồng Văn - Mèo Vạc",
    image: "/Images/banner/parallaxBg1.jpg",
    description: "Bao quanh đèo là trời, mây và núi non nên du khách có thể thong thả ngắm cảnh, chụp ảnh. Ở chân đèo, bạn ghé thăm Bảo tàng con đường Hạnh Phúc, tìm hiểu về lịch sử xây dựng đầy khó khăn của quốc lộ 4C, từ thành phố Hà Giang đi Đồng Văn, Mèo Vạc.",
    button: "Tham quan 3D ngay",
  }
};




const Iframe = styled("iframe")(({ theme }) => ({
    position: "fixed",
    top: "-100px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    inset: "0px",
    width: "100%",
    height: "100%",
    minWidth: "1300px",
    minHeight: "800px",
    backfaceVisibility: "hidden",
    willChange: "transform, opacity",
    zIndex: "-20",
    transform: "scale(1.2)",
    [theme.breakpoints.down("md")]: {
      top: "-200px",
    },
    [theme.breakpoints.up("md")]: {
      top: "-95px",
    }
}));

function HomePage() {
  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", minHeight: 650, width: "100%" }}>
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
              <Box sx={{ px: 1 }}>
                <Typography
                  variant="h1"
                  sx={{ 
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 1
                   }}
                >
                  THAM QUAN & KHÁM PHÁ HÀ GIANG
                </Typography>
                <Typography variant="h6" sx={{ color: "white", textAlign: "center", mb: 2 }}>
                  Du lịch Hà Giang với công nghệ 4.0 & thực tế ảo 3D cực kỳ hấp
                  dẫn - Tất Cả Trong Một
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <SearchBox searchField={searchField} />
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "background.white", py: 12 }}>
        <Container>
          <Box sx={{ mb: 16 }}>
            <BeautySpotSection />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 6 }}>
            <ProductSection content={content.tour} data={tourData} />
            <ProductSection content={content.hotel} data={hotelData} />
            <ProductSection content={content.restaurant} data={restaurantData} />
            <ProductSection content={content.product} data={productData} />
          </Box>

          <Box>
            <ImageBanner />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "white", py: 10 }}>
        <Container>
          <NewsSection />
        </Container>
      </Box>

      <Box sx={{ height: 650 }}>
        <ParallaxBox content={content.ParallaxBox} />
      </Box>
    </>
  );
}

export default React.memo(HomePage);
