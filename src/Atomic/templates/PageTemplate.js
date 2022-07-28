import { Box } from "@mui/material";
import { useState } from 'react';
import LoginDialog from "../organisms/LoginDialog";
import Footer from "../organisms/Footer";
import ScrollToTopButton from "../molecules/ScrollToTopButton";


//page

function PageTemplate(props) {
    const { Body, Header, Drawer } = props;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);

    return (
        <>
            <LoginDialog open={loginDialogOpen} setOpen={setLoginDialogOpen} />
            <Box minHeight={"100vh"} >
                <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
                <Box>
                    <Header setDrawerOpen={setDrawerOpen} setLoginDialogOpen={setLoginDialogOpen} />
                    {Body}
                </Box>
                <Footer />
            </Box>
            <ScrollToTopButton />
        </>
    )
}

export default PageTemplate;