import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import RenderSwitchRoute from '../Atomic/_settings/RenderSwitchRoute';
import AllProjectRoutes from '../routes/AllProjectRoutes';
import mainTheme from '../themes/mainTheme';
import PageContainer from './PageContainer';

export default function Page() {

    return (
        <ThemeProvider theme={mainTheme}>
            <PageContainer >{RenderSwitchRoute(AllProjectRoutes)}</PageContainer>
        </ThemeProvider>
    );
}