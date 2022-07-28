import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner2/ContainerPage";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/ProductCard";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";
import HelpperBox from "../../Atomic/organisms/HelpperBox";
import ItemCardHorizontal from "../../Atomic/molecules/ItemCardHorizontal/ProductCard";
import { productData } from "../../api/fakeData";

const searchField = {
  firstInput: "Nhập từ khóa tìm kiếm ...",
  secondInput: "nhập địa điểm ...",
  selectBox: ["Tất cả danh mục", "Nông sản", "Thực phẩm", "Quà biếu"],
  buttonValue: "Tìm sản phẩm",
};

function ProductPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Box height="450px">
        <HeroBanner
          title="ĐẶC SẢN ĐỊA PHƯƠNG HÀ GIANG"
          image="/Images/productBanner.jpg"
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
                ? productData.map((data) => (
                    <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                      <ItemCardVertical data={data} />
                    </Grid>
                  ))
                : productData.map((data) => (
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
export default React.memo(ProductPage);
