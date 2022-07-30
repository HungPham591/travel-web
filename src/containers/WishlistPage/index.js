import React from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner/ContainerPage";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/WishListCard";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import HelpperBox from "../../Atomic/organisms/HelpperBox";
import { tourData } from "../../api/fakeData";

function WishListPage() {
  return (
    <>
      <Box sx={{ height: 450 }}>
        <HeroBanner
          title="Trang yêu thích"
          image="http://icdn.dantri.com.vn/zoom/1200_630/2017/ngam-binh-minh-dep-vn-3-1508582820854.jpg"
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
        <HelpperBox />
      </Container>
    </>
  );
}

export default React.memo(WishListPage);
