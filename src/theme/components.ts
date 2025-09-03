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
        "&:hover": {
          boxShadow: theme.shadows[2],
        },
        "&:focus": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      },
      contained: {
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
      },
      outlined: {
        borderWidth: "1.5px",
        "&:hover": {
          borderWidth: "1.5px",
        },
      },
      text: {
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "18px",
        boxShadow: theme.shadows[2],
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
        transition: "box-shadow 0.2s ease-in-out",
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
          "& fieldset": {
            borderWidth: "1.5px",
          },
          "&:hover fieldset": {
            borderWidth: "1.5px",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1.5px",
          },
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "14px",
        "& fieldset": {
          borderWidth: "1.5px",
        },
        "&:hover fieldset": {
          borderWidth: "1.5px",
        },
        "&.Mui-focused fieldset": {
          borderWidth: "1.5px",
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        fontWeight: 500,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[1],
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: "4px",
        borderRadius: "2px",
        backgroundColor: theme.palette.secondary.main,
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
        borderRadius: "8px",
        margin: "4px 8px",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main + "15",
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "25",
          },
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        margin: "4px 8px",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.main + "15",
          "&:hover": {
            backgroundColor: theme.palette.primary.main + "25",
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
        "& .MuiSwitch-track": {
          borderRadius: "12px",
        },
        "& .MuiSwitch-thumb": {
          borderRadius: "10px",
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
          "&:hover": {
            boxShadow: theme.shadows[4],
          },
        },
        "& .MuiSlider-track": {
          borderRadius: "2px",
        },
        "& .MuiSlider-rail": {
          borderRadius: "2px",
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
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
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
