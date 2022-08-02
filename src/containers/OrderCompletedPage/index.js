import { Box, Step, StepConnector, StepLabel, Stepper, styled, Typography } from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';


const HeroImage = styled(Box)(
    ({ theme, image }) => ({
        backgroundImage: `url("${image}")`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maxHeight: '600px',
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    })
);

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
            borderRadius: "100%",
            width: 30,
            height: 30,
        },
    }),
    ...(ownerState.completed && {
        "& .dot": {
            backgroundColor: theme.palette.common.yellow,
            borderRadius: "100%",
            width: 30,
            height: 30,
        },
    }),
}));


function ColorlibStepIcon(props) {
    const { active, completed, className } = props;


    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            <Box className='dot'></Box>
            <Typography sx={{ position: "absolute", top: -35, color: "white", fontWeight: 600 }} noWrap>{steps[String(props.icon - 1)]}</Typography>
        </ColorlibStepIconRoot>
    );
}


function CartPage() {
    return (
        <HeroImage image="https://prototype.hahalolo.com/hagiang/img/pattern_1.svg">
            <Container>
                <Stepper activeStep={2} connector={<ColorlibConnector />} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel
                                StepIconComponent={ColorlibStepIcon}
                            >
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Typography sx={{ textAlign: "center", color: "white", mt: 2, mb: 1 }} variant='h4' >Hoàn tất đặt hàng!</Typography>
                <Typography sx={{ textAlign: "center", color: "white" }}>Bạn sẽ nhận được email xác nhận tại mail@example.com</Typography>
            </Container>
        </HeroImage>
    )
}

export default CartPage; 