import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HeartIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Grid, IconButton, MenuItem, Paper, Popper, Stack, styled, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import allProjectRoutes from '../../../routes/allProjectRoutes';
import backendRoutes from '../../../routes/backendRoutes';

const CustomAppBar = styled(MuiAppBar)(
    ({ show, active }) => ({
        ...(!show && {
            transition: "none",
            color: "white",
            backgroundColor: "transparent",
            borderBottom: 0,
        }),
        ...(active && {
            transition: "none",
        })
    })
)
const AppBarTypography = styled(MuiTypography)(
    ({ show, display }) => ({
        whiteSpace: "nowrap",
        ...(!show && {
            color: "white"
        }),
        ...(display === 0 && {
            display: 'none',
        }),
    })
)
const AppBarMenuTypography = styled(MuiTypography)(
    ({ theme }) => ({
        whiteSpace: "nowrap",
        color: theme.palette.grey[700],
        ':hover': {
            color: theme.palette.secondary.main
        },
    })
)
const CustomGrid = styled(MuiGrid)(
    ({ display, center }) => ({
        display: "flex",
        ...(display === 0 && {
            display: 'none'
        }),
        ...(center && {
            justifyContent: 'center'
        }),
        ...(display === 0 && {
            display: 'none',
        }),
    })
)
const MenuButton = styled(CustomGrid)(
    () => ({
        alignItems: 'center',
    })
)
const LogoBox = styled(Box)(
    () => ({
        display: "flex",
        alignItems: "center",
    })
)
const CustomIconButton = styled(IconButton)(
    ({ show, display }) => ({
        ...(!show && {
            color: "white"
        }),
        ...(display === 0 && {
            display: 'none',
        }),
    })
)
//menu component
function Header(props) {
    const location = useLocation();
    const theme = useTheme();
    const navigate = useNavigate();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = useState(null);
    const [showAppbar, setShowAppbar] = useState(false);
    const { setLoginDialogOpen } = props;

    const navLinkClass = ({ isActive }) => ({
        color: isActive ? theme.palette.secondary.main : showAppbar ? theme.palette.grey[700] : "white",
        '&:hover': {
            color: theme.palette.secondary.main
        },
    })
    const handleScroll = () => {
        if (window.pageYOffset > 10) setShowAppbar(true)
        else setShowAppbar(false)
    };

    useEffect(() => {
        if ((location.pathname !== '/map' && location.pathname !== '/login' && allProjectRoutes.map(value => value.path).includes(location.pathname)) || location.pathname.includes('detail')) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setShowAppbar(true)
        }
    }, [location])
    const handleMenuToggle = (event) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleLogoClick = () => {
        navigate('/');
    }
    const handleMenuClose = (event) => {
        setAnchorEl(null);
    };
    const handleMenuButton = () => {
        props.setDrawerOpen(true);
    }
    const handleCartButtonClick = () => {
        navigate("/cart");
    }
    const handleHeartButtonClick = () => {
        navigate("/wish-list");
    }
    const handleLoginButtonClick = () => {
        setLoginDialogOpen(true);
    }
    return (
        <CustomAppBar show={showAppbar ? 1 : 0} >
            <Toolbar>
                <Grid container>
                    <MenuButton item lg={0} md={0} sm={3} xs={3} display={isMedium ? 1 : 0} onClick={handleMenuButton} >
                        <MenuIcon />
                    </MenuButton>
                    <CustomGrid item lg={3} md={3} sm={6} xs={6} sx={{ display: "flex", alignItems: "center" }} center={isMedium ? 1 : 0} >
                        <LogoBox onClick={handleLogoClick}>
                            <img alt='logo' src={showAppbar ? "/Images/logo/logoblack.svg" : "/Images/logo/logo.svg"} height={"36px"} />
                        </LogoBox>
                    </CustomGrid>
                    <Grid item lg={9} md={9} sm={3} xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }} >
                        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
                            {
                                backendRoutes.map((value, index) => {
                                    if (value.element?.length === 0) {
                                        return (
                                            <AppBarTypography key={index} display={!isMedium ? 1 : 0} show={showAppbar ? 1 : 0}>
                                                <NavLink style={navLinkClass} to={value.path}>
                                                    {value.label}
                                                </NavLink>
                                            </AppBarTypography>
                                        )
                                    } else {
                                        return (
                                            <Box
                                                item
                                                display={!isMedium ? "block" : "none"}
                                                onMouseEnter={handleMenuToggle}
                                                onMouseLeave={handleMenuClose}
                                                key={index}
                                            >
                                                <AppBarTypography show={showAppbar ? 1 : 0} >
                                                    {value.label}
                                                </AppBarTypography>
                                                <Popper
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleMenuClose}
                                                    sx={{ zIndex: 999999 }}
                                                >
                                                    <Paper sx={{ mt: 2 }}>
                                                        {
                                                            value.element.map((valueComponent, index) => {
                                                                return (
                                                                    <MenuItem sx={{ py: 1 }} component={Link} to={valueComponent.path} divider={index !== value.component?.length - 1} onClick={handleMenuClose} key={index}>
                                                                        <AppBarMenuTypography>
                                                                            {valueComponent.label}
                                                                        </AppBarMenuTypography>
                                                                    </MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Paper>
                                                </Popper>
                                            </Box>
                                        )
                                    }
                                })
                            }
                            <Box sx={{ display: "flex" }} >
                                <CustomIconButton display={!isSmall ? 1 : 0} show={showAppbar ? 1 : 0} onClick={handleCartButtonClick}>
                                    <Badge
                                        badgeContent={4}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <AddShoppingCartIcon />
                                    </Badge>
                                </CustomIconButton>
                                <CustomIconButton show={showAppbar ? 1 : 0} onClick={handleLoginButtonClick}>
                                    <LoginIcon />
                                </CustomIconButton>
                                <CustomIconButton show={showAppbar ? 1 : 0} onClick={handleHeartButtonClick}>
                                    <HeartIcon />
                                </CustomIconButton>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </CustomAppBar>
    );
}
export default Header;