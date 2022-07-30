import React from "react";
import HorizontalDivider from "../../molecules/Divider";
import ItemCardImage from "../../molecules/ItemCardImage";
import { Typography, Box, Link, Grid } from "@mui/material";

export default function ProductSection({ content, data }) {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <HorizontalDivider />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">{content.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 300, fontSize: 18 }}>
          {content.description}
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {data.map((item, index) => {
          if (index < 4) {
            return (
              <Grid key={item.id} item lg={3} md={3} sm={6} xs={12}>
                <ItemCardImage data={item} />
              </Grid>
            );
          }
          return;
        })}
      </Grid>
      <Link
        href="#"
        variant="body1"
        sx={{ fontWeight: 600, "&: hover": { color: "black" } }}
      >
        Xem tất cả (175) &gt;
      </Link>
    </Box>
  );
}
