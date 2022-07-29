import React, { useState, useEffect } from 'react';
import { styled, Fab, Box } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NewButton = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.text.light,
  position: "fixed",
  bottom: 40,
  right: 40,
  width: 46,
  height: 46,
  "&: hover": {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box>
      {isVisible &&
        <NewButton onClick={handleClick}>
          <KeyboardArrowUpIcon sx={{ color: "white", fontSize: 40, fontWeight: 700 }} />
        </NewButton>
      }
    </Box>
  )
}
