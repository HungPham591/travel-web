import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ButtonContainer = styled(Box)(
    ({ theme }) => ({
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "3px",
        backgroundColor: theme.palette.background.default,
        opacity: "0.9",
        cursor: "pointer",
    })
)
function HeartButton(props) {
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    const handleMouseOver = () => {
        setHover(true);
    }
    const handleMouseOut = () => {
        setHover(false);
    }
    return (
        <ButtonContainer
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={handleClick}
        >
            {
                active || hover ? <FavoriteIcon sx={{ color: hover && !active ? "grey.700" : 'main.main' }} fontSize='250' /> : <FavoriteBorderIcon fontSize='250' />
            }
        </ButtonContainer>
    )
}

export default HeartButton;