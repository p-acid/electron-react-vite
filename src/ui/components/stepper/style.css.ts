import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const stepper = style({
  display: "flex",
  gap: "2.5rem",
  alignItems: "center",
  padding: "0.75rem 0",
});

export const step = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  position: "relative",
});

export const indicator = recipe({
  base: {
    minWidth: "1.5rem",
    minHeight: "1.5rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },

  variants: {
    status: {
      completed: {
        backgroundColor: "#059669",
        color: "#FFFFFF",
      },
      current: {
        backgroundColor: "#10B981",
        color: "#FFFFFF",
      },
      pending: {
        backgroundColor: "#2D3F38",
        color: "#94A3B8",
      },
    },
  },
});

export const label = recipe({
  base: {
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
  },

  variants: {
    status: {
      completed: {
        color: "#FFFFFF",
      },
      current: {
        color: "#FFFFFF",
        fontWeight: "500",
      },
      pending: {
        color: "#94A3B8",
      },
    },
  },
});
