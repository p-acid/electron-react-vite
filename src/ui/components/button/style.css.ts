import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.5rem",
  fontWeight: "500",
  transition: "all 0.1s ease-in-out",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#059669",
  color: "#F3F4F6",

  ":hover": {
    backgroundColor: "#047857",
  },

  ":active": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.4)",
  },

  ":disabled": {
    boxShadow: "none",
    cursor: "auto",
    backgroundColor: "#475569",
    opacity: 0.6,
  },
});

export const button = recipe({
  base: baseStyle,

  variants: {
    size: {
      sm: {
        height: "32px",
        padding: "0 0.75rem",
        fontSize: "0.75rem",
      },
      md: {
        height: "40px",
        padding: "0 1rem",
        fontSize: "0.875rem",
      },
      lg: {
        height: "48px",
        padding: "0 1.5rem",
        fontSize: "1rem",
      },
    },

    width: {
      full: {
        width: "100%",
      },
      fit: {
        width: "fit-content",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
