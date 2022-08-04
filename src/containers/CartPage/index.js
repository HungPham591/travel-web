import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, Button, Divider, Grid, IconButton, Step, StepConnector, StepLabel, Stepper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DetailCheckoutBox from '../../Atomic/organisms/DetailCheckoutBox';


const HeroImage = styled(Box)(
    ({ theme, image }) => ({
        backgroundImage: `url("${image}")`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "60vh",
        maxHeight: '450px',
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
    [theme.breakpoints.down("sm")]: {
        display: "block",
        paddingLeft: "50%",
        width: "100%",
        textAlign: "left",
        "&::before": {
            content: `"${label}"`,
            display: "block",
            position: "absolute",
            left: theme.spacing(5),
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

}));


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
            <Typography sx={{ position: "absolute", top: -35, color: "white", fontWeight: 600 }} noWrap>{steps[String(props.icon - 1)]}</Typography>
        </ColorlibStepIconRoot>
    );
}
const heroBanner = () => {
    return (
        <HeroImage image="https://prototype.hahalolo.com/hagiang/img/pattern_1.svg">
            <Container>
                <Stepper activeStep={0} connector={<ColorlibConnector />} alternativeLabel>
                    {steps.map(label => (
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
const avatar = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomAvatar >A</CustomAvatar>
            <Typography >Persius delenit has cu</Typography>
        </Box>
    )
}
const deleteButton = () => <IconButton><DeleteIcon sx={{ color: theme => theme.palette.secondary.main }} /></IconButton>
const tableData = [
    {
        item: avatar(),
        discount: "0%",
        price: "24,71$",
        actions: deleteButton()
    },
    {
        item: avatar(),
        discount: "0%",
        price: "24,71$",
        actions: deleteButton()
    },
    {
        item: avatar(),
        discount: "0%",
        price: "24,71$",
        actions: deleteButton()
    },
    {
        item: avatar(),
        discount: "0%",
        price: "24,71$",
        actions: deleteButton()
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
                                        <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }} noWrap>
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
        <Box sx={{ minHeight: "100vh" }} >
            {heroBanner()}
            <Container sx={{ py: 6 }}>
                <Grid container spacing={3}>
                    <Grid item lg={8} sm={12} md={8} xs={12}>
                        {table()}
                        <Divider />
                        <Box sx={{ my: 3, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
                            <Box sx={{ display: "flex", gap: 2 }} >
                                <TextField
                                    placeholder='Mã giảm giá'
                                    variant="outlined"
                                    size="small"
                                />
                                <Button variant='outlined' sx={{ whiteSpace: "nowrap", color: theme => theme.palette.grey[500], borderColor: theme => theme.palette.grey[500] }}>Áp dụng mã giảm giá</Button>
                            </Box>
                            <Button variant='outlined' sx={{ color: theme => theme.palette.grey[500], borderColor: theme => theme.palette.grey[500] }}>Cập nhật giỏ hàng</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={4} sm={12} md={4} xs={12}>
                        <DetailCheckoutBox buttonTitle="Thanh toán" handlePurchaseButtonClick={handlePurchaseButtonClick} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CartPage; 