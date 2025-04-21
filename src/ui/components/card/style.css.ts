import { style } from "@vanilla-extract/css";

export const card = style({
  border: "1px solid #1F1F1F",
  borderRadius: "0.5rem",
  backgroundColor: "#181818",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
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
  padding: "1.5rem",
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1.5rem",
});

export const title = style({
  fontSize: "1.125rem",
  fontWeight: 500,
  color: "#E0E0E0",
  margin: 0,
});

export const description = style({
  fontSize: "1rem",
  fontWeight: 400,
  color: "#909090",
});
