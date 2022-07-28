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
  backgroundImage: `url("/Images/hotelBanner.jpg")`,
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
        <Box maxWidth="430px" height="100vh" backgroundColor="white">
          <Box
            width="100%"
            height="82px"
            p="20px 140px"
            textAlign="center"
            borderBottom="2px solid rgb(18, 25, 33, 0.05)"
          >
            <Link href="/">
              <Box color="black" width="150px">
                <CardMedia image="/Images/logoblack.svg" alt="logo" component="img" />
              </Box>
            </Link>
          </Box>
          <form>
            <Grid container mt="25px" gap="16px" width="100%">
              <Grid item mx="auto" width="310px">
                <FormLabel variant="body1">Tên của bạn</FormLabel>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ fontSize: "21px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item mx="auto" width="310px">
                <FormLabel variant="body1">Họ và tên đệm</FormLabel>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ fontSize: "21px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item mx="auto" width="310px">
                <FormLabel variant="body1">Địa chỉ Email</FormLabel>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ fontSize: "21px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item mx="auto" width="310px">
                <FormLabel variant="body1">Mật khẩu</FormLabel>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ fontSize: "21px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item mx="auto" width="310px">
                <FormLabel variant="body1">Nhập lại mật khẩu</FormLabel>
                <TextField
                  size="small"
                  color="primary"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ fontSize: "21px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item mx="auto" mt="10px" width="310px" height="44px">
                <OvalButton value="Đăng ký" />
              </Grid>
              <Box m="20px auto">
                <Typography display="inline" mr="5px" fontWeight="300">
                  Bạn đã có tài khoản chưa?
                </Typography>
                <Link
                  href="/login"
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Đăng nhập
                </Link>
              </Box>
            </Grid>
          </form>
          <Box width="100%" textAlign="center">
            <Typography fontWeight="300">© Panagea</Typography>
          </Box>
        </Box>
      </Wrapper>
    </CustomContainer>
  );
}

export default React.memo(RegisterPage);
