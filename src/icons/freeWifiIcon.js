import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Icon } from './freeWifiIcon.svg';

export default function FreeWifiIcon(props) {
    return (
        <SvgIcon component={Icon} {...props} inheritViewBox={true} sx={{ width: '25px', height: '25px', }} />
    )
}
