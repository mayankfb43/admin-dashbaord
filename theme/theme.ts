import { createTheme } from '@mui/material/styles';

// -----------------------------------
// 🎯 TYPE AUGMENTATION
// -----------------------------------
declare module '@mui/material/styles' {
  interface Theme {
    layout: {
      drawerWidth: number | Record<string, number>;
      headerHeight: number;
      cardHeight: number;
      chartHeight: number;
      balanceCardHeight: number;
    };
    customSpacing: {
      cardPadding: number | string | Record<string, number | string>;
      sectionMargin: number;
    };
  }
  interface ThemeOptions {
    layout?: {
      drawerWidth?: number | Record<string, number>;
      headerHeight?: number;
      cardHeight?: number;
      chartHeight?: number;
      balanceCardHeight?: number;
    };
    customSpacing?: {
      cardPadding?: number | string | Record<string, number | string>;
      sectionMargin?: number;
    };
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    tablet: true; // New breakpoint
    lg: true;
    xl: true;
  }
}

// -----------------------------------
// 🎯 TOKENS (Synced with Default.tokens.json)
// -----------------------------------
export const TOKENS = {
  typography: {
    fontFamily: {
      sans: "var(--font-lato), 'Lato', 'Inter', 'Roboto', sans-serif",
      serif: "'Noto Serif', serif",
      mono: "var(--font-geist-mono), 'Roboto Mono', monospace",
    },
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    scale: {
      "01": "0.75rem",  // 12px
      "02": "0.875rem", // 14px
      "03": "1rem",     // 16px
      "04": "1.25rem",  // 20px
      "05": "1.5rem",   // 24px
      "06": "2rem",     // 32px
      "07": "2.5rem",   // 40px
      "08": "3rem",     // 48px
      "09": "4rem",     // 64px
      "10": "4.5rem",   // 72px
    }
  },
  color: {
    pink: {
      100: '#FCF1FD',
      200: '#FAE1FA',
      300: '#F5C0EF',
      400: '#F19EDC',
      500: '#EA3FB8',
      600: '#D732A8',
      700: '#BA2A92',
      800: '#8A226F',
      900: '#57184A',
      1000: '#3F1536'
    },
    blue: {
      100: '#F1F6FD',
      200: '#E1EBFA',
      300: '#C0D4F5',
      400: '#9EBEF1',
      500: '#3F81EA',
      600: '#3271D7',
      700: '#2A61BA',
      800: '#224A8A',
      900: '#183057',
      1000: '#15253F'
    }
  },
  size: {
    space: {
      0: 0,
      50: 2,
      100: 4,
      150: 6,
      200: 8,
      300: 12,
      400: 16,
      600: 24,
      800: 32,
      1200: 48,
      1600: 64,
      2400: 96,
      4000: 160
    },
    radius: {
      100: 4,
      200: 8,
      400: 16,
      full: 9999
    },
    stroke: {
      border: 1,
      focusRing: 2
    },
    icon: {
      small: 24,
      medium: 32,
      large: 40
    }
  }
} as const;

// -----------------------------------
// 🎯 THEME
// -----------------------------------
const theme = createTheme({
  // -----------------------------
  // 📐 LAYOUT & SPACING TOKENS
  // -----------------------------
  layout: {
    drawerWidth: { md: 230, lg: 250 },
    headerHeight: 101,
    cardHeight: 235,
    chartHeight: 322,
    balanceCardHeight: 276,
  },

  customSpacing: {
    cardPadding: { xs: 2, md: 3 },
    sectionMargin: 2.5,
  },

  // -----------------------------
  // 📐 BREAKPOINTS
  // -----------------------------
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 1024,
      tablet: 1208,
      lg: 1440,
      xl: 1920,
    },
  },

  // -----------------------------
  // 📏 SPACING (8px grid)
  // -----------------------------
  spacing: 8,

  // -----------------------------
  // 🎨 PALETTE
  // -----------------------------
  palette: {
    mode: 'light',
    primary: {
      main: '#3A36DB',
      light: '#5B57F5',
      dark: '#2B2AAC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00C9A7',
      light: '#4DE1C1',
      dark: '#009E82',
    },
    background: {
      default: '#F5F7FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E1E2D',
      secondary: '#6B7280',
    },
    success: {
      main: '#22C55E',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    divider: '#E5E7EB',
  },

  // -----------------------------
  // 🔤 TYPOGRAPHY
  // -----------------------------
  typography: {
    fontFamily: TOKENS.typography.fontFamily.sans,
    h1: {
      fontSize: TOKENS.typography.scale["06"], // 32px
      fontWeight: TOKENS.typography.weight.bold,
    },
    h2: {
      fontSize: TOKENS.typography.scale["05"], // 24px
      fontWeight: TOKENS.typography.weight.semibold
    },
    h3: {
      fontSize: TOKENS.typography.scale["04"], // 20px
      fontWeight: TOKENS.typography.weight.semibold
    },
    h4: {
      fontSize: TOKENS.typography.scale["03"], // 16px
      fontWeight: TOKENS.typography.weight.semibold
    },
    h5: {
      fontSize: TOKENS.typography.scale["03"], // 16px
      fontWeight: TOKENS.typography.weight.semibold,
    },
    h6: {
      fontSize: TOKENS.typography.scale["02"], // 14px
      fontWeight: TOKENS.typography.weight.semibold,
    },
    body1: {
      fontSize: TOKENS.typography.scale["03"], // 16px
      fontWeight: TOKENS.typography.weight.regular,
    },
    body2: {
      fontSize: TOKENS.typography.scale["02"], // 14px
      fontWeight: TOKENS.typography.weight.regular,
    },
    caption: {
      fontSize: TOKENS.typography.scale["01"], // 12px
      fontWeight: TOKENS.typography.weight.regular,
    },
    overline: {
      fontSize: TOKENS.typography.scale["01"], // 12px
      fontWeight: TOKENS.typography.weight.semibold,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    button: {
      textTransform: 'none',
      fontWeight: TOKENS.typography.weight.semibold
    },
  },

  // -----------------------------
  // 🔲 SHAPE
  // -----------------------------
  shape: {
    borderRadius: 0,
  },

  // -----------------------------
  // 🧩 COMPONENT OVERRIDES
  // -----------------------------
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#F5F7FB' },
      },
    },
    MuiContainer: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: { padding: 0 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {

          boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 25 },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '8px 18px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #5B57F5, #3A36DB)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E5E7EB',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '4px 8px',
          '&.Mui-selected': {
            backgroundColor: '#EEF2FF',
            color: '#3A36DB',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#F1F5F9',
          borderRadius: 999,
          paddingLeft: 12,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
        },
      },
    },
  },
});

export default theme;