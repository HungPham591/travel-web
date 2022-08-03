import { Autocomplete, Button, Grid, styled, TextField } from '@mui/material';
import React from 'react';

const SubmitButton = styled(Button)(
    ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        fontWeight: "bold"
    })
)
const reviewValue = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: '5', value: 5 },
]
function LeaveReviewBox() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12} sm={6}>
                <TextField label="Họ tên" fullWidth variant="outlined" size="small" InputLabelProps={{ shrink: true }} required />
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={6}>
                <TextField label="Email" fullWidth variant="outlined" size="small" InputLabelProps={{ shrink: true }} required />
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={6}>
                <Autocomplete
                    disablePortal
                    options={reviewValue}
                    renderInput={(params) => <TextField {...params} label="Đánh giá" size='small' InputLabelProps={{ shrink: true }} required fullWidth />}
                />
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>

            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
                <TextField label="Review của bạn" fullWidth multiline rows={4} variant="outlined" InputLabelProps={{ shrink: true }} required />
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
                <SubmitButton variant="contained">Xác nhận</SubmitButton>
            </Grid>
        </Grid>
    )
}
export default LeaveReviewBox;