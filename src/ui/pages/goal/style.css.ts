import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem",
});

export const header = style({
  marginBottom: "2rem",
});

export const headerContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#E0E0E0",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
