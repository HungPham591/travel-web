import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, Divider, Grid, IconButton, Step, StepConnector, StepLabel, Stepper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DetailCheckoutBox from '../../Atomic/organisms/DetailCheckoutBox';


const HeroImage = styled(MuiBox)(
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

const steps = [
    'GIỎ HÀNG',
    'THANH TOÁN',
    'HOÀN THÀNH!',
];
const StyledTableHead = styled(TableHead)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))
//padding display block vs display tablecell
const StyledTableCell = styled(TableCell)(({ theme, label }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
        display: "block",
        paddingLeft: "50%",
        width: "100%",
        textAlign: "left",
        color: "#212529",
        "&::before": {
            content: `"${label}"`,
            display: "block",
            position: "absolute",
            left: "30px",
            fontWeight: "bold"
        }
    }
}));
//display block vs display tablerow
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    [theme.breakpoints.up("sm")]: {
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    },
    [theme.breakpoints.down("sm")]: {
        display: "block",
        border: '0.5px solid rgb(238, 238, 238)',
    }
}));
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
            borderRadius: "100%",
            width: 30,
            height: 30,
        },
    }),

}));

const CustomButton = styled(MuiButton)(
    ({ theme }) => ({
        borderColor: "#999999",
        color: "#999999",
        border: "solid 2px",
        fontWeight: 600,
        whiteSpace: "nowrap",
        ":hover": {
            border: "solid 2px",
            borderColor: theme.palette.primary.main,
            color: "white",
            backgroundColor: theme.palette.primary.main
        }
    })
);
const CustomAvatar = styled(Avatar)(
    ({ theme }) => ({
        width: "60px",
        height: "60px",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
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
                <Stepper activeStep={0} connector={<ColorlibConnector />} alternativeLabel>
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
const tableTitle = [
    "MẶT HÀNG",
    "GIẢM GIÁ",
    "GIÁ",
    "THAO TÁC",
]
const tableData = [
    {
        item: (
            <Box display={"flex"} alignItems={"center"}>
                <CustomAvatar >A</CustomAvatar>
                <Typography >Persius delenit has cu</Typography>
            </Box>
        ),
        discount: "0%",
        price: "24,71$",
        actions: <IconButton><DeleteIcon sx={{ color: 'secondary.main' }} /></IconButton>
    },
    {
        item: (
            <Box display={"flex"} alignItems={"center"}>
                <CustomAvatar >A</CustomAvatar>
                <Typography >Persius delenit has cu</Typography>
            </Box>
        ),
        discount: "0%",
        price: "24,71$",
        actions: <IconButton><DeleteIcon sx={{ color: 'secondary.main' }} /></IconButton>
    },
    {
        item: (
            <Box display={"flex"} alignItems={"center"}>
                <CustomAvatar >A</CustomAvatar>
                <Typography >Persius delenit has cu</Typography>
            </Box>
        ),
        discount: "0%",
        price: "24,71$",
        actions: <IconButton><DeleteIcon sx={{ color: 'secondary.main' }} /></IconButton>
    },
    {
        item: (
            <Box display={"flex"} alignItems={"center"}>
                <CustomAvatar >A</CustomAvatar>
                <Typography >Persius delenit has cu</Typography>
            </Box>
        ),
        discount: "0%",
        price: "24,71$",
        actions: <IconButton><DeleteIcon sx={{ color: 'secondary.main' }} /></IconButton>
    }
];
const tableCellAlign = [
    "left",
    "left",
    "center",
    "center",
];
const cellWidth = [
    "55%",
    "15%",
    "15%",
    "15%"
]
function CartPage() {
    const navigate = useNavigate();
    const handlePurchaseButtonClick = () => {
        navigate("/cart-2");
    }
    const table = () => {
        return (
            <TableContainer>
                <Table>
                    <StyledTableHead>

                        <TableRow>
                            {tableTitle.map((value, index) => {
                                return (
                                    <TableCell align={tableCellAlign[index]} width={cellWidth[index]} key={index}>
                                        <Typography fontWeight={600} textTransform={"uppercase"} noWrap>
                                            {value}
                                        </Typography>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </StyledTableHead>
                    <TableBody>
                        {
                            tableData.map((value1, index1) => {
                                return (
                                    <StyledTableRow key={index1}>
                                        {Object.values(value1).map((value2, index2) => {
                                            return (
                                                <StyledTableCell label={Object.keys(value1)[index2]} align={tableCellAlign[index2]} width={cellWidth[index2]} key={index2}>
                                                    {value2}
                                                </StyledTableCell>
                                            )
                                        })}
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (
        <Box minHeight={"100vh"}>
            {heroBanner()}
            <Container sx={{ py: 6 }}>
                <Grid spacing={3} container>
                    <Grid lg={8} sm={12} md={8} xs={12} item>
                        {table()}
                        <Divider />
                        <Box my={3} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
                            <Box display={"flex"} gap={2}>
                                <TextField
                                    placeholder='Mã giảm giá'
                                    variant="outlined"
                                    size="small"
                                />
                                <CustomButton
                                    size='small'
                                >
                                    Áp dụng mã giảm giá
                                </CustomButton>
                            </Box>
                            <CustomButton
                                size='small'
                            >
                                Cập nhật giỏ hàng
                            </CustomButton>
                        </Box>
                    </Grid>
                    <Grid lg={4} sm={12} md={4} xs={12} item>
                        <DetailCheckoutBox buttonTitle="Thanh toán" handlePurchaseButtonClick={handlePurchaseButtonClick} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CartPage; 