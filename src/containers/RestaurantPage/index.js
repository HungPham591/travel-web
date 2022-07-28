import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner2/ContainerPage";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/RestaurantCard";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import HelpperBox from "../../Atomic/organisms/HelpperBox";
import ItemCardHorizontal from "../../Atomic/molecules/ItemCardHorizontal/RestaurantCard";
import { restaurantData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa tìm kiếm ...",
  secondInput: "Nhập địa điểm ...",
  selectBox: ["Tất cả danh mục", "Nhà hàng", "Bar", "Coffee Bars"],
  buttonValue: "Tìm kiếm",
};

function RestaurantPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Box height="450px">
        <HeroBanner
          title="ĐỊA ĐIỂM ĂN UỐNG TẠI HÀ GIANG"
          image="/Images/restaurantBanner.jpg"
        />
      </Box>

      <Container>
        <FilterBox toggle={toggle} setToggle={setToggle} />
      </Container>

      <Box bgcolor="background.white" pt="15px" pb="65px">
        <Container>
          <Box display="flex" justifyContent="center" mb="30px">
            <SearchBox searchField={searchField} />
          </Box>

          <Box>
            <Grid container spacing={3}>
              {toggle
                ? restaurantData.map((data) => (
                    <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                      <ItemCardVertical data={data} />
                    </Grid>
                  ))
                : restaurantData.map((data) => (
                    <Grid key={data.id} item width="100%">
                      <ItemCardHorizontal data={data} />
                    </Grid>
                  ))}
            </Grid>
            <Box width="134px" mx="auto" mt="20px">
              <OvalButton value="Xem thêm" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container sx={{ padding: "60px" }}>
        <HelpperBox />
      </Container>
    </>
  );
}
export default React.memo(RestaurantPage);
