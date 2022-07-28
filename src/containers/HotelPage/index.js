import React, { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner2/ContainerPage";
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
      <Box height="450px">
        <HeroBanner
          title="KHÁCH SẠN & CHỖ Ở TẠI HÀ GIANG"
          image="/Images/hotelBanner.jpg"
        />
      </Box>

      <Container>
        <FilterBox toggle={toggle} setToggle={setToggle} />
      </Container>

      <Box bgcolor="background.white" pt="15px" pb="25px">
        <Container>
          <Box display="flex" justifyContent="center" mb="30px">
            <SearchBox searchField={searchField} />
          </Box>

          <Box mb="30px">
          <Grid container spacing={3}>
                {toggle ? 
                hotelData.map( data => 
                <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                  <ItemCardVertical data={data} />
                </Grid>
               ) :
               hotelData.map( data => 
               <Grid key={data.id} item width="100%">
                   <ItemCardHorizontal data={data}  />
                </Grid>
               )
              }
            </Grid>
            <Box width="134px" mx="auto" mt="20px">
              <OvalButton value="Xem thêm" />
            </Box>
          </Box>

          <Box mb="140px">
            <ImageBanner />
          </Box>

          <Box>
            <BeautySpotSection />
          </Box>
        </Container>
      </Box>

      <Container sx={{ padding: "60px" }}>
        <HelpperBox />
      </Container>
    </>
  );
}

export default React.memo(HotelPage);
