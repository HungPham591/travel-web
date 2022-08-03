import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
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
            footer: "rgba(255, 255, 255, 0.7)",
            white: "#cccccc"
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
            divider: "#ededed"
        },
        background: {
            default: "#F8F8F8",
            main: "rgb(18, 25, 33, 0.3)",
            light: "rgb(18, 25, 33, 0.1)",
            dark: "rgb(18, 25, 33, 0.5)",
            white: "#f8f8f8",
            inputBase: "rgba(255, 255, 255, 0.06)"
        },
    },
    typography: {
        fontFamily: "'Poppins', Helvetica, sans-serif",
        // fontWeightRegular: 500,
        // fontWeightLight: 500,
        // allVariants: {
        //     fontSize: "14px",
        // },
        // body1: {
        //     color: "#555555",
        //     fontWeight: 400,
        //     fontSize: '14px',
        // },
        // button: {
        //     textTransform: 'none'
        // },
        // h1: {
        //     fontSize: '42px',
        // },
        // h2: {
        //     fontSize: '32px',
        // },
        // h3: {
        //     fontSize: "28px",
        //     color: "#333333"
        // },
        // h4: {
        //     fontSize: "24px",
        //     color: "#333333"
        // },
        // h5: {
        //     fontSize: "20px",
        //     color: "#333333"
        // },
        // h6: {
        //     fontSize: "19px",
        //     color: "#555555"
        // },
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
        halfBorderRadius: "0 5px 5px 0",
        border: "2px solid rgb(18, 25, 33, 0.1)"
    },
    components: {
        // MuiDrawer: {
        //     styleOverrides: {
        //         paper: {
        //             backgroundColor: "#F3F3F3"
        //         },
        //     }
        // },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: "white"
        //         }
        //     }
        // },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '1px 1px 10px rgb(18, 25, 33, 0.2 )',
                }
            },
        },
        // MuiLink: {
        //     styleOverrides: {
        //         root: ({ theme }) => ({
        //             color: theme.palette.secondary.main,
        //             textDecoration: "none",
        //             cursor: "pointer"
        //         })
        //     }
        // },
        // MuiInputLabel: {
        //     styleOverrides: {
        //         root: {
        //             marginBottom: "3px",
        //         }
        //     }
        // },
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


export default mainTheme;