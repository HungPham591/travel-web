import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0054A6',
        },
        secondary: {
            main: '#FC5B62',
        },
        text: {
            primary: '#555555',
            main: "#333333",
            light: "#555555",
            footer: "rgba(255, 255, 255, 0.7)"
        },
        warning: {
            main: '#FFC107'
        },
        common: {
            yellow: '#FFC107',
            green: "#32A067",
            facebook: "#3B5998",
            google: "#DC4E41",
            twitter: "#1DA1F2",
            grey: "#999999",
            black: "#121921",
            gray: "#e1e1e1",
        },
        background: {
            default: "#F8F8F8",
            main: "rgb(18, 25, 33, 0.3)",
            dark: "rgb(18, 25, 33, 0.5)",
            white: "#f8f8f8",
        },
    },
    typography: {
        fontFamily: "'Poppins', Helvetica, sans-serif",
        fontWeightRegular: 500,
        fontWeightLight: 500,
        allVariants: {
            fontSize: "14px",
            // color: "#555555"
        },
        body1: {
            color: "#555555",
            fontWeight: 400,
            fontSize: '14px',
        },
        button: {
            textTransform: 'none'
        },
        subtitle1: {
            fontSize: "12px",
            color: "#999999",
        },
        subtitle2: {
            fontSize: "13px",
            color: "#999999",
        },
        h1: {
            fontSize: '42px',
        },
        h2: {
            fontSize: '32px',
        },
        h3: {
            fontSize: "28px",
            color: "#333333"
        },
        h4: {
            fontSize: "24px",
            color: "#333333"
        },
        h5: {
            fontSize: "20px",
            color: "#333333"
        },
        h6: {
            fontSize: "21px",
            color: "#555555"
        },
        h7: {
            fontSize: "18px",
            color: "#555555"
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1280,
            lg: 1440,
            xl: 2560,
        },
    },
    shape: {
        borderRadius: 5,
    },
    transitions: {
        duration: {
            standard: 300
        }
    },
    components: {
        // MuiContainer: {
        //     styleOverrides: {
        //         maxWidthLg: "1440px",
        //     },
        // },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#F3F3F3"
                },
                root: {
                    // opacity: 0.3
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "white"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '1px 1px 10px rgb(18, 25, 33, 0.2 )',
                }
            },
        },
        MuiLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    cursor: "pointer"
                })
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    marginBottom: "3px",
                }
            }
        },
        MuiDialog: {
            defaultProps: {
                PaperProps: {
                    style: { maxWidth: "800px" }
                },
                disableScrollLock: true,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    color: "#444444",
                    backgroundColor: "white",
                    position: "fixed",
                    borderBottom: "1px solid #e0e0e0",
                    transition: "0.5s",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    ":hover": {
                        boxShadow: "none",
                    }
                }
            }
        }
    }
});


export default theme;