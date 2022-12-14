import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, ClickAwayListener, Grid, Paper, Popper, Stack, styled, TextField, Typography } from '@mui/material';
import MuiIconButton from '@mui/material/IconButton';
import { withStyles } from '@mui/styles';
import React, { useState } from 'react';
import CustomDateRangePicker from "../../molecules/DateRangePicker";

const SubmitButton = styled(Button)(
    ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.common.green,
        fontWeight: "bold",
    })
)
const Score = styled(Box)(
    ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        borderBottomRightRadius: 0,
        padding: theme.spacing(1),
    })
)
const CircleButton = styled(MuiIconButton)(
    ({ theme }) => ({
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[100],
        borderRadius: "100%",
        alignItems: 'center',
        opacity: 0.9,
    })
);
const AddToWishListButton = styled(Button)(
    ({ theme }) => ({
        color: theme.palette.primary.main,
        fontWeight: 600,
        backgroundColor: "white",
        ":hover": {
            borderColor: theme.palette.primary.main,
            color: "white",
            backgroundColor: theme.palette.primary.main,
            "& *": {
                color: "white",
            }
        }
    })
)
const StickyBox = styled(Box)(
    ({ theme }) => ({
        width: "100%",
        position: 'sticky',
        top: `calc(${theme.spacing(10)} + ${theme.mixins.toolbar.minHeight}px)`,
    })
)
const StickyBoxBody = styled(Box)(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.grey[300],
    })
)
const styles = {
    centerBox: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
    },
}
function DetailBookingBox(props) {
    const [numberOfAdult, setNumberOfAdult] = useState(0);
    const [numberOfChildren, setNumberOfChildren] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const isNumberOfGuestMenuOpen = Boolean(anchorEl);
    const { classes, data } = props;

    const handleNumberOfGuestClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNumberOfGuestClose = () => {
        setAnchorEl(null);
    };
    const handleAddAdultButtonClick = () => {
        setNumberOfAdult(numberOfAdult + 1);
    }
    const handleRemoveAdultButtonClick = () => {
        if (numberOfAdult > 0) setNumberOfAdult(numberOfAdult - 1);
    }
    const handleAddChildrenButtonClick = () => {
        setNumberOfChildren(numberOfChildren + 1);
    }
    const handleRemoveChildrenButtonClick = () => {
        if (numberOfChildren > 0) setNumberOfChildren(numberOfChildren - 1);
    }
    const numberOfGuestMenu = () => {
        return (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <TextField
                    sx={{ backgroundColor: "white" }}
                    value={numberOfAdult + numberOfChildren}
                    variant="outlined"
                    size="small"
                    onClick={handleNumberOfGuestClick}
                    fullWidth
                    label="S??? kh??ch"
                    InputProps={{
                        endAdornment: <KeyboardArrowDownIcon sx={{ transform: isNumberOfGuestMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.5s' }} />
                    }}
                />
                <Popper
                    anchorEl={anchorEl}
                    open={isNumberOfGuestMenuOpen}
                    onClose={handleNumberOfGuestClose}
                    placement='bottom-end'
                >
                    <ClickAwayListener onClickAway={handleNumberOfGuestClose}>
                        <Paper sx={{ p: 2 }}>
                            <Box className={classes.centerBox} >
                                <Box sx={theme => ({ width: theme.spacing(18) })} >
                                    <Typography >Ng?????i l???n</Typography>
                                </Box>
                                <Box sx={theme => ({ width: theme.spacing(15) })} className={classes.centerBox}>
                                    <CircleButton onClick={handleRemoveAdultButtonClick} >
                                        <RemoveIcon />
                                    </CircleButton>
                                    {numberOfAdult}
                                    <CircleButton onClick={handleAddAdultButtonClick}>
                                        <AddIcon />
                                    </CircleButton>
                                </Box>
                            </Box>
                            <Box mt={2} className={classes.centerBox}>
                                <Box sx={theme => ({ width: theme.spacing(18) })}>
                                    <Typography >Tr??? nh???</Typography>
                                </Box>
                                <Box sx={theme => ({ width: theme.spacing(15) })} className={classes.centerBox}>
                                    <CircleButton onClick={handleRemoveChildrenButtonClick}>
                                        <RemoveIcon />
                                    </CircleButton>
                                    {numberOfChildren}
                                    <CircleButton onClick={handleAddChildrenButtonClick}>
                                        <AddIcon />
                                    </CircleButton>
                                </Box>
                            </Box>
                        </Paper >
                    </ClickAwayListener >
                </Popper >
            </Box >
        )
    }
    return (
        <StickyBox>
            <StickyBoxBody >
                <Grid container spacing={2}>
                    <Grid item container>
                        <Grid item xl={7} lg={7} md={12} sm={6} xs={12} >
                            <Typography sx={{ display: "inline", fontWeight: 600, fontSize: "31px" }}>
                                {data?.price}???
                            </Typography>
                            <Typography sx={{ fontSize: "11px", fontWeight: 500, display: "inline" }} >
                                / kh??ch
                            </Typography>
                        </Grid>
                        <Grid item xl={5} lg={5} md={12} sm={6} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                            <Box sx={{ pr: 1 }}>
                                <Typography sx={{ fontSize: "12px", textAlign: "right" }}>Tuy???t v???i</Typography>
                                <Typography sx={{ fontSize: "11px", fontWeight: 400, fontStyle: "italic", textAlign: "right" }} >{data?.review} ????nh gi??</Typography>
                            </Box>
                            <Score>
                                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                                    {data?.score}
                                </Typography>
                            </Score>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item xs={12}>
                            <CustomDateRangePicker />
                        </Grid>
                        <Grid item xs={12}>
                            {numberOfGuestMenu()}
                        </Grid>
                        <Grid item xs={12}>
                            <SubmitButton
                                variant="contained"
                                fullWidth
                            >
                                ?????t v??
                            </SubmitButton>
                        </Grid>
                        <Grid item xs={12}>
                            <AddToWishListButton
                                sx={{ border: 1 }}
                                fullWidth
                            >
                                Th??m v??o danh s??ch y??u  th??ch
                            </AddToWishListButton>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography textAlign="center" variant="subtitle2">B?????c n??y kh??ng c?? tr??? ph??</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </StickyBoxBody>
            <Stack sx={{ paddingY: 2, justifyContent: "center" }} direction="row" spacing={2}>
                <Button variant='outlined' sx={{ borderRadius: "50px", color: theme => theme.palette.common.facebook, borderColor: theme => theme.palette.common.facebook }}><FacebookIcon />Share</Button>
                <Button variant='outlined' sx={{ borderRadius: "50px", color: theme => theme.palette.common.twitter, borderColor: theme => theme.palette.common.twitter }}><TwitterIcon />Share</Button>
                <Button variant='outlined' sx={{ borderRadius: "50px", color: theme => theme.palette.common.google, borderColor: theme => theme.palette.common.google }}><GoogleIcon />Share</Button>
            </Stack>
        </StickyBox >
    )
}

export default withStyles(styles)(DetailBookingBox);