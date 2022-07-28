import React from "react";
import { styled, Typography, Box, Link } from "@mui/material";
import RectangleButton from "../../atoms/Button";

const Container = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(230deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%), url("/Images/VRBanner.jpg")`,
  color: theme.palette.white,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));

const ResponsiveBox = styled("div")(({ theme }) => ({
  padding: "99px 60px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 30px",
  },
}));



export default function ImageBanner() {
  return (
    <Container>
      <Box sx={{ backgroundColor: "rgb(18, 25, 33, 0.3)" }}>
        <ResponsiveBox sx={{ padding: "99px 60px" }}>
          <Box mb="30px">
          <Typography variant="body1" color="white" mb="15px">
            TRẢI NGHIỆM DU LỊCH THỰC TẾ ẢO
          </Typography>
          <Typography variant="h2">
            Khám phá Hà Giang
            <br />
            với công nghệ thực tế ảo cực kỳ thú vị
          </Typography>
          <Typography variant="h3" color="white">
            Khám phá những địa điểm du lịch Hà Giang dễ dàng ngay tại nhà.
          </Typography>
          </Box>
          <Link href="/adventure">
          <Box width="150px">
            <RectangleButton value="Khám phá ngay" />
          </Box>
          </Link>
        </ResponsiveBox>
      </Box>
    </Container>
  );
}
