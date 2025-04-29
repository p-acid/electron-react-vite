import { recipe } from "@vanilla-extract/recipes";

export const badge = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: "500",
    borderRadius: "9999px",
    transition: "all 0.2s ease",
  },

  variants: {
    variant: {
      default: {
        color: "#E0E0E0",
        backgroundColor: "#2D3F38",
      },
      primary: {
        color: "#E0E0E0",
        backgroundColor: "#059669",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});
