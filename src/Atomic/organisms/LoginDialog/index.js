import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Checkbox, Divider, FormControlLabel, IconButton, Link, Stack, styled, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
    buttonTitle: {
        position: "absolute",
        left: 50,
        right: 50,
        fontWeight: 500,
        color: "white",
        textAlign: "center"
    },
}
const SocialButton = styled(Button)(
    ({ theme, socialname }) => ({
        backgroundColor: theme.palette.common[socialname],
        justifyContent: "left",
        position: "relative"
    })
)
const LoginButton = styled(Button)(
    ({ theme }) => ({
        display: "block",
        backgroundColor: theme.palette.secondary.main,
        fontWeight: 600,
    })
)
const DialogBody = styled(Box)(
    ({ theme }) => ({
        overflow: "hidden",
        position: "relative",
        [theme.breakpoints.up("sm")]: {
            minWidth: "350px",
        }
    })
)
const CloseDialogButton = styled(IconButton)(
    ({ theme }) => ({
        marginRight: theme.spacing(1),
        color: theme.palette.grey[500],
    })
)
const SignInFormBox = styled(Stack)(
    ({ theme, open }) => ({
        padding: theme.spacing(2),
        ...(open && {
            zIndex: 0,
            opacity: 0,
        })
    })
)
const ForgotPasswordFormBox = styled(Box)(
    ({ theme, open }) => ({
        top: 0,
        width: 0,
        height: 0,
        position: "absolute",
        backgroundColor: "white",
        padding: theme.spacing(2),
        opacity: 0,
        transition: "opacity 0.5s",
        ...(open && {
            width: "100%",
            height: "100%",
            display: "block",
            opacity: 1,
        })
    })
)
function LoginDialog(props) {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const { classes } = props;
    const { open, setOpen } = props;

    const handleForgotPasswordClick = () => {
        setIsForgotPassword(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const signInForm = () => {
        return (
            <SignInFormBox gap={2} open={isForgotPassword}>
                <SocialButton socialname="facebook" variant='contained' fullWidth>
                    <FacebookIcon />
                    <Typography color={"white"} className={classes.buttonTitle} noWrap> Đăng nhập với Facebook</Typography>
                </SocialButton>
                <SocialButton socialname="google" variant='contained' fullWidth>
                    <GoogleIcon />
                    <Typography color={"white"} className={classes.buttonTitle} noWrap> Đăng nhập với Google</Typography>
                </SocialButton>
                <Box sx={{ position: "relative" }}>
                    <Typography fontStyle={"italic"} sx={{ position: "absolute", left: "42%", top: "-10px", bgcolor: "white", zIndex: 1, paddingX: 1 }}>Hoặc</Typography>
                    <Divider sx={{ position: "absolute", left: 0, top: 0, right: 0 }} />
                </Box>
                <TextField label="Email" size='small' fullWidth type={"email"} InputProps={{ startAdornment: < MailOutlineIcon /> }} />
                <TextField label="Mật khẩu" size='small' fullWidth type={"password"} InputProps={{ startAdornment: < LockOpenIcon /> }} />
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <FormControlLabel color='common.grey' control={<Checkbox />} label="Lưu mật khẩu" />
                    <Typography><Link variant='subtitle2' color={"common.grey"} onClick={handleForgotPasswordClick}>Quên mật khẩu?</Link ></Typography>
                </Box>
                <LoginButton variant='contained' fullWidth>Đăng nhập</LoginButton>
                <Box textAlign={"center"}>
                    <Typography display="inline" >Không có tài khoản? </Typography>
                    <RouterLink to="/register" onClick={handleClose}>
                        <Typography display={"inline"} color={"secondary.main"}>Đăng ký</Typography>
                    </RouterLink>
                </Box>
            </SignInFormBox>
        )
    }
    const forgotPasswordForm = () => {
        return (
            <ForgotPasswordFormBox open={isForgotPassword}>
                <TextField label="Email" placeholder='Email đăng nhập' size='small' fullWidth type={"email"} InputProps={{ startAdornment: < MailOutlineIcon /> }} />
                <Typography mt={2}>Bạn sẽ nhận được một email chứa một link cho phép bạn thiết lặp lại mật khẩu của bạn.</Typography>
                <LoginButton variant='contained' sx={{ mx: "auto", mt: 2 }}>Reset Password</LoginButton>
            </ForgotPasswordFormBox>
        )
    }

    return (
        <Dialog disableScrollLock={true} onClose={handleClose} open={open}>
            <Box display={"flex"} justifyContent="space-between" bgcolor={"background.default"}>
                <DialogTitle fontSize={"18px"}>Đăng Nhập</DialogTitle>
                <Box display={"block"} mt={"auto"} mb={"auto"}>
                    <CloseDialogButton onClick={handleClose}>
                        <CloseIcon />
                    </CloseDialogButton>
                </Box>
            </Box>
            <DialogBody position={"relative"}>
                {signInForm()}
                {forgotPasswordForm()}
            </DialogBody>
        </Dialog>
    );
}
export default withStyles(styles)(LoginDialog);