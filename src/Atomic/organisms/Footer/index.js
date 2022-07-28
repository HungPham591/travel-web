import React from "react";
import GoogleplusIcon from "../../../icons/googleplusIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Dropdown from "../../molecules/Dropdown/Footer";
import {
  styled,
  Typography,
  Box,
  InputBase,
  Link,
  Grid,
  Divider,
  Button,
  Container,
  CardMedia
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const selectValue = {
  language: ["Việt Nam", "French", "Spanish", "Rusian"],
  unit: ["VND", "Euro"],
};

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.black,
  color: theme.palette.text.footer,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "60px 0px 35px 0px",
}));

const LinkButton = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.footer,
  transition: "all 0.3s ease-in-out",
  "&: hover": {
    marginLeft: "5px",
    color: theme.palette.secondary.main,
    "& .arrow": {
      display: "inline",
      fontSize: "18px",
      marginLeft: "5px",
    },
  },
}));

const NewButton = styled(Button)(({ theme }) => ({
  width: "inherit",
  height: "inherit",
  borderRadius: "0px 3px 3px 0px",
  fontWeight: "600",
  transition: "all 0.3s ease-in-out",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.text.main,
  },
}));

const LinkBasic = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.footer,
  "&: hover": {
    color: theme.palette.white,
  },
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  marginLeft: "80px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
  }
}));

export default function index() {
  return (
    <Wrapper>
      <Container sx={{ backgroundColor: "black" }}>
        <Grid container spacing={5} mb="55px">
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box mb="30px" width="150px">
              <CardMedia image="/Images/logo.svg" component="img" alt="Logo" />
            </Box>
            <Box mb="39px">
              <Typography
                color="text.footer"
                lineHeight="22.4px"
                variant="body1"
              >
                Hà Giang ở cực Bắc, cuốn hút lòng người vì núi đá vôi hùng vĩ,
                cao nguyên Đồng Văn huyền thoại bên bờ sông Lô, những cung đường
                uốn lượn, những ruộng bậc thang đẹp như tranh, nhà Vương trầm
                mặc, phố cổ Đồng Văn, và chợ tình Khâu Vai cho những mối tơ
                duyên dở dang.
              </Typography>
            </Box>
            <Box
              fontSize="25px"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
            >
              <Typography
                variant="body1"
                color="white"
                mr="24px"
                sx={{
                  display: "inline",
                  letterSpacing: "2px",
                }}
              >
                KẾT NỐI CHÚNG TÔI TRÊN
              </Typography>
              <LinkBasic href="#" mr="24px">
                <FacebookIcon />
              </LinkBasic>
              <LinkBasic href="#" mr="24px">
                <TwitterIcon />
              </LinkBasic>
              <LinkBasic href="#" mr="24px">
                <GoogleplusIcon />
              </LinkBasic>
              <LinkBasic href="#" mr="24px">
                <PinterestIcon />
              </LinkBasic>
              <LinkBasic href="#">
                <InstagramIcon />
              </LinkBasic>
            </Box>
          </Grid>
          <Grid item mt="25px" lg={3} md={3} sm={5} xs={12}>
            <ResponsiveBox>
              <Typography variant="h7" color="white">
                Thông tin
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                fontSize="14px"
                gap="5px"
                mt="25px"
              >
                <LinkButton href="/about">
                  Giới thiệu
                  <ArrowRightAltIcon className="arrow" sx={{ display: "none" }} />
                </LinkButton>
                <LinkButton href="login">
                  Đăng nhập
                  <ArrowRightAltIcon className="arrow" sx={{ display: "none" }} />
                </LinkButton>
                <LinkButton href="register">
                  Đăng ký
                  <ArrowRightAltIcon className="arrow" sx={{ display: "none" }} />
                </LinkButton>
                <LinkButton href="/blog">
                  Tin tức & Bài viết
                  <ArrowRightAltIcon className="arrow" sx={{ display: "none" }} />
                </LinkButton>
                <LinkButton href="/contact">
                  Liên hệ
                  <ArrowRightAltIcon className="arrow" sx={{ display: "none" }} />
                </LinkButton>
              </Box>
            </ResponsiveBox>
          </Grid>
          <Grid item mt="25px" lg={4} md={4} sm={7} xs={12}>
            <Box display="flex" flexDirection="column" mb="25px">
              <Typography variant="h7" color="white" mb="25px">
                Thông tin liên hệ
              </Typography>
              <Box fontSize="14px" mb="5px" display="flex" alignItems="center">
                <PhoneIphoneIcon />
                <LinkBasic
                  ml="5px"
                  sx={{ "&: hover": { color: "secondary.main" } }}
                  href="#"
                >
                  + 61 23 8093 3400
                </LinkBasic>
              </Box>
              <Box fontSize="14px" display="flex" alignItems="center">
                <EmailIcon />
                <LinkBasic
                  ml="10px"
                  sx={{ "&: hover": { color: "secondary.main" } }}
                  href="#"
                >
                  info@hagiang.com.vn
                </LinkBasic>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" mb="15px" color="white">
                Nhận bản tin
              </Typography>
              <form>
                <Box display="flex">
                  <InputBase
                    color="secondary"
                    display="inline"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      color: "#fff",
                      opacity: "0.7",
                      padding: "3px",
                    }}
                  />
                  <NewButton variant="contained">Đăng kí</NewButton>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>

        <Divider
          color="#ededed"
          sx={{ opacity: "0.3", marginBottom: "30px" }}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap="30px"
        >
          <Box display="flex" gap="10px">
            <Box display="flex">
              <Dropdown values={selectValue.language}>
                <LanguageIcon fontSize="20px" />
              </Dropdown>
            </Box>
            <Box display="flex">
              <Dropdown values={selectValue.unit}>
                <KeyboardArrowDownIcon fontSize="20px" />
              </Dropdown>
            </Box>
            <Box width="146px">
              <CardMedia image="Images/payment.svg" component="img" alt="Payment Icon" />
            </Box>
          </Box>
          <Box display="flex" gap="10px" fontSize="13px">
            <LinkBasic href="#">Terms and conditions</LinkBasic>
            <Typography fontWeight="100">|</Typography>
            <LinkBasic href="#">Privacy</LinkBasic>
            <Typography fontWeight="100">|</Typography>
            <Typography>© Panagea</Typography>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}
