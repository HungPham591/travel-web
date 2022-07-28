import React from "react";
import ItemCardNews from "../../molecules/ItemCardNews";
import { Typography, Box, Link, Grid } from "@mui/material";
import CenterDivider from "../../molecules/Divider/CenterDivider";
import OvalButton from "../../atoms/Button/OvalButton";
import { newsData } from "../../../api/fakeData";

export default function NewsSection() {
  return (
    <Box px="15px">
      <Box textAlign="center" mb="35px">
        <Box display="flex" justifyContent="center" mb="25px">
          <CenterDivider />
        </Box>
        <Typography variant="h3" fontWeight="500">
          Tin Tức & Bài Viết Mới
        </Typography>
        <Typography variant="h4" fontWeight="300">
          Tìm hiểu các thông tin mới nhất về Hà Giang.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {newsData.map(data => (
          <Grid key={data.id} container item spacing={2} lg={6} md={6} sm={12} xs={12}>
            <ItemCardNews data={data} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="flex-end">
        <Link href="#">
          <Box width="134px">
            <OvalButton value="Xem tất cả" />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
