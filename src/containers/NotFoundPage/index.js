import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(Box)(
    ({ theme }) => ({
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })
)

export default function NotFoundPage(props) {
    const navigate = useNavigate();
    const handleGoHomePageButtonClick = () => {
        navigate("/");
    }
    return (
        <Wrapper>
            <Box>
                <Typography sx={{ textAlign: "center", color: "secondary", fontSize: "100px" }} >404!</Typography>
                <Typography sx={{ textAlign: "center", fontSize: "30px" }} >Sorry, Page not found</Typography>
                <Button variant='contained' sx={{ display: "block", margin: "auto", mt: 2, color: 'secondary' }} onClick={handleGoHomePageButtonClick}>
                    Go to home page
                </Button>
            </Box>
        </Wrapper>
    )
}