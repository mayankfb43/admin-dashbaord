import { createTheme } from '@mui/material/styles';

// -----------------------------------
// 🎯 TYPE AUGMENTATION
// -----------------------------------
declare module '@mui/material/styles' {
  interface Theme {
    layout: {
      drawerWidth: number;
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
      drawerWidth?: number;
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
}

// -----------------------------------
// 🎯 THEME
// -----------------------------------
const theme = createTheme({
  // -----------------------------
  // 📐 LAYOUT & SPACING TOKENS
  // -----------------------------
  layout: {
    drawerWidth: 250,
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
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h1: {
      fontSize: '2rem', // 32px
      fontWeight: 700,
    },
    h2: { 
      fontSize: '1.5rem', // 24px
      fontWeight: 600 
    },
    h3: { 
      fontSize: '1.25rem', // 20px
      fontWeight: 600 
    },
    h4: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600
    },
    body1: { 
      fontSize: '1rem', // 16px
    },
    body2: { 
      fontSize: '0.875rem', // 14px
      color: '#6B7280' 
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400
    },
    overline: {
      fontSize: '0.625rem', // 10px
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  // -----------------------------
  // 🔲 SHAPE
  // -----------------------------
  shape: {
    borderRadius: 25,
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
          borderRadius: 25,
          border: '1px solid #E5E7EB',
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