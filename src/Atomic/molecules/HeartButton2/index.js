import { Box, Checkbox, styled } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ButtonContainer = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
        opacity: "0.9",
    })
)
function HeartButton(props) {
    return (
        <ButtonContainer>
            <Checkbox icon={<FavoriteBorderIcon fontSize="small" />} checkedIcon={<FavoriteIcon fontSize="small" color="secondary" />} />
        </ButtonContainer>
    )
}

export default HeartButton;