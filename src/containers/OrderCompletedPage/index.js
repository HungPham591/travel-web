import { Box, Step, StepConnector, StepLabel, Stepper, styled, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';


const HeroImage = styled(MuiBox)(
    ({ theme, image }) => ({
        backgroundImage: `url("${image}")`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '600px',
        [theme.breakpoints.down('sm')]: {
            height: "500px"
        },
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


function ColorlibStepIcon(props) {
    const { active, completed, className } = props;


    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            <Box className='dot'></Box>
            <Typography position={"absolute"} top={-35} color={"white"} fontWeight={600} noWrap>{steps[String(props.icon - 1)]}</Typography>
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
                <Typography textAlign={"center"} color="white" variant='h4' mt={2} mb={1}>Hoàn tất đặt hàng!</Typography>
                <Typography textAlign={"center"} color="white" fontSize={"16px"}>Bạn sẽ nhận được email xác nhận tại mail@example.com</Typography>
            </Container>
        </HeroImage>
    )
}

export default CartPage; 