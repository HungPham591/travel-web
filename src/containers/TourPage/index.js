import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner/ContainerPage";
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
      <Box sx={{ height: 450 }}>
        <HeroBanner
          title="TOUR DU LỊCH HÀ GIANG"
          image="/Images/banner/tourBanner.webp"
        />
      </Box>

      <Container>
        <FilterBox toggle={toggle} setToggle={setToggle} />
      </Container>

      <Box sx={{ bgcolor: "background.white", pt: 2, pb: 8 }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <SearchBox searchField={searchField} />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3}>
                {toggle ? 
                tourData.map( data => 
                <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                  <ItemCardVertical data={data} />
                </Grid>
               ) :
               tourData.map( data => 
               <Grid key={data.id} item sx={{ width: "100%" }}>
                   <ItemCardHorizontal data={data}  />
                </Grid>
               )
              }
            </Grid>
            <Box sx={{ width: 134, mx: "auto", mt: 2 }}>
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
    </div>
  );
}

export default React.memo(TourPage);
