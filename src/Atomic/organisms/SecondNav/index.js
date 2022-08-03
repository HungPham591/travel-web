import { Box, Stack, styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';


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
        <Box sx={{ borderBottom: 1, borderColor: 'grey.300', position: "sticky", top: theme => theme.mixins.toolbar.minHeight, zIndex: 1, width: "100%", bgcolor: "white" }}>
            <Container>
                <Stack sx={{ flexWrap: "wrap", py: 2, columnGap: 2 }} direction="row" >
                    {
                        props?.links.map((value, index) => {
                            return (
                                <ScrollLink activeClass='active-scroll-link' to={value.value} spy={true} smooth={true} key={index}>
                                    <CustomLink onClick={() => handleLinkClick(index)} key={index} noWrap active={activeLink === index ? 1 : 0}>{value.label}</CustomLink>
                                </ScrollLink>
                            )
                        })
                    }
                    <CustomButton variant='contained' sx={{ mr: 0 }}>Booking</CustomButton>
                </Stack>
            </Container>
        </Box>
    )
}
export default SecondNav;