import React, { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner/ContainerPage";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/HotelCard";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import ImageBanner from "../../Atomic/organisms/ImageBanner";
import BeautySpotSection from "../../Atomic/organisms/BeautySpotSection";
import HelpperBox from "../../Atomic/organisms/HelpperBox";
import ItemCardHorizontal from "../../Atomic/molecules/ItemCardHorizontal/HotelCard";
import { hotelData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa tìm kiếm ...",
  secondInput: "Nhập địa điểm ...",
  selectBox: ["Tất cả danh mục", "Khách sạn", "Homestay", "Farmstay"],
  buttonValue: "Tìm kiếm",
};

function HotelPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Box sx={{ height: 450 }}>
        <HeroBanner
          title="KHÁCH SẠN & CHỖ Ở TẠI HÀ GIANG"
          image="/Images/banner/hotelBanner.jpg"
        />
      </Box>

      <Container>
        <FilterBox toggle={toggle} setToggle={setToggle} />
      </Container>

      <Box sx={{ bgcolor: "background.white", pt: 2, pb: 3 }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <SearchBox searchField={searchField} />
          </Box>

          <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
                {toggle ? 
                hotelData.map( data => 
                <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                  <ItemCardVertical data={data} />
                </Grid>
               ) :
               hotelData.map( data => 
               <Grid key={data.id} item sx={{ width: "100%" }}>
                   <ItemCardHorizontal data={data}  />
                </Grid>
               )
              }
            </Grid>
            <Box sx={{ width: 134, mx: "auto", mt: 3 }}>
              <OvalButton value="Xem thêm" />
            </Box>
          </Box>

          <Box sx={{ mb: 8 }}>
            <ImageBanner />
          </Box>

          <Box>
            <BeautySpotSection />
          </Box>
        </Container>
      </Box>

      <Container sx={{ p: 8 }}>
        <HelpperBox />
      </Container>
    </>
  );
}

export default React.memo(HotelPage);
