import { Grid, Typography } from '@mui/material';
import React from 'react';
function DescriptionBox(props) {
    const { name, title, children } = props;
    return (
        <Grid container id={name} spacing={2}>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                <Typography variant="h5">
                    {title}
                </Typography>
            </Grid>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
                {children}
            </Grid>
        </Grid>
    )
}
export default DescriptionBox;