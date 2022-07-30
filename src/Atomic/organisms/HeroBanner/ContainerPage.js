import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
const HeroImage = styled(Box)(
    ({ theme, image }) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
);
const Title = styled(Typography)(
    ({ theme }) => ({
        color: "white",
        textAlign: "center",
        fontSize: 42,
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: 32
        }
    })
);

const CustomDivider = styled(Box)(
    ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.warning.main,
        width: 80,
        height: 4,
    })
)
export default function HerroBanner(props) {
    const { image, title } = props;
    return (
        <HeroImage image={image}>
            <Container>
                <Box data-aos="fade-up" data-aos-duration="800" data-aos-once={true} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ py: 3 }}>
                        <CustomDivider />
                    </Box>
                    <Title variant="h1">
                        {title}
                    </Title>
                </Box>
            </Container>
        </HeroImage>
    );
}
