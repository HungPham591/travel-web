import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const VideoThumbnail = styled("img")(
    ({ image }) => ({
        transition: "all 0.5s",
        backgroundImage: `url("${image}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: "100%",
    })
);
const TitleBox = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    })
)
const VideoTitle = styled(Typography)(
    ({ theme }) => ({
        color: "white",
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        ":hover": {
            color: theme.palette.secondary.main
        }
    })
)
const VideoContainer = styled(Box)(
    ({ theme, image }) => ({
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        width: "120px",
        height: "120px",
        "& .video-title": {
            opacity: 0,
            transition: "all 0.5s",
            transform: `translateY(${theme.spacing(1)})`,
        },
        ":hover": {
            "& .video": {
                transform: "scale(1.1)",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}")`,
            },
            "& .video-title": {
                opacity: 1,
                transform: "translateY(0px)",
            }
        },
    })
)

function VideoGridBox(props) {
    const { videos, handleClick } = props;
    return (
        <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: 1 }} >
            {
                videos.map((value, index) => {
                    return (
                        <VideoContainer key={index} image={value?.video} onClick={() => handleClick(index)} item>
                            <VideoThumbnail className='video' image={value?.video} />
                            <TitleBox>
                                <VideoTitle className='video-title'>
                                    <YouTubeIcon sx={{ marginX: "auto", marginBottom: 1 }} />
                                    {value?.title}
                                </VideoTitle>
                            </TitleBox>
                        </VideoContainer>
                    )
                })
            }
        </Stack>
    )
}
export default VideoGridBox;