import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { productData } from "../../api/fakeData";
import DescriptionBox from "../../Atomic/organisms/DescriptionBox";
import DetailBookingBox from "../../Atomic/organisms/DetailBookingBox";
import HeroBanner from "../../Atomic/organisms/HeroBanner";
import ImageDialog from "../../Atomic/organisms/ImageDialog";
import ImageGridBox from "../../Atomic/organisms/ImageGridBox";
import LeaveReviewBox from "../../Atomic/organisms/LeaveReviewBox";
import ReviewBox from "../../Atomic/organisms/ReviewBox";
import SecondNav from "../../Atomic/organisms/SecondNav";

const images = [
    '/Images/pageBanner/hotelDetailBanner.jpg',
    '/Images/pageBanner/placeDetailBanner.jpg',
    '/Images/pageBanner/productDetailBanner.jpg',
    '/Images/pageBanner/restaurantDetailBanner.jpg',
    '/Images/pageBanner/tourDetailBanner.jpg',
];
const reviewData = [
    {
        stars: 4,
        avatar: "/Images/avatar/avatar1.jpg",
        account: "Admin",
        time: "April 03, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 4,
        avatar: "/Images/avatar/avatar2.jpg",
        account: "Ahsan",
        time: "April 01, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 5,
        avatar: "/Images/avatar/avatar3.jpg",
        account: "Sara",
        time: "March 31, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
    {
        stars: 5,
        avatar: "/Images/avatar/avatar1.jpg",
        account: "Admin",
        time: "April 03, 2016",
        content: "Sản phẩm rất tốt hơn cả mong đợi. Dịch vụ rất tuyệt vời, nếu có cơ hội tôi sẽ quay lại và ủng hộ vì sự chu đáo và nhiệt tình này",
    },
];


const secondNavLink = [
    { label: "Giới thiệu", value: 'introduce' },
    { label: "Đánh giá", value: 'review' }
]

function ProductDetailPage() {
    const [currentImageOpen, setCurrentImageOpen] = useState(null);
    const [imageDialogOpen, setImageDialogOpen] = useState(false);
    const params = useParams();
    const pageData = productData.find(item => item?.id === params?.id);

    const handleImageDialogClose = () => {
        setImageDialogOpen(false);
    }
    const handleImageClick = (index) => {
        setCurrentImageOpen(index);
        setImageDialogOpen(true);
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

    return (
        <>
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
                    <Grid item lg={8} md={8} sm={12} xs={12} >
                        <Stack sx={{ gap: 4 }} >
                            <DescriptionBox name="introduce" title="Giới thiệu">
                                <Typography>
                                    {pageData?.description}
                                </Typography>
                            </DescriptionBox>
                            <DescriptionBox name="image" title="Hình ảnh">
                                <ImageGridBox images={images} handleClick={handleImageClick} />
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
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <DetailBookingBox data={pageData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProductDetailPage; 