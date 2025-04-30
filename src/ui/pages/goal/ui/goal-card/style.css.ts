import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const deadline = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  color: "#94A3B8",
});

export const badges = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});
