import { Box } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function HeartButton(props) {
    const { bgColor, color } = props;
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    return (
        <Box
            height="30px"
            width="30px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="3px"
            bgcolor={bgColor}
            sx={{ cursor: "pointer" }}
            onClick={handleClick}
        >
            {
                active ? <FavoriteIcon sx={{ color: "secondary.main" }} fontSize='250' /> : <FavoriteBorderIcon sx={{ color: `${color}`, }} fontSize='250' />
            }
        </Box>
    )
}

export default HeartButton;
