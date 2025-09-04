import { Components, Theme } from "@mui/material/styles";

export const createComponents = (theme: Theme): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "14px",
        textTransform: "none",
        fontWeight: 600,
        padding: "12px 24px",
        fontSize: "0.875rem",
        boxShadow: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: theme.shadows[2],
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "translateY(0px)",
          transition: "transform 0.1s ease",
        },
        "&:focus": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      },
      contained: {
        "&:hover": {
          boxShadow: theme.shadows[4],
          transform: "translateY(-2px)",
        },
        "&:active": {
          transform: "translateY(0px)",
          boxShadow: theme.shadows[2],
        },
      },
      outlined: {
        borderWidth: "1.5px",
        "&:hover": {
          borderWidth: "1.5px",
          transform: "translateY(-1px)",
          boxShadow: theme.shadows[2],
        },
      },
      text: {
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transform: "translateY(-1px)",
        },
      },
      sizeSmall: {
        padding: "8px 16px",
        fontSize: "0.75rem",
        borderRadius: "12px",
      },
      sizeLarge: {
        padding: "16px 32px",
        fontSize: "1rem",
        borderRadius: "16px",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "18px",
        boxShadow: theme.shadows[2],
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: theme.shadows[6],
          transform: "translateY(-4px)",
        },
        "&:active": {
          transform: "translateY(-2px)",
          transition: "transform 0.1s ease",
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "24px",
        "&:last-child": {
          paddingBottom: "24px",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "14px",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "& fieldset": {
            borderWidth: "1.5px",
            transition: "border-color 0.2s ease",
          },
          "&:hover fieldset": {
            borderWidth: "1.5px",
            borderColor: theme.palette.primary.main + "60",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px",
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
          },
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "14px",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "& fieldset": {
          borderWidth: "1.5px",
          transition: "border-color 0.2s ease",
        },
        "&:hover fieldset": {
          borderWidth: "1.5px",
          borderColor: theme.palette.primary.main + "60",
        },
        "&.Mui-focused fieldset": {
          borderWidth: "2px",
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        fontWeight: 500,
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: theme.shadows[2],
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      },
      sizeSmall: {
        height: "24px",
        fontSize: "0.75rem",
        borderRadius: "16px",
      },
      sizeMedium: {
        height: "32px",
        fontSize: "0.875rem",
        borderRadius: "20px",
      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[4],
        backdropFilter: "blur(20px)",
        backgroundColor: theme.palette.primary.main,
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
          opacity: 0.8,
        },
      },
      colorDefault: {
        backgroundColor: theme.palette.primary.main,
      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "56px !important",
        padding: "0 16px",
        "@media (min-width: 600px)": {
          minHeight: "64px !important",
          padding: "0 24px",
        },
      },
      dense: {
        minHeight: "48px !important",
        padding: "0 12px",
        "@media (min-width: 600px)": {
          minHeight: "56px !important",
          padding: "0 16px",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper + "80",
        borderRadius: "12px",
        padding: "4px",
        backdropFilter: "blur(10px)",
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1],
      },
      indicator: {
        height: "4px",
        borderRadius: "2px",
        backgroundColor: theme.palette.secondary.main,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: `0 2px 4px ${theme.palette.secondary.main}40`,
      },
      flexContainer: {
        gap: "4px",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.875rem",
        minHeight: "48px",
        borderRadius: "8px",
        padding: "12px 20px",
        margin: "0 2px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          backgroundColor: theme.palette.primary.main + "15",
          transform: "translateY(-1px)",
          boxShadow: theme.shadows[2],
        },
        "&:active": {
          transform: "translateY(0px)",
          transition: "transform 0.1s ease",
        },
        "&.Mui-selected": {
          fontWeight: 600,
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.main + "10",
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "20",
            transform: "translateY(-1px)",
          },
        },
        "&.Mui-focusVisible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        margin: "2px 8px",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transform: "translateX(4px)",
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main + "15",
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "25",
            transform: "translateX(4px)",
          },
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        margin: "2px 8px",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transform: "translateX(4px)",
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main + "15",
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "25",
            transform: "translateX(4px)",
          },
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: "12px",
        boxShadow: theme.shadows[8],
        border: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        margin: "4px 8px",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: "18px",
        boxShadow: theme.shadows[12],
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        "&.MuiAlert-standard": {
          border: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        "& .MuiSnackbarContent-root": {
          borderRadius: "12px",
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: "8px",
        fontSize: "0.75rem",
        backgroundColor: theme.palette.grey[800],
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "& .MuiSwitch-track": {
          borderRadius: "14px",
          transition: "all 0.3s ease",
          backgroundColor: theme.palette.grey[300],
          border: `2px solid ${theme.palette.grey[400]}`,
          "&.Mui-checked": {
            backgroundColor: theme.palette.secondary.main,
            border: `2px solid ${theme.palette.secondary.dark}`,
          },
        },
        "& .MuiSwitch-thumb": {
          borderRadius: "12px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: theme.shadows[4],
          backgroundColor: theme.palette.common.white,
          border: `2px solid ${theme.palette.grey[400]}`,
          "&:hover": {
            boxShadow: theme.shadows[6],
            transform: "scale(1.15)",
          },
          "&.Mui-checked": {
            backgroundColor: theme.palette.common.white,
            border: `2px solid ${theme.palette.secondary.dark}`,
            transform: "translateX(20px)",
          },
        },
        "&.Mui-checked": {
          "& .MuiSwitch-thumb": {
            transform: "translateX(20px)",
          },
        },
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        "& .MuiSlider-thumb": {
          borderRadius: "50%",
          boxShadow: theme.shadows[2],
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: theme.shadows[4],
            transform: "scale(1.2)",
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
          },
        },
        "& .MuiSlider-track": {
          borderRadius: "2px",
          transition: "background-color 0.2s ease",
        },
        "& .MuiSlider-rail": {
          borderRadius: "2px",
          transition: "background-color 0.2s ease",
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "8px",
          fontSize: "0.75rem",
          fontWeight: 600,
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        "&.Mui-checked": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        "&.Mui-checked": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: "12px !important",
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: "0",
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        "&.Mui-expanded": {
          borderRadius: "12px 12px 0 0",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: "16px 24px 24px",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: {
        borderRadius: "10px",
        fontSize: "0.75rem",
        fontWeight: 600,
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        "& .MuiBreadcrumbs-separator": {
          color: theme.palette.text.secondary,
        },
      },
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        "& .MuiStepLabel-label": {
          fontWeight: 500,
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: theme.palette.divider,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-head": {
          fontWeight: 600,
          backgroundColor: theme.palette.grey[50],
          color: theme.palette.text.primary,
          fontSize: "0.875rem",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        "& .MuiTableRow-root": {
          transition: "background-color 0.2s ease",
          "&:nth-of-type(even)": {
            backgroundColor: theme.palette.grey[50],
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "08",
            cursor: "pointer",
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: "16px",
        transition: "background-color 0.2s ease",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
});
