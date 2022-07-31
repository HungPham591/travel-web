import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Box,
  FormLabel,
  Grid,
  InputAdornment,
  Link,
  styled,
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import React from "react";
import OvalButton from "../../Atomic/atoms/Button/OvalButton";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundImage: `url("/Images/banner/hotelBanner.jpg")`,
  backgroundSize: "cover",
  width: "inherit",
  minHeight: "100vh",
}));
const CustomContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 99999,
  backgroundColor: "white",
  position: "fixed",
  overflow: "auto",
}));

function RegisterPage() {
  return (
    <CustomContainer>
      <Wrapper>
        <Box sx={{ maxWidth: 430, height: "100vh", backgroundColor: "white" }}>
          <Box sx={{ width: "100%", height: 82, py: 3, px: 17, textAlign: "center", borderBottom: "2px solid rgb(18, 25, 33, 0.05)" }}>
            <Link href="/">
              <Box sx={{ color: "black", width: 150 }}>
                <CardMedia image="/Images/logoblack.svg" alt="logo" component="img" />
              </Box>
            </Link>
          </Box>
          <form>
            <Grid container sx={{ mt: 3, gap: 2, width: "100%" }}>
              <Grid item sx={{ mx: "auto", width: 310 }}>
                <FormLabel variant="body1">Tên của bạn</FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  required
                  sx={{ color: "primary" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ fontSize: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto", width: 310 }}>
                <FormLabel variant="body1">Họ và tên đệm</FormLabel>
                <TextField
                  size="small"
                  sx={{ color: "primary" }}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ fontSize: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto", width: 310 }}>
                <FormLabel variant="body1">Địa chỉ Email</FormLabel>
                <TextField
                  size="small"
                  sx={{ color: "primary" }}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ fontSize: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto", width: 310 }}>
                <FormLabel variant="body1">Mật khẩu</FormLabel>
                <TextField
                  size="small"
                  sx={{ color: "primary" }}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ fontSize: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto", width: 310 }}>
                <FormLabel variant="body1">Nhập lại mật khẩu</FormLabel>
                <TextField
                  size="small"
                  sx={{ color: "primary" }}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ fontSize: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto",  mt: 1, width: 310, height: 44 }}>
                <OvalButton value="Đăng ký" />
              </Grid>
              <Box sx={{ mx: "auto", my: 3 }}>
                <Typography sx={{ display: "inline", mr: 1, fontWeight: 300 }}>
                  Bạn đã có tài khoản chưa?
                </Typography>
                <Link href="/login">
                  Đăng nhập
                </Link>
              </Box>
            </Grid>
          </form>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography sx={{ fontWeight: 300 }}>© Panagea</Typography>
          </Box>
        </Box>
      </Wrapper>
    </CustomContainer>
  );
}

export default React.memo(RegisterPage);
