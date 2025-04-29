import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.75rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
  wordBreak: "keep-all",
});

export const exampleList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});
