import React from "react";
import { styled, Grid, Typography, Link, Box } from "@mui/material";
import HelpIcon from "../../../icons/helpIcon";
import WalletIcon from "../../../icons/walletIcon";
import NoteIcon from "../../../icons/noteIcon";

const Wrapper = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  justifyContent: "space-around",
}));

export default function HelpperBox() {
  return (
    <Wrapper container spacing={3}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid #ededed", p: 4 }}>
          <Link href="#">
            <HelpIcon sx={{ color: "secondary.main" }} />
          </Link>
          <Typography variant="h7">Quý khách cần hỗ trợ</Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            Hotline & trực tuyến (8h00 -22h00)
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid #ededed", p: 4 }}>
          <Link href="#">
            <WalletIcon />
          </Link>
          <Typography variant="h7">Thanh toán</Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            An toàn, nhanh chóng & linh hoạt
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid #ededed", p: 4 }}>
          <Link href="#">
            <NoteIcon />
          </Link>
          <Typography variant="h7">Sản phẩm & dịch vụ</Typography>
          <Typography variant="body1" sx={{ fontWeight: 300 }}>
            Đa dạng - Chất lượng - An toàn
          </Typography>
        </Box>
      </Grid>
    </Wrapper>
  );
}
