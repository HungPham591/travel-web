import React from "react";
import { styled, Box, Typography, Container } from "@mui/material";
import OvalButton from "../../atoms/Button/OvalButton";
import AdventureDialog from "../IframeDialog";

const Wrapper = styled(Box)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",
  height: "100%",
}));

export default function ParallaxBox({ content }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper image={content.image}>
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Container sx={{ display: 'flex', justifyContent: "flex-end" }}>
          <Box sx={{ backgroundColor: "black", color: "white", p: 6, maxWidth: 465 }}>
            <Typography variant="h3" sx={{ color: "white", fontWeight: 500, mb: 1 }}>
              {content.title}
            </Typography>
            <Typography sx={{ color: "text.footer"}}>
              {content.description}
            </Typography>
            <Box sx={{ width: 207 }}>
              <OvalButton value={content.button} onClick={handleClickOpen} />
            </Box>
          </Box>
          <AdventureDialog open={open} setOpen={setOpen} />
        </Container>
      </Box>
    </Wrapper>
  );
}
