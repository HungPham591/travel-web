import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { Pagination, Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCardVertical from "../../molecules/ItemCardVertical";
import CenterDivider from "../../molecules/Divider/CenterDivider";
import OvalButton from "../../atoms/Button/OvalButton";
import { placeData } from "../../../api/fakeData";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled(Box)(({ theme }) => ({
  "& .swiper-pagination-bullet": {
    width: 13,
    height: 13,
    "--swiper-pagination-color": "#FC5B62",
  },
}));

export default function BeautySpotSection() {
  return (
    <Wrapper>
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <CenterDivider />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2">
            Các Địa Danh Nổi Tiếng Hà Giang - Tham Quan Thực Tế Ảo 3D
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 300 }}>
            Khám phá những địa danh nổi tiếng của Hà Giang qua không gian thực
            tế ảo 3D vô cùng hấp dẫn & thú vị.
          </Typography>
        </Box>
      </Box>
      <Swiper
        modules={[Pagination, Keyboard, Mousewheel]}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true
        }}
        mousewheel={true}
        className="mySwiper"
        spaceBetween={10}
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={2}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          2560: {
            slidesPerView: 4,
          },
        }}
      >
        {placeData.map((data) => (
          <SwiperSlide key={data.id}>
            {({ isActive }) =>
            (isActive ? (
              <Box sx={{ transform: "scale(0.8)" }}>
                <ItemCardVertical data={data} />
              </Box>
            ) : (
              <Box sx={{ opacity: "0.3", transform: "scale(0.7)" }}>
                <ItemCardVertical data={data} />
              </Box>
            ))
            }
          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{  width: 134 }}>
          <OvalButton value="Xem tất cả" />
        </Box>
      </Box>
    </Wrapper>
  );
}
