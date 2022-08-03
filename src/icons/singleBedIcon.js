import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Icon } from './SingleBedIcon.svg';

export default function SingleBedIcon(props) {
    return (
        <SvgIcon component={Icon} {...props} inheritViewBox={true} sx={{ width: '25px', height: '25px', }} />
    )
}
