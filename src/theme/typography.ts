import { TypographyOptions } from "@mui/material/styles/createTypography";

// Extension du type Typography pour ajouter des variantes personnalisées
declare module "@mui/material/styles" {
  interface TypographyVariants {
    display1: React.CSSProperties;
    eyebrow: React.CSSProperties;
    highlightTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    eyebrow?: React.CSSProperties;
    highlightTitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    eyebrow: true;
    highlightTitle: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily:
    '"Figtree Variable", "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  // Poids de police Figtree
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  // Tailles de base
  fontSize: 16,
  htmlFontSize: 16,

  // Variantes standard
  h1: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 900, // Black
    fontSize: "3.5rem", // 56px
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    "@media (max-width:600px)": {
      fontSize: "2.5rem", // 40px
    },
  },
  h2: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 800, // ExtraBold
    fontSize: "2.75rem", // 44px
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    "@media (max-width:600px)": {
      fontSize: "2rem", // 32px
    },
  },
  h3: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 700, // Bold
    fontSize: "2.25rem", // 36px
    lineHeight: 1.3,
    "@media (max-width:600px)": {
      fontSize: "1.75rem", // 28px
    },
  },
  h4: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 700, // Bold
    fontSize: "1.875rem", // 30px
    lineHeight: 1.3,
    "@media (max-width:600px)": {
      fontSize: "1.5rem", // 24px
    },
  },
  h5: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 600, // SemiBold
    fontSize: "1.5rem", // 24px
    lineHeight: 1.4,
    "@media (max-width:600px)": {
      fontSize: "1.25rem", // 20px
    },
  },
  h6: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 600, // SemiBold
    fontSize: "1.25rem", // 20px
    lineHeight: 1.4,
    "@media (max-width:600px)": {
      fontSize: "1.125rem", // 18px
    },
  },
  subtitle1: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 500, // Medium
    fontSize: "1.125rem", // 18px
    lineHeight: 1.5,
  },
  subtitle2: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 500, // Medium
    fontSize: "1rem", // 16px
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 400, // Regular
    fontSize: "1rem", // 16px
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 400, // Regular
    fontSize: "0.875rem", // 14px
    lineHeight: 1.6,
  },
  button: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 600, // SemiBold
    fontSize: "0.875rem", // 14px
    lineHeight: 1.2,
    textTransform: "none",
    letterSpacing: "0.01em",
  },
  caption: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 400, // Regular
    fontSize: "0.75rem", // 12px
    lineHeight: 1.4,
  },
  overline: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 500, // Medium
    fontSize: "0.75rem", // 12px
    lineHeight: 1.4,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  // Variantes personnalisées
  display1: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 900, // Black
    fontSize: "4.5rem", // 72px
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    "@media (max-width:600px)": {
      fontSize: "3rem", // 48px
    },
  },
  eyebrow: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 500, // Medium
    fontSize: "0.875rem", // 14px
    lineHeight: 1.4,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#666666",
  },
  highlightTitle: {
    fontFamily: '"Figtree Variable", "Figtree", sans-serif',
    fontWeight: 800, // ExtraBold
    fontSize: "2.5rem", // 40px
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    position: "relative",
    display: "inline-block",
    "@media (max-width:600px)": {
      fontSize: "2rem", // 32px
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0.2em",
      left: "0",
      right: "0",
      height: "0.3em",
      backgroundColor: "#f1861f", // Orange highlight
      opacity: 0.3,
      zIndex: -1,
      borderRadius: "2px",
    },
  },
};
