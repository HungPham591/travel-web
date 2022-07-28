import { Autocomplete, Box, Divider, Grid, Link, Stack, Step, StepConnector, StepLabel, Stepper, styled, TextField, Typography } from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DetailCheckoutBox from '../../Atomic/organisms/DetailCheckoutBox';
import PaymentIcon from '../../icons/paymentIcon';


const HeroImage = styled(Box)(
    ({ theme, image }) => ({
        backgroundImage: `url("${image}")`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '450px',
        [theme.breakpoints.down('sm')]: {
            height: "350px"
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    })
);
const nationals = [
    { label: "Chọn quốc gia", value: 1 },
    { label: "Europe", value: 2 },
    { label: "United states", value: 3 },
]
const steps = [
    'GIỎ HÀNG',
    'THANH TOÁN',
    'HOÀN THÀNH!',
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "white",
    position: "relative",
    ...(ownerState.active && {
        "& .dot": {
            backgroundColor: theme.palette.common.yellow,
            borderRadius: "50px",
            width: 30,
            height: 30,
        },
    }),
    ...(ownerState.completed && {
        "& .dot": {
            backgroundColor: theme.palette.common.yellow,
            borderRadius: "50px",
            width: 30,
            height: 30,
        },
    }),
}));

const DetailBoxHeader = styled(Box)(
    ({ theme }) => ({
        width: "100%",
        display: "flex",
    })
)
const DetailBoxTitleCircle = styled(Box)(
    ({ theme }) => ({
        borderRadius: "100%",
        width: "40px",
        height: "40px",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: theme.spacing(2)
    })
)
const MarginLeft = styled(Box)(
    ({ theme }) => ({
        width: "40px",
        height: "40px",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    })
)

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;


    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            <Box className='dot'></Box>
            <Typography sx={{ position: "absolute", top: -35, color: "white", fontWeight: 600 }} noWrap>{steps[String(props.icon - 1)]}</Typography>
        </ColorlibStepIconRoot>
    );
}
const heroBanner = () => {
    return (
        <HeroImage image="https://prototype.hahalolo.com/hagiang/img/pattern_1.svg">
            <Container>
                <Stepper activeStep={1} connector={<ColorlibConnector />} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel
                                StepIconComponent={ColorlibStepIcon}
                            >
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Container>
        </HeroImage>
    )
}

const detailBox = (index, title, children) => {
    return (
        <Stack spacing={2}>
            <DetailBoxHeader>
                <DetailBoxTitleCircle>
                    <Typography sx={{ color: "white", fontSize: "18px", fontWeight: 600 }} >{index}</Typography>
                </DetailBoxTitleCircle>
                <Box>
                    <Typography variant='h5' >{title}</Typography>
                    <Typography variant='subtitle1'>Thông tin của bạn được giữ an toàn.</Typography>
                </Box>
            </DetailBoxHeader>
            <Stack flexDirection={"row"}>
                <MarginLeft />
                {children}
            </Stack>
        </Stack >
    )
}

function CheckoutPage() {
    const navigate = useNavigate();
    const handlePurchaseButtonClick = () => {
        navigate("/cart-3");
    }
    return (
        <Box>
            {heroBanner()}
            <Container sx={{ paddingY: 6 }}>
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Stack sx={{ gap: 3 }} >
                            <Box sx={{ backgroundColor: "background.default", borderRadius: 1, padding: 2 }}>
                                <Typography sx={{ display: "inline" }} >Đã có tài khoản? </Typography>
                                <Link sx={{ display: "inline", fontSize: "14px" }} >Nhấp vào đây để đăng nhập</Link>
                            </Box>
                            {
                                detailBox(
                                    1,
                                    "Thông tin của bạn",
                                    (
                                        <Grid container spacing={2} >
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Họ" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Tên" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                                <TextField label="Email" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                                <TextField label="Xác nhận email" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Số điện thoại" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                        </Grid>
                                    )
                                )
                            }
                            <Divider />
                            {
                                detailBox(
                                    2,
                                    "Thông tin thanh toán",
                                    (
                                        <Grid container spacing={2} >
                                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                                <TextField label="Tên card" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Số card" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Box item component={Grid} lg={6} md={6} sm={6} display={{ xl: "block", lg: "block", md: "block", sm: 'block', xs: "none" }} >
                                                <PaymentIcon />
                                            </Box>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <Grid container spacing={2} >
                                                    <Grid item lg={6} sm={6} xs={12} >
                                                        <TextField label="Tháng hết hạn" placeholder='MM' size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                    <Grid item lg={6} sm={6} xs={12} >
                                                        <TextField label="Năm hết hạn" placeholder='Year' size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Mã bảo vệ" placeholder='CCV' size='small' variant='outlined' InputLabelProps={{ shrink: true }} />
                                                <Box sx={{ display: "inline" }} >
                                                    <img src={'/Images/IconCcv.gif'} alt="ccv" style={{ marginLeft: "20px" }} />
                                                    <Typography sx={{ fontSize: "12px", color: "#555555", display: "inline-block" }} >3 số cuối</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                                <Divider sx={{ my: 3 }} />
                                                <Typography sx={{ mb: 1 }} variant='h4'>Hoặc thanh toán với Paypal</Typography>
                                                <Typography variant='body1' sx={{ mb: 3 }} >Nếu một đơn hàng không tới hoặc không khớp với mô tả của người bán, Paypal sẽ hoàn lại toàn bộ chi phí với những giao dịch hợp lệ.</Typography>
                                                <img alt="paypal" src="/Images/paypalButton.png" />
                                            </Grid>
                                        </Grid>
                                    )
                                )
                            }
                            <Divider />
                            {
                                detailBox(
                                    3,
                                    "Địa chỉ thanh toán",
                                    (
                                        <Grid spacing={2} container>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={nationals}
                                                    renderInput={(params) => <TextField {...params} label="Quốc gia" size='small' InputLabelProps={{ shrink: true }} required fullWidth />}
                                                />
                                            </Grid>
                                            <Box item component={Grid} lg={6} md={6} sm={6} display={{ xl: "block", lg: "block", md: "block", sm: 'block', xs: "none" }} >

                                            </Box>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Địa chỉ 1" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Địa chỉ 2" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <TextField label="Thành phố" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                                <Grid container spacing={2}  >
                                                    <Grid item lg={6} md={6} sm={6} xs={12} >
                                                        <TextField label="Tiểu bang" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                    <Grid item lg={6} md={6} sm={6} xs={12} >
                                                        <TextField label="Mã bưu điện" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                )
                            }
                            <Divider />
                            <Box>
                                <Typography variant='h5' sx={{ mb: 1 }}>Chính sách hủy đơn hàng</Typography>
                                <Typography variant='body1'>Chúng tôi luôn tận tâm mang đến trải nghiệm khách hàng chất lượng cao và những sản phẩm tốt nhất cho khách hàng. Để tạo ra trải nghiệm tích cực cho khách hàng, chúng tôi áp dụng chính sách hủy đơn hàng. Người bán được phép tranh chấp về các vi phạm này trong vòng 3 ngày làm việc sau khi có tuyên bố vi phạm.</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <DetailCheckoutBox buttonTitle="Đặt mua" handlePurchaseButtonClick={handlePurchaseButtonClick} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CheckoutPage; 