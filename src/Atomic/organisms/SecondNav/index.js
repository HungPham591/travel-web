import { Box, Stack, styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useAppBarHeight from '../../_settings/appbarHeight';


const CustomButton = styled(MuiButton)(
    ({ theme }) => ({
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    })
)
const CustomLink = styled(MuiTypography)(
    ({ theme, active }) => ({
        color: "rgba(0, 0, 0, 0.5)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        transition: "0.5s",
        ":hover": {
            color: theme.palette.secondary.main
        },
        ...(active && {
            color: "rgba(0, 0, 0, 0.9)",
            ":hover": {
                color: "rgba(0, 0, 0, 0.9)",
            },
        })
    })
)
function SecondNav(props) {
    const [activeLink, setActiveLink] = useState(-1);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    }
    return (
        <Box position={"sticky"} top={useAppBarHeight()} zIndex={1} sx={{ borderBottom: 1, borderColor: 'grey.300' }} width="100%" bgcolor={"white"}>
            <Container>
                <Stack flexWrap={"wrap"} py={2} columnGap={2} direction={"row"}>
                    {
                        props?.links.map((value, index) => {
                            return (
                                <ScrollLink activeClass='active-scroll-link' to={value.value} spy={true} smooth={true} key={index}>
                                    <CustomLink onClick={() => handleLinkClick(index)} key={index} noWrap active={activeLink === index ? 1 : 0}>{value.label}</CustomLink>
                                </ScrollLink>
                            )
                        })
                    }
                    <CustomButton variant='contained' sx={{ marginRight: 0 }}>Booking</CustomButton>
                </Stack>
            </Container>
        </Box>
    )
}
export default SecondNav;