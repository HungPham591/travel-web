import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, ClickAwayListener, Grid, Paper, Popper, Stack, styled, TextField, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
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
const Score = styled(MuiBox)(
    ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: theme.shape.borderRadius,
        borderBottomRightRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1),
    })
)
const CircleButton = styled(MuiIconButton)(
    ({ theme }) => ({
        padding: theme.spacing(1),
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
const CustomChip = styled(MuiBox)(
    ({ theme, color }) => ({
        borderRadius: "50px",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        borderColor: theme.palette.common[color],
        color: theme.palette.common[color],
        "&:hover": {
            backgroundColor: theme.palette.common[color],
            "& *": {
                color: "white",
            },
        }
    })
)
const StickyBox = styled(Box)(
    ({ theme }) => ({
        width: "100%",
        position: 'sticky',
        top: "144px"
    })
)
const ChipTitle = styled(Typography)(
    ({ theme, color }) => ({
        color: theme.palette.common[color],
    })
)
const StickyBoxBody = styled(Box)(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        border: "solid 1px",
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
            <Box display="flex" justifyContent="flex-end">
                <TextField
                    value={numberOfAdult + numberOfChildren}
                    variant="outlined"
                    size="small"
                    onClick={handleNumberOfGuestClick}
                    fullWidth
                    label="Số khách"
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
                                <Box width={"110px"}>
                                    <Typography >Người lớn</Typography>
                                </Box>
                                <Box width="130px" className={classes.centerBox}>
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
                                <Box width={"110px"}>
                                    <Typography >Trẻ nhỏ</Typography>
                                </Box>
                                <Box width="130px" className={classes.centerBox}>
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
                        <Grid xl={7} lg={7} md={12} sm={6} xs={12} item>
                            <Typography display="inline" fontWeight={600} fontSize="31px">
                                {data?.price}₫
                            </Typography>
                            <Typography fontSize="11px" fontWeight={500} display="inline">
                                / khách
                            </Typography>
                        </Grid>
                        <Grid xl={5} lg={5} md={12} sm={6} xs={12} display="flex" alignItems="center" justifyContent="flex-end" item>
                            <Box paddingRight={1}>
                                <Typography fontSize="12px" textAlign="right">Tuyệt vời</Typography>
                                <Typography fontSize="11px" fontWeight={400} fontStyle="italic" textAlign="right">{data?.review} Đánh giá</Typography>
                            </Box>
                            <Score>
                                <Typography fontWeight="bold" color="white">
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
                                Đặt vé
                            </SubmitButton>
                        </Grid>
                        <Grid item xs={12}>
                            <AddToWishListButton
                                sx={{ border: 1 }}
                                fullWidth
                            >
                                Thêm vào danh sách yêu  thích
                            </AddToWishListButton>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography textAlign="center" variant="subtitle1">Bước này không có trả phí</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </StickyBoxBody>
            <Stack paddingY={2} direction="row" justifyContent="center" spacing={2}>
                <CustomChip sx={{ border: 1 }} color="facebook">
                    <FacebookIcon />
                    <ChipTitle className={classes.chipTitle} color="facebook">Share</ChipTitle>
                </CustomChip>
                <CustomChip sx={{ border: 1 }} color="twitter">
                    <TwitterIcon />
                    <ChipTitle className={classes.chipTitle} color="twitter">Tweet</ChipTitle>
                </CustomChip>
                <CustomChip sx={{ border: 1 }} color="google">
                    <GoogleIcon />
                    <ChipTitle className={classes.chipTitle} color="google">Share</ChipTitle>
                </CustomChip>
            </Stack>
        </StickyBox>
    )
}

export default withStyles(styles)(DetailBookingBox);