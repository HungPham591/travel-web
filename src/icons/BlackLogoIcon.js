import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Icon } from './BlackLogoIcon.svg';

export default function BlackLogoIcon(props) {
  return (
    <SvgIcon component={Icon} {...props} inheritViewBox={true} sx={{ width: '150px', height: '36px' }} />
  )
}
