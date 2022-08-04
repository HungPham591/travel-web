import React, { useState } from "react";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CustomBackgroundHearButton({ bgColor, color }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundColor: `${bgColor}`,
        cursor: "pointer",
        height: 30,
        width: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
      onClick={handleClick}
    >
      {active ? (
        <FavoriteIcon sx={(theme) => ({ color: theme.palette.secondary.main, fontSize: 18 })} />
      ) : (
        <FavoriteBorderIcon sx={{ color: `${color}`, fontSize: 18 }} />
      )}
    </Box>
  );
}

export default CustomBackgroundHearButton;
