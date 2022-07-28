import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner2/ContainerPage";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/TourCard";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import ImageBanner from "../../Atomic/organisms/ImageBanner";
import BeautySpotSection from "../../Atomic/organisms/BeautySpotSection";
import HelpperBox from "../../Atomic/organisms/HelpperBox";
import ItemCardHorizontal from "../../Atomic/molecules/ItemCardHorizontal/TourCard";
import { tourData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa tìm kiếm ...",
  secondInput: "Nhập địa điểm ...",
  selectBox: ["Tất cả danh mục", "Tour trọn gói", "Tour gia đình", "Tour lẻ"],
  buttonValue: "Tìm Tour",
};

function TourPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Box height="450px">
        <HeroBanner
          title="TOUR DU LỊCH HÀ GIANG"
          image="/Images/tourBanner.webp"
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

          <Box mb="100px">
            <Grid container spacing={3}>
                {toggle ? 
                tourData.map( data => 
                <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                  <ItemCardVertical data={data} />
                </Grid>
               ) :
               tourData.map( data => 
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
    </div>
  );
}

export default React.memo(TourPage);
