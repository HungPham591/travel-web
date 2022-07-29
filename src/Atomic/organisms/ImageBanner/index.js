import React from "react";
import { styled, Typography, Box, Link } from "@mui/material";
import RectangleButton from "../../atoms/Button";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(230deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%), url("/Images/VRBanner.jpg")`,
  color: theme.palette.white,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(12)} ${theme.spacing(8)}`,
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(6)} ${theme.spacing(4)}`
  },
}));



export default function ImageBanner() {
  return (
    <Wrapper>
      <Box sx={{ backgroundColor: "background.main" }}>
        <ResponsiveBox>
          <Box sx={{ color: "common.white" }}>
          <Typography variant="body1" sx={{ color: "common.white", mb: 2 }}>
            TRẢI NGHIỆM DU LỊCH THỰC TẾ ẢO
          </Typography>
          <Typography variant="h2" sx={{ color: "common.white"}}>
            Khám phá Hà Giang
            <br />
            với công nghệ thực tế ảo cực kỳ thú vị
          </Typography>
          <Typography variant="h6" sx={{ color: "common.white" }}>
            Khám phá những địa điểm du lịch Hà Giang dễ dàng ngay tại nhà.
          </Typography>
          </Box>
          <Link href="/adventure">
          <Box sx={{ width: 150 }}>
            <RectangleButton value="Khám phá ngay" />
          </Box>
          </Link>
        </ResponsiveBox>
      </Box>
    </Wrapper>
  );
}
