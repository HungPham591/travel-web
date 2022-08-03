import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Icon } from './HahaIcon.svg';

export default function GoogleplusIcon(props) {
  return (
    <SvgIcon component={Icon} {...props} />
  )
}
