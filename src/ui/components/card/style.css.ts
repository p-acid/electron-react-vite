import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: {
    border: "1px solid #1F1F1F",
    borderRadius: "0.5rem",
    backgroundColor: "#181818",
    boxShadow: "0 1px 3px 0 rgba(56, 56, 56, 0.2)",
    overflow: "hidden",
    width: "100%",
  },

  variants: {
    selectable: {
      true: {
        cursor: "pointer",
        transition: "all 0.2s ease",

        ":hover": {
          borderColor: "#10B981",
          transform: "translateY(-2px)",
        },
      },
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1.5rem",
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0 1.5rem 1.5rem",
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0 1.5rem 1.5rem",
});

export const title = style({
  fontSize: "1rem",
  fontWeight: 500,
  color: "#E0E0E0",
  margin: 0,
});

export const description = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  color: "#94A3B8",
  lineHeight: "1.5",
});
