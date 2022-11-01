import { ThemeOptions, createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

const themeOptions: ThemeOptions = {
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#A08744",
      light: "#C9A855",
      dark: "#483A14",
      contrastText: "#f5f5f5",
    },
    secondary: {
      main: "#730099",
      dark: "#41006a",
      light: "#a642cb",
      contrastText: "#f5f5f5",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    error: {
      main: "#f44336",
      dark: "#9e1c1c",
      light: "#e57373",
    },
    success: {
      main: "#66bb6a",
      dark: "#1D6F42",
      light: "#81c784",
    },
  },
  typography: {
    fontFamily:
      '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif, "Inter"',
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.625rem",
    },
    h4: {
      fontSize: "1.375rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          ".MuiAutocomplete-groupLabel": {
            backgroundColor: "#e2dbc7",
          },
          borderRadius: 4,
          overflow: "hidden",
          borderColor: "#EEE",
          borderWidth: "1px",
          borderStyle: "solid",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEE",
          opacity: 0.4,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: "small",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          "&.Mui-disabled": {
            backgroundColor: "#f9f8f5",
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "sm",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiList: {
      defaultProps: {
        dense: false,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        // TODO: most likely this gets overriden by some styles from MUIv4
        // try removing when MUIv4 is gone
        endAdornment: {
          top: "inherit",
        },
        // TODO: remove when this gets merged https://github.com/mui/material-ui/issues/28465
        root: {
          ".MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            paddingRight: "39px",
            // or padding: theme.spacing(X) if you want to be more precise & already defined your theme
          },
        },
        paper: {
          marginTop: "2px",
          border: "1px solid #C5C3C5",
        },
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
