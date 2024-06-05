import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const BASE_URL = process.env.BASE_URL;

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}

export const Theme = extendTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 768,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: "#00677F",
          dark: "#00677F",
          main: "#004C60",
          contrastText: "#00B6C9",
        },
        secondary: {
          light: "#54575A",
          main: "#FFB600",
          dark: "#051D33",
        },
        info: {
          main: "#00677F",
          dark: "#808285",
          light: "#FAFAFA",
        },
        error: {
          main: "#AB1212",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Avenir", // self-hosted font
      "Avenir-Black",
      "Arial", // fallback font
    ].join(","),
    h1: {
      fontSize: "1.5rem",
      fontFamily: "Avenir-Black",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    h2: {
      fontSize: "1.125rem",
      fontFamily: "Avenir-Black",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    h3: {
      fontSize: "1rem",
      fontFamily: "Avenir-Black",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    h4: {
      fontSize: "0.875rem",
      fontFamily: "Avenir-Black",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    h5: {
      fontSize: "0.875rem",
      fontFamily: "Avenir-Black",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    subtitle1: {
      fontSize: "1rem",
      fontFamily: "Avenir",
      fontWeight: 400,
      lineHeight: "24px",
      fontSynthesis: "none",
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontFamily: "Avenir",
      fontWeight: 800,
      fontSynthesis: "none",
    },
    body1: {
      fontSize: "0.875rem",
      fontFamily: "Avenir",
      fontWeight: 400,
      fontSynthesis: "none",
    },
    body2: {
      fontSize: "1.125rem",
      fontFamily: "Avenir",
      fontWeight: 400,
      fontSynthesis: "none",
    },
    caption: {
      fontFamily: "Avenir",
      color: "black",
    },
    overline: {
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Avenir';
          src: url('${BASE_URL}/assets/fonts/AvenirLTStd-Light.otf') format('truetype'),
               url('${BASE_URL}/assets/fonts/AvenirLTStd-Medium.otf') format('truetype');
          font-style: normal;
        }


        @font-face {
          font-family: 'Avenir-Black';
          src: url('${BASE_URL}/assets/fonts/AvenirLTStd-Black.otf') format('truetype');
          font-style: normal;
        }
        `,
    },
  },
});
