import React from "react";
import ItemCardNews from "../../molecules/ItemCardNews";
import { Typography, Box, Link, Grid } from "@mui/material";
import CenterDivider from "../../molecules/Divider/CenterDivider";
import OvalButton from "../../atoms/AdvancedButton/OvalButton";
import { newsData } from "../../../api/fakeData";

export default function NewsSection() {
  return (
    <Box sx={{ px: 2 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <CenterDivider />
        </Box>
        <Typography variant="h3">
          Tin Tức & Bài Viết Mới
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 300 }}>
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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href="#">
          <Box sx={{ width: 150 }}>
            <OvalButton>Xem tất cả</OvalButton>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
