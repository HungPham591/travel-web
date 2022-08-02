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
import FooterDropdown from "../../molecules/Dropdown/FooterDropdown";
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
  backgroundColor: theme.palette.common.black,
  color: theme.palette.text.footer,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
}));

const LinkButton = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.footer,
  transition: "all 0.3s ease-in-out",
  "&: hover": {
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
    "& .arrow": {
      display: "inline",
      fontSize: theme.typography.h7.fontSize,
      marginLeft: theme.spacing(1),
    },
  },
}));

const NewButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.halfBorderRadius,
  fontWeight: theme.typography.fontWeightBold,
  transition: "all 0.3s ease-in-out",
  width: "inherit",
  height: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.text.main,
  },
}));

const LinkBasic = styled(Link)(({ theme }) => ({
  color: theme.palette.text.footer,
  "&: hover": {
    color: theme.palette.common.white,
  },
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  }
}));

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={5} sx={{ mb: 7 }}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box sx={{ width: 150, mb: 4 }}>
              <CardMedia image="/Images/logo.svg" component="img" alt="Logo" />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography variant="body1" sx={{ color: "text.footer", lineHeight: 2 }}>
                Hà Giang ở cực Bắc, cuốn hút lòng người vì núi đá vôi hùng vĩ,
                cao nguyên Đồng Văn huyền thoại bên bờ sông Lô, những cung đường
                uốn lượn, những ruộng bậc thang đẹp như tranh, nhà Vương trầm
                mặc, phố cổ Đồng Văn, và chợ tình Khâu Vai cho những mối tơ
                duyên dở dang.
              </Typography>
            </Box>
            <Box sx={{ fontSize: "25px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 3 }}>
              <Typography variant="body1" sx={{ display: "inline", letterSpacing: "2px", color: "common.white"}}>
                KẾT NỐI CHÚNG TÔI TRÊN
              </Typography>
              <LinkBasic href="#">
                <FacebookIcon />
              </LinkBasic>
              <LinkBasic href="#">
                <TwitterIcon />
              </LinkBasic>
              <LinkBasic href="#">
                <GoogleplusIcon />
              </LinkBasic>
              <LinkBasic href="#">
                <PinterestIcon />
              </LinkBasic>
              <LinkBasic href="#">
                <InstagramIcon />
              </LinkBasic>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={5} xs={12} sx={{ mt: 3 }}>
            <ResponsiveBox>
              <Typography variant="h7" sx={{ color: "common.white" }}>
                Thông tin
              </Typography>
              <Box sx={{ display: "flex", fontSize: "14px", flexDirection: "column", gap: 1, mt: 3 }}>
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
          <Grid item lg={4} md={4} sm={7} xs={12} sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
              <Typography variant="h7" sx={{ color: "common.white", mb: 3 }}>
                Thông tin liên hệ
              </Typography>
              <Box sx={{ mb: 1, display: "flex", alignItems: "center", fontSize: "14px" }}>
                <PhoneIphoneIcon />
                <LinkBasic
                  sx={{ ml: 1, "&: hover": { color: "secondary.main" } }}
                  href="#"
                >
                  + 61 23 8093 3400
                </LinkBasic>
              </Box>
              <Box fontSize="14px" display="flex" alignItems="center">
                <EmailIcon />
                <LinkBasic
                  sx={{ ml: 1, "&: hover": { color: "secondary.main" } }}
                  href="#"
                >
                  info@hagiang.com.vn
                </LinkBasic>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ mb: 2, color: "common.white" }}>
                Nhận bản tin
              </Typography>
              <form>
                <Box sx={{ display: "flex" }}>
                  <InputBase
                    placeholder="Email của bạn"
                    sx={{
                      backgroundColor: "background.inputBase",
                      color: "common.white",
                      opacity: "0.7",
                      padding: "3px",
                    }}
                  />
                  <NewButton>Đăng kí</NewButton>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "common.divider", opacity: "0.3", mb: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ display: "flex"}}>
              <FooterDropdown values={selectValue.language}>
                <LanguageIcon sx={{ fontSize: 20, color: "white" }} />
              </FooterDropdown>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FooterDropdown values={selectValue.unit}>
                <KeyboardArrowDownIcon sx={{ fontSize: 20, color: "white" }} />
              </FooterDropdown>
            </Box>
            <Box sx={{ width: 146 }}>
              <CardMedia image="Images/payment.svg" component="img" alt="Payment Icon" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, fontSize: "13px" }}>
            <LinkBasic href="#">Terms and conditions</LinkBasic>
            <Typography>|</Typography>
            <LinkBasic href="#">Privacy</LinkBasic>
            <Typography>|</Typography>
            <Typography>© Panagea</Typography>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}
