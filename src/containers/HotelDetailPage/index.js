import { Box, Dialog, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import MuiBox from '@mui/material/Box';
import { Container } from "@mui/system";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import DescriptionBox from "../../Atomic/organisms/DescriptionBox";
import DetailBookingBox from "../../Atomic/organisms/DetailBookingBox";
import HeroBanner from "../../Atomic/organisms/HeroBanner";
import ImageDialog from "../../Atomic/organisms/ImageDialog";
import ImageGridBox from "../../Atomic/organisms/ImageGridBox";
import LeaveReviewBox from "../../Atomic/organisms/LeaveReviewBox";
import ReviewBox from "../../Atomic/organisms/ReviewBox";
import SecondNav from "../../Atomic/organisms/SecondNav";
import VideoGridBox from "../../Atomic/organisms/VideoGridBox";
import AirConditionIcon from '../../icons/airConditionIcon';
import FreeWifiIcon from '../../icons/freeWifiIcon';
import HairDryerIcon from '../../icons/hairDryerIcon';
import ShowerIcon from '../../icons/showerIcon';
import SingleBedIcon from '../../icons/singleBedIcon';
import { hotelData } from "../../api/fakeData";

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


const IframeDialogBox = styled(MuiBox)(
    ({ theme }) => ({
        position: "relative",
        overflow: "hidden",
        width: "100%",
        paddingTop: "56.25%",
    })
)
const StyledRow = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const secondNavLink = [
    { label: "Thực tế ảo 3D", value: '3d' },
    { label: "Giới thiệu", value: 'introduce' },
    { label: "Media", value: 'media' },
    { label: "Loại phòng", value: 'room-type' },
    { label: "Bản đồ", value: "map" },
    { label: "Đánh giá", value: 'review' }
]
const hotelDetails = [
    {
        image: "/Images/hotelDetail1.jpg",
        title: "Phòng đơn",
        description: "Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng."
    },
    {
        image: "/Images/hotelDetail2.jpg",
        title: "Phòng đôi",
        description: "Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng."
    },
    {
        image: "/Images/hotelDetail3.jpg",
        title: "Phòng đặc biệt",
        description: "Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng."
    }
]

function HotelDetailPage() {
    const [currentImageOpen, setCurrentImageOpen] = useState(null);
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const [videoDialogOpen, setVideoDialogOpen] = useState(false);
    const params = useParams();
    // const [pageData, setPageData] = useState(hotelData.find(item => item?.id === params?.id));
    const pageData = hotelData.find(item => item?.id === params?.id);

    const handleImageDialogClose = () => {
        setImageDialogOpen(false);
    }
    const handleVideoDialogClose = () => {
        setVideoDialogOpen(false);
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

    const videoDialog = (open, handleClose) => {
        return (
            <Dialog fullWidth={true} maxWidth="md" disableScrollLock={true} onClose={handleClose} open={open}>
                <IframeDialogBox>
                    <iframe
                        title="video"
                        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, border: 0 }}
                        width={"100%"}
                        height={"100%"}
                        src="https://www.youtube.com/embed/1NtV5KgRo0c?autoplay=1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="1"
                    />
                </IframeDialogBox>
            </Dialog>
        );
    }
    const roomTypeBox = () => {
        return (
            <>
                {
                    hotelDetails.map((value, index) => {
                        return (
                            <StyledRow key={index}>
                                <Grid spacing={3} container>
                                    <Grid lg={4} md={4} sm={4} item>
                                        <img style={{ width: "100%", height: "auto" }} src={value.image} className="img-fluid" alt="" />
                                    </Grid>
                                    <Grid lg={8} md={8} sm={8} item>
                                        <Typography variant="h4" mb={1} fontSize={"18px"}>{value.title}</Typography>
                                        <Typography variant="body1" mb={2}>{value.description}</Typography>
                                        <Grid spacing={2} container item>
                                            <Grid xl={6} lg={6} md={6} ms={6} xs={6} display={"flex"} item><SingleBedIcon /><Typography variant="body1" ml={"8px"}>Giường đơn</Typography></Grid>
                                            <Grid xl={6} lg={6} md={6} ms={6} xs={6} display={"flex"} item><AirConditionIcon /><Typography variant="body1" ml={"8px"}>Máy điều hòa</Typography></Grid>
                                            <Grid xl={6} lg={6} md={6} ms={6} xs={6} display={"flex"} item><FreeWifiIcon /><Typography variant="body1" ml={"8px"}>Wifi miễn phí</Typography></Grid>
                                            <Grid xl={6} lg={6} md={6} ms={6} xs={6} display={"flex"} item><HairDryerIcon /><Typography variant="body1" ml={"8px"}>Máy sấy tóc</Typography></Grid>
                                            <Grid xl={6} lg={6} md={6} ms={6} xs={6} display={"flex"} item><ShowerIcon /><Typography variant="body1" ml={"8px"}>Vòi sen</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledRow>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            {videoDialog(videoDialogOpen, handleVideoDialogClose)}
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
                <Grid spacing={3} container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <DescriptionBox name="3d" title="">
                            <iframe title="3d" width="100%" style={{ aspectRatio: 16 / 9 }} src="https://my.matterport.com/show/?m=NRoQ6ffpUHf&amp;play=1&amp;nozoom=1&amp;qs=1&amp;ts=1&amp;guides=0&amp;lp=1" frameBorder="0" allowFullScreen="" />
                        </DescriptionBox>
                    </Grid>
                    <Grid lg={8} md={8} sm={12} xs={12} item>
                        <Stack gap={4}>
                            <DescriptionBox name="introduce" title="Giới thiệu">
                                <Typography fontSize={"0.875rem"} fontWeight={400}>
                                    {pageData?.description}
                                </Typography>
                            </DescriptionBox>
                            <DescriptionBox name="media" title="Hình ảnh">
                                <ImageGridBox images={images} handleClick={handleImageClick} />
                            </DescriptionBox>
                            <DescriptionBox name="video" title="Video">
                                <VideoGridBox videos={videos} handleClick={handleVideoClick} />
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="room-type" title="">
                                {roomTypeBox()}
                            </DescriptionBox>
                            <Divider />
                            <DescriptionBox name="map" title="Bản đồ">
                                <iframe
                                    title="map"
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
                    <Grid lg={4} md={4} sm={12} xs={12} item>
                        <DetailBookingBox data={pageData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default HotelDetailPage; 