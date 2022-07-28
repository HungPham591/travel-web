import CloseIcon from '@mui/icons-material/Close';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Button, Dialog, DialogTitle, Divider, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import MuiBox from '@mui/material/Box';
import { withStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { tourData } from '../../api/fakeData';
import DescriptionBox from "../../Atomic/organisms/DescriptionBox";
import DetailBookingBox from "../../Atomic/organisms/DetailBookingBox";
import HeroBanner from "../../Atomic/organisms/HeroBanner";
import ImageDialog from "../../Atomic/organisms/ImageDialog";
import ImageGridBox from "../../Atomic/organisms/ImageGridBox";
import LeaveReviewBox from "../../Atomic/organisms/LeaveReviewBox";
import ReviewBox from "../../Atomic/organisms/ReviewBox";
import SecondNav from "../../Atomic/organisms/SecondNav";
import VideoGridBox from "../../Atomic/organisms/VideoGridBox";

const images = [
    '/Images/hotelDetailBanner.jpg',
    '/Images/placeDetailBanner.jpg',
    '/Images/productDetailBanner.jpg',
    '/Images/restaurantDetailBanner.jpg',
    '/Images/tourDetailBanner.jpg',
];
const videos = [
    { video: '/Images/tourPage1.jpg', title: 'Lũng Cú' },
    { video: '/Images/tourPage2.jpg', title: 'Đồng Văn' },
    { video: '/Images/tourPage3.jpg', title: 'Mã Pí Lèng' },
    { video: '/Images/tourPage4.jpg', title: 'Nho Quế' },
    { video: '/Images/tourPage5.jpg', title: 'Dinh Nhà Vương' },
    { video: '/Images/tourPage6.jpg', title: 'Cánh Đồng Hoa' },
];
const reviewData = [
    {
        stars: 4,
        avatar: "/Images/avatar1.jpg",
        account: "Admin",
        time: "April 03, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 4,
        avatar: "/Images/avatar2.jpg",
        account: "Ahsan",
        time: "April 01, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 5,
        avatar: "/Images/avatar3.jpg",
        account: "Sara",
        time: "March 31, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 5,
        avatar: "/Images/avatar1.jpg",
        account: "Admin",
        time: "April 03, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
];
const timelineData = [
    {
        time: "25.05.2022",
        title: "Hà Giang",
        placeName: "Cổng trời Quản Bạ",
        description: "Hà Giang là mảnh đất nơi có những cao nguyên đá hùng vĩ trong sương mờ vào mỗi buổi sáng.",
        image: "/Images/tourPage1.jpg"
    },
    {
        time: "26.05.2022",
        title: "Cổng trời Quản Bạ",
        placeName: "Thị trấn Yên Minh",
        description: "Hà Giang là mảnh đất nơi có những cao nguyên đá hùng vĩ trong sương mờ vào mỗi buổi sáng.",
        image: "/Images/tourPage2.jpg"
    },
    {
        time: "27.05.2022",
        title: "Thị trấn Yên Minh",
        placeName: "phố cổ Đồng Văn",
        description: "Hà Giang là mảnh đất nơi có những cao nguyên đá hùng vĩ trong sương mờ vào mỗi buổi sáng.",
        image: "/Images/tourPage3.jpg"
    },
    {
        time: "28.05.2022",
        title: "Đồng Văn",
        placeName: "Mèo Vạc",
        description: "Hà Giang là mảnh đất nơi có những cao nguyên đá hùng vĩ trong sương mờ vào mỗi buổi sáng.",
        image: "/Images/tourPage4.jpg"
    }
];


const styles = {
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        border: 0
    },
    timeline: {
        display: "flex",
    }
}
const CustomTimelineSeparator = styled(Box)(
    ({ theme }) => ({
        border: "solid 2px",
        borderRadius: "100%",
        borderColor: "#999",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            flex: 1
        }
    })
)
const CustomTimelineOppositeContent = styled(TimelineOppositeContent)(
    ({ theme }) => ({
        textAlign: "right",
        color: "#ebeef3",
        maxWidth: "130px",
        paddingLeft: 0,
        paddingTop: 0,
        width: "fit-content",
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            paddingBottom: 0,
        }
    })
)
const TimelineLabel = styled(Box)(
    ({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: "#EEF3F7",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        justifyContent: "space-between",
    })
)
const TimelineOppositeContentLabel = styled(TimelineOppositeContent)(
    ({ theme, islast }) => ({
        paddingTop: 0,
        paddingRight: 0,
        margin: "auto 0",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        paddingBottom: theme.spacing(2),
        ...(islast && {
            paddingBottom: 0,
        })
    })
)
const TimelineHead = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
        }
    })
)
const CustomTimelineConnector = styled(TimelineConnector)(
    ({ theme }) => ({
        backgroundColor: "#ebeef3",
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    })
)
const CustomTimelineItem = styled(TimelineItem)(
    ({ theme }) => ({
        ":before": {
            content: "none"
        },
        [theme.breakpoints.down("sm")]: {
            gap: theme.spacing(1),
            flexDirection: "column",
        }
    })
)
const IframeBox = styled(MuiBox)(
    ({ theme }) => ({
        position: "relative",
        overflow: "hidden",
        width: "100%",
        paddingTop: "56.25%",
    })
)
const CircleImage = styled(Box)(
    ({ theme, image }) => ({
        borderRadius: "50%",
        border: "solid 2px",
        borderColor: "white",
        width: "66px",
        height: "66px",
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    })
)
const VRButton = styled(Button)(
    ({ theme }) => ({
        boxShadow: 0,
        borderRadius: "30px",
        backgroundColor: theme.palette.secondary.main,
        padding: `12px 30px`,
        fontWeight: 600
    })
)
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle noWrap sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 12,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};
const secondNavLink = [
    { label: "Giới thiệu", value: 'introduce' },
    { label: "Lịch trình", value: 'timeline' },
    { label: "Bản đồ", value: "map" },
    { label: "Đánh giá", value: 'review' }
]

