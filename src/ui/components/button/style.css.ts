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
  backgroundColor: "#2563EB",
  color: "#ffffff",

  ":hover": {
    backgroundColor: "#1D4ED8",
  },

  ":active": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.5)",
  },

  ":disabled": {
    backgroundColor: "#60A5FA",
    opacity: 0.7,
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
  },

  defaultVariants: {
    size: "md",
  },
});
