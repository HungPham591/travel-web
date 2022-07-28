import { Autocomplete, Box, Divider, Grid, Link, Stack, Step, StepConnector, StepLabel, Stepper, styled, TextField, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DetailCheckoutBox from '../../Atomic/organisms/DetailCheckoutBox';
import PaymentIcon from '../../icons/paymentIcon';
// import CCVIcon from '../../images/CCVIcon.gif';
// import PaypalImage from '../../images/PaypalImage.png';


const HeroImage = styled(MuiBox)(
    ({ theme, image }) => ({
        backgroundImage: `url("${image}")`,
        backgroundColor: "#0054a6",
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
    backgroundColor: "#0054a6",
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
            <Typography position={"absolute"} top={-35} color={"white"} fontWeight={600} noWrap>{steps[String(props.icon - 1)]}</Typography>
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
                    <Typography color={"white"} fontSize={"18px"} fontWeight={600}>{index}</Typography>
                </DetailBoxTitleCircle>
                <Box>
                    <Typography variant='h3' fontSize={"21px"}>{title}</Typography>
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
                <Grid spacing={3} container>
                    <Grid lg={8} md={8} sm={12} xs={12} item>
                        <Stack gap={3}>
                            <Box padding={2} sx={{ backgroundColor: "background.default", borderRadius: 1 }}>
                                <Typography display={"inline"}>Đã có tài khoản? </Typography>
                                <Link display={"inline"} fontSize={"14px"}>Nhấp vào đây để đăng nhập</Link>
                            </Box>
                            {
                                detailBox(
                                    1,
                                    "Thông tin của bạn",
                                    (
                                        <Grid spacing={2} container>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Họ" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Tên" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                                <TextField label="Email" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                                <TextField label="Xác nhận email" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
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
                                        <Grid spacing={2} container>
                                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                                <TextField label="Tên card" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Số card" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Box component={Grid} lg={6} md={6} sm={6} display={{ xl: "block", lg: "block", md: "block", sm: 'block', xs: "none" }} item>
                                                <PaymentIcon />
                                            </Box>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <Grid spacing={2} container item>
                                                    <Grid lg={6} sm={6} xs={12} item>
                                                        <TextField label="Tháng hết hạn" placeholder='MM' size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                    <Grid lg={6} sm={6} xs={12} item>
                                                        <TextField label="Năm hết hạn" placeholder='Year' size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Mã bảo vệ" placeholder='CCV' size='small' variant='outlined' InputLabelProps={{ shrink: true }} />
                                                <Box display={"inline"}>
                                                    <img src={'/Images/IconCcv.gif'} alt="ccv" style={{ marginLeft: "20px" }} />
                                                    <Typography fontSize={"12px"} color="#555555" display={"inline-block"}>3 số cuối</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                                <Divider sx={{ my: 3 }} />
                                                <Typography mb={1} variant='h4'>Hoặc thanh toán với Paypal</Typography>
                                                <Typography variant='body1' mb={3}>Nếu một đơn hàng không tới hoặc không khớp với mô tả của người bán, Paypal sẽ hoàn lại toàn bộ chi phí với những giao dịch hợp lệ.</Typography>
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
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={nationals}
                                                    renderInput={(params) => <TextField {...params} label="Quốc gia" size='small' InputLabelProps={{ shrink: true }} required fullWidth />}
                                                />
                                            </Grid>
                                            <Box component={Grid} lg={6} md={6} sm={6} display={{ xl: "block", lg: "block", md: "block", sm: 'block', xs: "none" }} item>

                                            </Box>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Địa chỉ 1" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Địa chỉ 2" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <TextField label="Thành phố" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                            </Grid>
                                            <Grid lg={6} md={6} sm={6} xs={12} item>
                                                <Grid spacing={2} container item>
                                                    <Grid lg={6} md={6} sm={6} xs={12} item>
                                                        <TextField label="Tiểu bang" size='small' variant='outlined' InputLabelProps={{ shrink: true }} fullWidth />
                                                    </Grid>
                                                    <Grid lg={6} md={6} sm={6} xs={12} item>
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
                                <Typography variant='h5' mb={1}>Chính sách hủy đơn hàng</Typography>
                                <Typography variant='body1'>Chúng tôi luôn tận tâm mang đến trải nghiệm khách hàng chất lượng cao và những sản phẩm tốt nhất cho khách hàng. Để tạo ra trải nghiệm tích cực cho khách hàng, chúng tôi áp dụng chính sách hủy đơn hàng. Người bán được phép tranh chấp về các vi phạm này trong vòng 3 ngày làm việc sau khi có tuyên bố vi phạm.</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid lg={4} md={4} sm={12} xs={12} item>
                        <DetailCheckoutBox buttonTitle="Đặt mua" handlePurchaseButtonClick={handlePurchaseButtonClick} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CheckoutPage; 