import { Box } from "@mui/material";
import React, { useState } from "react";
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
        cursor: "pointer",
        height: 30,
        width: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "3px",
        backgroundColor: `${bgColor}`
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

export default HeartButton;
