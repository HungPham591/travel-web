import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import HeroBanner from "../../Atomic/organisms/HeroBanner/ContainerPage";
import FilterBox from "../../Atomic/organisms/FilterBox";
import SearchBox from "../../Atomic/organisms/SearchBox";
import ItemCardVertical from "../../Atomic/molecules/ItemCardVertical/ProductCard";
import OvalButton from "../../Atomic/atoms/AdvancedButton/OvalButton";
import HelperBox from "../../Atomic/organisms/HelperBox";
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
      <Box sx={{ height: 450 }}>
        <HeroBanner
          title="ĐẶC SẢN ĐỊA PHƯƠNG HÀ GIANG"
          image="/Images/banner/productBanner.jpg"
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

          <Box>
            <Grid container spacing={3}>
              {toggle
                ? productData.map((data) => (
                    <Grid key={data.id} item lg={4} md={4} sm={6} xs={12}>
                      <ItemCardVertical data={data} />
                    </Grid>
                  ))
                : productData.map((data) => (
                    <Grid key={data.id} item sx={{ width: "100%" }}>
                      <ItemCardHorizontal data={data} />
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
export default React.memo(ProductPage);
