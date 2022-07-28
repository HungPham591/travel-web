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
      <Box display="flex" alignItems="center" height="100%">
        <Container sx={{ display: 'flex', justifyContent: "flex-end" }}>
          <Box backgroundColor="black" color="white" p="45px" maxWidth="465px">
            <Typography variant="h3" color="white" fontWeight="500" mb="8px">
              {content.title}
            </Typography>
            <Typography color="white" opacity="0.7">
              {content.description}
            </Typography>
            <Box width="207px">
              <OvalButton value={content.button} onClick={handleClickOpen} />
            </Box>
          </Box>
          <AdventureDialog open={open} setOpen={setOpen} />
        </Container>
      </Box>
    </Wrapper>
  );
}