function TourDetailPage(props) {
    const { classes } = props;
    const [currentImageOpen, setCurrentImageOpen] = useState(null);
    const [vrDialogOpen, setvrDialogOpen] = useState(false);
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [videoDialogOpen, setVideoDialogOpen] = useState(false);
    const params = useParams();
    const pageData = tourData.find(item => item?.id === params?.id);


    const handleVRDialogClose = () => {
        setvrDialogOpen(false);
    }
    const handleImageDialogClose = () => {
        setImageDialogOpen(false);
    }
    const handleVideoDialogClose = () => {
        setVideoDialogOpen(false);
    }
    const handleVRButtonClick = (index) => {
        setvrDialogOpen(true);
    }
    const handleImageClick = (index) => {
        setCurrentImageOpen(index);
        setImageDialogOpen(true);
    }
    const handleVideoClick = (index) => {
        setVideoDialogOpen(true);
    }


    const handleImageDialogBackButtonClick = () => {
        let currentIndex = currentImageOpen;
        currentIndex++;
        if (currentIndex > images.length - 1) currentIndex = 0;
        setCurrentImageOpen(currentIndex);
    }
    const handleImageDialogForwardButtonClick = () => {
        let currentIndex = currentImageOpen;
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        setCurrentImageOpen(currentIndex);
    }

    const timelineBox = () => {
        return (
            <Timeline sx={{ p: 0 }}>
                {
                    timelineData.map((value, index) => {
                        return (
                            <CustomTimelineItem key={index}>
                                <TimelineHead>
                                    <CustomTimelineOppositeContent
                                    >
                                        <Typography sx={{ color: "#888" }} >Ngày</Typography>
                                        <Typography variant="h6" component="span">
                                            {value.time}
                                        </Typography>
                                    </CustomTimelineOppositeContent>
                                    <TimelineSeparator>
                                        <CustomTimelineSeparator>
                                            <Typography sx={{ color: "common.yellow", fontWeight: "500", fontSize: "24px", margin: "auto" }} >
                                                {index + 1}
                                            </Typography>
                                        </CustomTimelineSeparator>
                                        <CustomTimelineConnector />
                                    </TimelineSeparator>
                                </TimelineHead>
                                <TimelineOppositeContentLabel
                                    align="left"
                                    variant="body2"
                                    islast={index === timelineData.length - 1 ? 1 : 0}
                                >
                                    <TimelineLabel>
                                        <Box >
                                            <Typography
                                                variant="h5"
                                                sx={{ textAlign: "left", pb: 1 }}
                                            >
                                                {value.title} - {value.placeName}
                                            </Typography>
                                            <Typography
                                                sx={{ textAlign: "left" }}
                                            >
                                                {value.description}
                                            </Typography>
                                            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", paddingTop: 2 }} >
                                                <VRButton
                                                    variant="contained"
                                                    onClick={() => handleVRButtonClick(index)}
                                                >
                                                    [3D] {value.placeName}
                                                </VRButton>
                                            </Box>
                                        </Box>
                                        <Box sx={{ ml: 1 }} >
                                            <CircleImage image={value.image} />
                                        </Box>
                                    </TimelineLabel>
                                </TimelineOppositeContentLabel>
                            </CustomTimelineItem>
                        )
                    })
                }
            </Timeline>
        )
    }
    const videoDialog = () => {
        return (
            <Dialog fullWidth={true} maxWidth="md" onClose={handleVideoDialogClose} open={videoDialogOpen}>
                <IframeBox>
                    <iframe
                        title='video'
                        className={classes.iframe}
                        width={"100%"}
                        height={"100%"}
                        src="https://www.youtube.com/embed/1NtV5KgRo0c?autoplay=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="1"
                    />
                </IframeBox>
            </Dialog>
        );
    }
    const VRDialog = () => {
        return (
            <Dialog fullWidth={true} maxWidth="md" onClose={handleVRDialogClose} open={vrDialogOpen}>
                <BootstrapDialogTitle onClose={handleVRDialogClose}>
                    Thực tế ảo 3D Cổng trời Quản Bạ
                </BootstrapDialogTitle>
                <IframeBox>
                    <iframe
                        title='3d'
                        className={classes.iframe}
                        width={"100%"}
                        height={"100%"}
                        src="https://my.matterport.com/show/?m=dcL5nzT5CuX&play=1&nozoom=1&qs=1&ts=1&guides=0&lp=1"
                        allowFullScreen
                    />
                </IframeBox>
            </Dialog>
        );
    }
    return (
        <>
            {VRDialog()}
            {videoDialog()}
            <ImageDialog
                images={images}
                open={imageDialogOpen}
                currentImageOpen={currentImageOpen}
                handleClose={handleImageDialogClose}
                handleBackButtonClick={handleImageDialogBackButtonClick}
                handleForwardButtonClick={handleImageDialogForwardButtonClick}
            />
            <HeroBanner
                image={pageData?.banner}
                title={pageData?.title}
                handleImageButtonClick={() => handleImageClick(0)}
            />
            <SecondNav links={secondNavLink} />
            <Container sx={{ py: 3 }}>
                <Grid container spacing={3} >
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Stack sx={{ gap: 4 }} >
                            <DescriptionBox name="introduce" title="Giới thiệu">
                                <Typography>
                                    {pageData?.description}
                                </Typography>
                            </DescriptionBox>
                            <DescriptionBox name="image" title="Hình ảnh">
                                <ImageGridBox images={images} handleClick={handleImageClick} />
                            </DescriptionBox>
                            <DescriptionBox name="video" title="Video">
                                <VideoGridBox videos={videos} handleClick={handleVideoClick} />
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="timeline" title="Lịch trình">
                                {timelineBox()}
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="note" title="Lưu ý:">
                                <Typography >
                                    Do mùa lễ hội hoa tam giác mạch, số lượng khách hàng ghé thăm Hà Giang tăng cao nên số lượng phòng tại Yên Minh và Đồng Văn không đủ để phục vụ Quý khách, PYS Travel sẽ sắp xếp thêm phòng nghỉ tại Quản Bạ và Mèo Vạc đảm bảo dịch vụ chu đáo và đầy đủ lịch trình các điểm thăm quan cho Quý khách.
                                </Typography>
                            </DescriptionBox>

                            <DescriptionBox name="price" title="Giá bao gồm">
                                <Typography lineHeight={1.8}>
                                    Xe Ô tô đời mới đưa đón suốt hành trình.
                                    HDV kinh nghiệm, nhiệt tình suốt hành trình.
                                    Khách sạn tiêu chuẩn đầy đủ tiện nghi, tiêu chuẩn 2 sao 2 khách/phòng (lẻ khách ngủ 3).
                                    Ăn uống theo chương trình (Bữa chính 120.000đ/ khách/ bữa; Ăn sáng 35.000đ/ khách/ bữa).
                                    Vé thắng cảnh vào cửa một lần tại các điểm tham quan.
                                    Vé thuyền tham quan sông Nho Quế
                                    Bảo hiểm du lịch suốt tuyến, mức cao nhất 60.000.000đ/ người/ vụ
                                    Nước uống 01 chai/người/ngày
                                </Typography>
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="map" title="Bản đồ">
                                <iframe
                                    title='map'
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15676.62165382228!2d106.7116703!3d10.79940645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1655805592937!5m2!1svi!2s"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="review" title="Đánh giá">
                                <ReviewBox reviews={reviewData} />
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name={"comment"} title="Viết đánh giá">
                                <LeaveReviewBox />
                            </DescriptionBox>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <DetailBookingBox data={pageData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default withStyles(styles)(TourDetailPage); 