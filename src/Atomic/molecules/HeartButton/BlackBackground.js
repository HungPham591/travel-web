import { Box } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function HeartButton({ bgColor, color }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Box
      sx={{
        cursor: "pointer",
        height: 30,
        width: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "3px",
        backgroundColor: `${bgColor}`
      }}
      onClick={handleClick}
    >
      {active ? (
        <FavoriteIcon sx={{ color: "secondary.main", fontSize: "18px", }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: `${color}`, fontSize: "18px", }} />
      )}
    </Box>
  );
}

export default HeartButton;
