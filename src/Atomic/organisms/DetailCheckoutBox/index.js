import { styled, Box, Typography, Button, Divider, Grid } from '@mui/material';
import React from 'react';

const PurchaseButton = styled(Button)(
    ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.common.green,
        fontWeight: "bold"
    })
)
const StickyBox = styled(Box)(
    ({ theme }) => ({
        border: "solid 1px",
        borderColor: theme.palette.grey[300],
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        position: "sticky",
        top: "100px",
        backgroundColor: theme.palette.background.default
    })
)
function DetailCheckoutBox(props) {
    const { handlePurchaseButtonClick } = props;
    return (
        <StickyBox>
            <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "24px" }} >Tổng giá</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "24px" }}>69.00đ</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Divider />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography >Từ ngày</Typography>
                    <Typography >02-11-18</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography >Đến ngày</Typography>
                    <Typography >04-11-18</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography >Người lớn</Typography>
                    <Typography >2</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography >Trẻ nhỏ</Typography>
                    <Typography >1</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Divider />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: "flex" }}>
                    <PurchaseButton
                        variant="contained"
                        fullWidth
                        onClick={handlePurchaseButtonClick}
                    >
                        {props.buttonTitle}
                    </PurchaseButton>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Typography sx={{ textAlign: "center" }} variant="subtitle1">Bước này không có trả phí</Typography>
                </Grid>
            </Grid>
        </StickyBox>
    )
}
export default DetailCheckoutBox;