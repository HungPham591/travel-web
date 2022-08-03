
import { Box, Divider, Grid, LinearProgress, Rating, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const CommentWrapper = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing(2),
        [theme.breakpoints.only("xs")]: {
            flexDirection: "column",
            gap: theme.spacing(1),
        }
    })
)
const Avatar = styled('img')(
    ({ theme, image }) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundImage: `url(${image})`,
        height: "80px",
        aspectRatio: "1",
        backgroundSize: "cover",
        [theme.breakpoints.only("xs")]: {
            width: "80px"
        }
    })
)

const linearProcessWidthLabel = (value, label) => {
    return (
        <Box sx={{ display: "flex", gap: 2 }} >
            <LinearProgress style={{ height: 15, borderRadius: 2, flex: 1 }} variant="determinate" value={value} />
            <Typography sx={theme => ({ width: theme.spacing(5), color: (theme) => theme.palette.text.secondary })} variant="subtitle2" noWrap>
                {label}
            </Typography>
        </Box>
    )
}
function comment(imageUrl, star, time, content) {
    return (
        <CommentWrapper>
            <Avatar image={imageUrl} />
            <Box
                sx={theme => ({
                    border: 1,
                    padding: 2,
                    borderRadius: 1,
                    borderColor: theme.palette.grey[300]
                })}
            >
                <Rating value={star} size="small" readOnly />
                <Typography
                    variant='subtitle2'
                    sx={{ fontStyle: "italic", mb: 1 }}
                >
                    {time}
                </Typography>
                <Typography
                    variant='subtitle1'
                >
                    {content}
                </Typography>
            </Box>
        </CommentWrapper>
    )
}
function ReviewBox(props) {
    const { reviews } = props;
    const getRandomInt = () => Math.floor(Math.random() * (100 - 0 + 1));
    return (
        <Stack sx={{ gap: 3 }} >
            <Grid spacing={2} container>
                <Grid lg={3} md={3} xs={12} sm={12} item>
                    <Box
                        sx={theme => ({
                            borderRadius: 1,
                            backgroundColor: theme.palette.primary.main,
                            width: "100%",
                            height: theme.spacing(15),
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
                        })}
                    >
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: "bold", textAlign: "center", color: "white" }}>8.5</Typography>
                            <Typography variant='subtitle2' sx={{ textAlign: "center", color: "white" }}>Tuyệt Vời</Typography>
                            <Typography variant='subtitle2' sx={{ textAlign: "center", color: "white" }}>Dựa trên {reviews?.length} đánh giá</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={9} md={9} xs={12} sm={12} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }} item>
                    {linearProcessWidthLabel(getRandomInt(), "5 Sao")}
                    {linearProcessWidthLabel(getRandomInt(), "4 Sao")}
                    {linearProcessWidthLabel(getRandomInt(), "3 Sao")}
                    {linearProcessWidthLabel(getRandomInt(), "2 Sao")}
                    {linearProcessWidthLabel(getRandomInt(), "1 Sao")}
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2}>
                {
                    reviews.map((value, index) => (
                        <Grid item key={index}>
                            {comment(value?.avatar, value?.stars, `${value?.account} – ${value?.time}:`, value?.content)}
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    );
}
export default React.memo(ReviewBox);