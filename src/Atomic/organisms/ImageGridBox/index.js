import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const CustomImage = styled("img")(
    ({ theme, image, islast }) => ({
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        transition: "0.5s",
        ...(islast && {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")`,
        })
    })
)
const TitleBox = styled(Box)(
    ({ theme, islast }) => ({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...(!islast && {
            display: "none",
        })
    })
)
const ImageContainer = styled(Box)(
    ({ theme }) => ({
        width: "120px",
        height: "120px",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        ':hover': {
            "& .image": {
                transform: "scale(1.1)"
            }
        },
    })
)
function ImageGridBox(props) {
    const { images, handleClick } = props;
    const maxLength = 4;
    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
            {
                images.map((value, index) => {
                    if (index <= maxLength - 1) {
                        return (
                            <ImageContainer
                                key={index}
                                onClick={() => handleClick(index)}
                            >
                                <CustomImage className='image' image={value} islast={index === maxLength - 1 ? 1 : 0} />
                                <TitleBox islast={index === maxLength - 1 ? 1 : 0}>
                                    <Typography fontSize={"24px"} color={"white"}>+{images.length - maxLength}</Typography>
                                </TitleBox>
                            </ImageContainer>
                        )
                    }
                    return null;
                })
            }
        </Stack>
    );
}
export default ImageGridBox;