import FilterListIcon from '@mui/icons-material/FilterList';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Divider, FormControlLabel, Grid, MenuItem, Select, Slider, styled, TextField, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tourData } from '../../api/fakeData';
import HeartButton from '../../Atomic/molecules/HeartButton2';


const Score = styled(Box)(
    ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: 0,
        padding: theme.spacing(1),
    })
)
const CardTitle = styled(Typography)(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
        transition: "0.5s",
        cursor: "pointer",
        ":hover": {
            color: "black"
        },
    })
)
const CardFooter = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        [theme.breakpoints.down("md")]: {
            justifyContent: "flex-end",
        }
    })
)
const FooterMarkerIcon = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        color: theme.palette.grey[500],
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    })
)
const SearchButton = styled(Button)(
    ({ theme }) => ({
        backgroundColor: theme.palette.common.yellow,
        color: "black",
        fontWeight: 600,
        ":hover": {
            backgroundColor: theme.palette.common.green,
            color: "white",
        }
    })
)
const WatchMoreButton = styled(Button)(
    ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        margin: "auto",
        display: 'block',
        borderRadius: theme.shape.borderRadius
    })
)
const MapBox = styled(Box)(
    ({ theme }) => ({
        height: "90vh",
        [theme.breakpoints.down("md")]: {
            height: "50vh"
        }
    })
)
const CardMediaBox = styled(CardMedia)(
    () => ({
        width: "50%",
        position: "relative",
        aspectRatio: "16/9",
    })
)
const CustomToggleButton = styled(ToggleButton)(
    () => ({
        whiteSpace: "nowrap",
    })
)


function MapPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    const [expanded1, setExpaned1] = useState(false);
    const [expanded2, setExpaned2] = useState(false);
    const [sliderValue, setSliderValue] = useState(10);
    const [toggleActive, setToggleActive] = useState(1);

    const handleChangeButtonExpanded1 = () => {
        setExpaned1(!expanded1);
    }
    const handleToggleChange = (e, value) => {
        setToggleActive(value);
    }
    const handleChangeButtonExpanded2 = () => {
        setExpaned2(!expanded2);
    }
    const handleSliderChange = (e, newValue) => {
        setSliderValue(newValue);
    }


    const HorizontalCard = (data) => {
        return (
            <Card sx={{ display: 'flex' }}>
                <CardMediaBox>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: "100%", position: "absolute" }}
                        image={data?.image}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ position: "absolute", top: 10, right: 10, padding: 1, bgcolor: "rgba(0, 0, 0, 0.6);", borderRadius: 1 }} >
                        <Typography sx={{ fontSize: "11px", color: "white" }}>{data?.label}</Typography>
                    </Box>
                </CardMediaBox>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", width: "100%" }}>
                    <CardContent sx={{ flex: '1 0 auto', position: 'relative' }}>
                        <Box sx={theme => ({ position: "absolute", right: theme.spacing(2) })} >
                            <HeartButton />
                        </Box>
                        <Link to={`/tour-detail/${data?.id}`}>
                            <CardTitle component="div" variant="h6">
                                {data?.title}
                            </CardTitle>
                        </Link>
                        <Typography sx={theme => ({ color: theme.palette.grey[500] })} component="span">
                            Gi?? t??? &nbsp;
                            <Typography sx={theme => ({ color: theme.palette.common.green, fontWeight: 500, display: "inline" })}>
                                {data?.price}???
                            </Typography>
                            /kh??ch
                        </Typography>
                    </CardContent>
                    <Box sx={{ width: "100%" }} >
                        <Divider sx={{ mt: 1, width: "100%" }} />
                        <CardFooter>
                            <FooterMarkerIcon>
                                <RoomIcon fontSize='small' />
                                <Typography sx={theme => ({ ml: 1, color: theme.palette.grey[500] })} >Xem tr??n b???n ?????</Typography>
                            </FooterMarkerIcon>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} >
                                <Box sx={{ pr: 1 }} >
                                    <Typography sx={{ fontSize: "12px", textAlign: "right" }} >Tuy???t v???i</Typography>
                                    <Typography sx={{ fontSize: "11px", fontStyle: "italic", textAlign: "right" }}>{data?.review} ????nh gi??</Typography>
                                </Box>
                                <Score>
                                    <Typography variant='subtitle2' sx={{ fontWeight: "bold", color: "white" }} >
                                        {data?.score}
                                    </Typography>
                                </Score>
                            </Box>
                        </CardFooter>
                    </Box>
                </Box>
            </Card>
        );
    }
    return (
        <Grid container sx={{ mt: `${theme.mixins.toolbar.minHeight}px` }} >
            <Grid item lg={5} md={5} sm={12} xs={12} order={{ lg: 1, md: 1, sm: 2, xs: 2 }} >
                <Box sx={{ height: "90vh", overflow: "auto" }}>
                    <Accordion expanded={expanded1} color='white' sx={theme => ({ backgroundColor: theme.palette.primary.main, borderRadius: 0 })} disableGutters elevation={0} square>
                        <AccordionSummary sx={theme => ({ backgroundColor: theme.palette.primary.main, borderRadius: 0, width: "100%" })} >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >
                                <Typography sx={{ color: "white" }} >145 k???t qu???</Typography>
                                <SearchIcon onClick={handleChangeButtonExpanded1} sx={{ color: "white", fontSize: "25px" }} />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails >
                            <TextField placeholder='Nh???p t??? kh??a t??m ki???m...' variant='outlined' fullWidth sx={{ border: 0, mb: 1 }} InputProps={{ endAdornment: <SearchIcon />, style: { backgroundColor: "white" } }} />
                            <TextField placeholder='Nh???p ?????a ??i???m' variant='outlined' fullWidth sx={{ border: 0, mb: 1 }} InputProps={{ endAdornment: <RoomIcon />, style: { backgroundColor: "white" } }} />
                            <Select defaultValue={1} MenuProps={{ disableScrollLock: true }} sx={{ border: 0, mb: 1, backgroundColor: "white" }} fullWidth>
                                <MenuItem value={1}>T???t c??? danh m???c</MenuItem>
                                <MenuItem value={2}>?????a danh</MenuItem>
                                <MenuItem value={3}>Tour du l???ch</MenuItem>
                            </Select>
                            <SearchButton variant='contained' fullWidth>T??m ki???m</SearchButton>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: "white" }} expanded={expanded2} disableGutters elevation={0} square>
                        <AccordionSummary>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >
                                <ToggleButtonGroup exclusive value={toggleActive} onChange={handleToggleChange} sx={{ height: "30px" }}>
                                    <CustomToggleButton value={1}>T???t c???</CustomToggleButton>
                                    <CustomToggleButton value={2}>Ph??? bi???n</CustomToggleButton>
                                    <CustomToggleButton value={3}>M???i nh???t</CustomToggleButton>
                                </ToggleButtonGroup>
                                <Button sx={{ height: "30px" }} startIcon={!isMobile ? <FilterListIcon /> : ""} onClick={handleChangeButtonExpanded2} variant="outlined">
                                    {!isMobile ? "B??? l???c" : <FilterListIcon />}
                                </Button>
                            </Box>
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails>
                            <Typography variant='h6' >Danh m???c</Typography>
                            <Grid container sx={{ mb: 2 }} >
                                <Grid item sx={{ display: "flex", flexDirection: "column" }} lg={6} md={6} sm={6} xs={12} >
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="T???t c??? (945)" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="?????a danh (45)" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tour du l???ch (30)" />
                                </Grid>
                                <Grid item sx={{ display: "flex", flexDirection: "column" }} lg={6} md={6} sm={6} xs={12} >
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Kh??ch s???n & ch??? ??? (25)" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nh?? h??ng (56)" />
                                </Grid>
                                <Grid item lg={12} md={12}>

                                </Grid>
                            </Grid>
                            <Typography variant='h6' sx={{ mb: 2 }}>Kho???ng c??ch</Typography>
                            <Box>
                                <Typography sx={{ display: "inline" }}>B??n k??nh xung quanh ?????a ??i???m ???? ch???n </Typography>
                                <Typography sx={theme => ({ color: theme.palette.secondary.main, display: "inline" })} >{sliderValue}</Typography>
                                <Typography sx={{ display: "inline" }}> km</Typography>
                            </Box>
                            <Slider color='secondary' defaultValue={10} value={sliderValue} onChange={handleSliderChange} step={10} />
                        </AccordionDetails>
                    </Accordion>
                    <Box sx={theme => ({ padding: 1, minHeight: "100vh", bgcolor: theme.palette.background.default })}>
                        {
                            tourData.map((value, index) => {
                                return <Box paddingY={1} key={index}>{HorizontalCard(value)}</Box>;
                            })
                        }
                        <WatchMoreButton variant="contained">Xem th??m</WatchMoreButton>
                    </Box>
                </Box>
            </Grid >
            <Grid lg={7} md={7} sm={12} xs={12} order={{ lg: 2, md: 2, sm: 1, xs: 1 }} item>
                <MapBox>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15676.62165382228!2d106.7116703!3d10.79940645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1655805592937!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </MapBox>
            </Grid>
        </Grid>

    );
}
export default MapPage;