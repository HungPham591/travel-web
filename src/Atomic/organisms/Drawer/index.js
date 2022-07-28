import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse, ListItemIcon, styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { withStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackendRoutes from '../../../routes/BackendRoutes';


const anchor = 'left';


const CustomListItemIcon = styled(ListItemIcon)(
    ({ theme, display }) => ({
        display: "flex",
        justifyContent: "flex-end",
        ...(!display && {
            display: 'none',
        })
    })
)
const StyledDrawer = styled(Drawer)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    })
)
const CustomLink = styled(ListItemText)(
    ({ theme, active }) => ({
        ...(active && {
            color: theme.palette.secondary.main,
        })
    })
)

const styles = {
    listItemText: {
        textAlign: 'center', color: 'rgba(0,0,0,.3)'
    }
}


function CustomDrawer(props) {
    const location = useLocation();
    const [subMenu, setSubMenu] = useState([]);
    const [title, setTitle] = useState("MENU");
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { classes, setOpen } = props;


    const handleCloseDrawer = () => {
        setOpen(false);
        setSubMenu([]);
        setTitle("MENU");
        setSubMenuOpen(false);
    }
    const handleMenuClick = (value, subMenu) => {
        if (subMenu) {
            setSubMenu(value?.element);
            setSubMenuOpen(!subMenuOpen);
        }
        else {
            handleCloseDrawer();
            navigate(value?.path);
        }
    }

    return (
        <StyledDrawer
            transitionDuration={500}
            anchor={anchor}
            open={props.open}
            onClose={handleCloseDrawer}
            disableScrollLock={true}
        >
            <Box
                role="presentation"
                onKeyDown={handleCloseDrawer}
                height={"100vh"}
                width={500}
                maxWidth={"80vw"}
            >
                <List disablePadding>
                    <ListItemButton display={"flex"} >
                        <ListItem disablePadding>
                            <ListItemText className={classes.listItemText} primary={title} />
                        </ListItem>
                    </ListItemButton>
                    <Divider />
                    <Box>
                        {
                            BackendRoutes.map((value, index) => {
                                return (
                                    <Box key={index}>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => handleMenuClick(value, value?.element?.length > 0)}>
                                                <CustomLink disableTypography active={location?.pathname === value?.path ? 1 : 0} primary={value?.label} />
                                                <CustomListItemIcon display={value?.element?.length > 0 ? 1 : 0}>
                                                    <Typography paddingRight={1}>
                                                        {value?.element?.length}
                                                    </Typography>
                                                    {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
                                                </CustomListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        {
                                            value?.element?.length > 0 ?
                                                (
                                                    <Collapse in={subMenuOpen} unmountOnExit>
                                                        <List component='div' sx={{ py: 0 }}>
                                                            {
                                                                subMenu.map((value, index) => {
                                                                    return (
                                                                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuClick(value, value?.element?.length > 0)} key={index}>
                                                                            <CustomLink disableTypography active={location.pathname === value?.path ? 1 : 0} primary={value.label} />
                                                                        </ListItemButton>
                                                                    )
                                                                })
                                                            }
                                                        </List>
                                                    </Collapse>
                                                ) : <></>
                                        }
                                    </Box>
                                )
                            })}
                    </Box>
                </List>
            </Box>
            <Box>
                <Divider />
                <ListItem key={"MENU"} disablePadding>
                    <ListItemButton disabled>
                        <ListItemText className={classes.listItemText} primary={"© 2022 Panagea"} />
                    </ListItemButton>
                </ListItem>
            </Box>
        </StyledDrawer>
    );
}
export default withStyles(styles)(CustomDrawer);