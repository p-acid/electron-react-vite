import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.375rem",
  fontWeight: "500",
  transition: "all 0.1s ease-in-out",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#3B82F6",
  color: "#ffffff",

  ":hover": {
    backgroundColor: "#2563EB",
  },

  ":active": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
  },

  ":disabled": {
    backgroundColor: "#93C5FD",
    cursor: "not-allowed",
    opacity: 0.7,
  },
});

export const button = recipe({
  base: baseStyle,

  variants: {
    size: {
      sm: {
        padding: "0.375rem 0.75rem",
        fontSize: "0.75rem",
      },
      md: {
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
      },
      lg: {
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
