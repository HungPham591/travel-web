import React from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner/ContainerPage";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/WishListCard";
import OvalButton from "../../Atomic/atoms/AdvancedButton/OvalButton";
import HelperBox from "../../Atomic/organisms/HelperBox";
import { tourData } from "../../api/fakeData";

function WishListPage() {
  return (
    <>
      <Box sx={{ height: 450 }}>
        <HeroBanner
          title="Trang yêu thích"
          image="/Images/banner/tourBanner.webp"
        />
      </Box>

      <Box sx={{ bgcolor: "background.white", pt: 6, pb: 8 }}>
        <Container>
          <Box>
          <Grid container spacing={3}>
              {tourData.map((data) => (
                <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                  <ItemCardVertical data={data} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ width: 134, mx: "auto", mt: 2 }}>
              <OvalButton value="Xem thêm" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container sx={{ p: 8 }}>
        <HelperBox />
      </Container>
    </>
  );
}

export default React.memo(WishListPage);
