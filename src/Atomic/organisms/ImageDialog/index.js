import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Dialog, IconButton, styled, Typography } from '@mui/material';
import React from 'react';

const ImageDialogButton = styled(IconButton)(
    ({ theme }) => ({
        position: "absolute",
        top: "50%",
        padding: theme.spacing(2),
        borderRadius: "100%",
        alignItems: 'center',
        color: "white",
        backgroundColor: "rgba(255,255,255,.15)",
        zIndex: 99999,
    })
);
const ImageBox = styled(Box)(
    () => ({
        position: "relative",
        overflowY: "hidden",
        height: "100%",
        aspectRatio: "3/2",
    })
)
const CustomImage = styled("img")(
    ({ image }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
    })
)

function ImageDialog(props) {
    const { handleClose, handleBackButtonClick, handleForwardButtonClick, currentImageOpen, images, open } = props;

    const handleKeyDownImageDialog = (e) => {
        if (e.keyCode === 37) {
            handleForwardButtonClick();
        }
        if (e.keyCode === 39) {
            handleBackButtonClick();
        }
    }
    return (
        <Dialog fullWidth maxWidth={"md"} disableScrollLock={true} onClose={handleClose} open={open} onKeyDown={handleKeyDownImageDialog}>
            <ImageDialogButton sx={{ left: 20 }} onClick={handleForwardButtonClick}>
                <ArrowBackIosIcon />
            </ImageDialogButton>
            <ImageBox>
                <CustomImage image={images[currentImageOpen]} />
                <Box sx={{ display: "flex", justifyContent: "space-between", position: "absolute", bottom: 10, left: 10, right: 10 }}>
                    <Typography sx={{ color: "white" }} >Photo title</Typography>
                    <Typography sx={{ color: "white" }}>{currentImageOpen + 1} of {images.length}</Typography>
                </Box>
            </ImageBox>
            <ImageDialogButton sx={{ right: 20 }} onClick={handleBackButtonClick}>
                <ArrowForwardIosIcon />
            </ImageDialogButton>
        </Dialog >
    );
}

export default ImageDialog;