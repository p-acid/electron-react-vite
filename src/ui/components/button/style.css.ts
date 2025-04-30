import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    display: "inline-flex",
    gap: "0.5rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "#059669",
        color: "#F3F4F6",
        border: "none",

        ":hover": {
          backgroundColor: "#047857",
        },

        ":active": {
          boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.4)",
        },

        ":disabled": {
          backgroundColor: "#475569",
          opacity: 0.6,
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: "#E0E0E0",
        border: "1px solid #4D4D4D",

        ":hover": {
          borderColor: "#666666",
          color: "#F3F4F6",
        },

        ":active": {
          boxShadow: "0 0 0 3px rgba(77, 77, 77, 0.4)",
        },

        ":disabled": {
          borderColor: "#333333",
          color: "#666666",
          opacity: 0.6,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "#E0E0E0",
        border: "none",

        ":hover": {
          backgroundColor: "rgba(77, 77, 77, 0.2)",
          color: "#F3F4F6",
        },

        ":active": {
          backgroundColor: "rgba(77, 77, 77, 0.3)",
        },

        ":disabled": {
          color: "#666666",
          opacity: 0.6,
        },
      },
      destructive: {
        backgroundColor: "#DC2626",
        color: "#F3F4F6",
        border: "none",

        ":hover": {
          backgroundColor: "#B91C1C",
        },

        ":active": {
          boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.4)",
        },

        ":disabled": {
          backgroundColor: "#475569",
          opacity: 0.6,
        },
      },
    },

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
      icon: {
        minWidth: "40px",
        minHeight: "40px",
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
    variant: "primary",
  },
});
