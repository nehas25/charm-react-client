import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#AD974F",
        },
        secondary: {
            main: "#8E793E"
        }
    },
    typography: {
        fontFamily: 'Parisienne', // cursive
        body2: {
            fontFamily: "Times New Roman",
            fontSize: "1.1rem"
        }
    },
    shape: {
        borderRadius: 0
    },
    spacing: 10,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                padding: '10px'
            }
        }
    },
    props: {
        MuiButton: {
            disableRipple: true,
            variant: 'contained',
            color: "primary"
        },
        MuiCheckbox: {
            disableRipple: true
        },
        MuiTextField: {
            
        }
    }
});