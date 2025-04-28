import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = style({
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#1A1A1A",
  border: "1px solid #333333",
  borderRadius: "0.375rem",
  color: "#E0E0E0",
  fontSize: "0.875rem",
  transition: "all 0.2s ease",

  ":focus": {
    outline: "none",
    borderColor: "#666666",
    boxShadow: "0 0 0 1px #666666",
  },

  ":disabled": {
    backgroundColor: "#1A1A1A",
    opacity: 0.7,
    cursor: "not-allowed",
  },

  ":hover": {
    borderColor: "#4D4D4D",
  },

  "::placeholder": {
    color: "#666666",
  },
});

export const input = recipe({
  base: baseStyle,

  variants: {
    size: {
      sm: {
        height: "32px",
        fontSize: "0.75rem",
        padding: "0 0.75rem",
      },
      md: {
        height: "40px",
        fontSize: "0.875rem",
        padding: "0 1rem",
      },
      lg: {
        height: "48px",
        fontSize: "1rem",
        padding: "0 1.25rem",
      },
    },
    isError: {
      true: {
        borderColor: "#FF4444",
        ":focus": {
          borderColor: "#FF4444",
          boxShadow: "0 0 0 1px #FF4444",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
