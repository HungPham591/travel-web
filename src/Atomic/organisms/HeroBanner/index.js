import { Box, Button, Container, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const HeroContainer = styled(Box)(
    ({ theme }) => ({
        height: "550px",
        overflow: "hidden",
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: "500px"
        },
    })
)
const HeroImage = styled('img')(
    ({ theme, image, start }) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: "100%",
        transition: "1s",
        ...(start && {
            transform: "scale(1.1)",
        })
    })
);
const TitleBox = styled(Container)(
    ({ theme, start }) => ({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "1s",
        transform: `translateY(${theme.spacing(10)})`,
        opacity: 0,
        ...(start && {
            transform: "translateY(0px)",
            opacity: 1,
        })
    })
)
const ViewPhotosButton = styled(Button)(
    ({ theme }) => ({
        position: "absolute",
        left: theme.spacing(2),
        bottom: theme.spacing(2),
        backgroundColor: "white",
        color: theme.palette.common.black,
        ':hover': {
            backgroundColor: "white",
            color: theme.palette.secondary.main
        },
    })
);
const CustomDivider = styled(Box)(
    ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.warning.main,
        width: theme.spacing(10),
        height: theme.spacing(0.5),
    })
)
function HerroBanner(props) {
    const { image, title, handleImageButtonClick } = props;
    const [start, setStart] = useState(false);
    useEffect(() => {
        setStart(true);
    }, []);
    return (
        <HeroContainer>
            <HeroImage image={image} start={start ? 1 : 0} />
            <TitleBox start={start ? 1 : 0}>
                <Box sx={{ py: 2 }} >
                    <CustomDivider />
                </Box>
                <Typography sx={{ color: "white", textAlign: "center", fontWeight: 700 }} variant="h1">
                    {title}
                </Typography>
            </TitleBox>
            <ViewPhotosButton variant="contained" onClick={() => handleImageButtonClick(0)}>Xem hình</ViewPhotosButton>
        </HeroContainer>
    );
}
export default HerroBanner;