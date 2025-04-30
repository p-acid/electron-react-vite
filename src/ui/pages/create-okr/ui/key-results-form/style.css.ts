import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
  wordBreak: "keep-all",
});

export const exampleSubtitle = style({
  color: "#E0E0E0",
  fontSize: "0.875rem",
  fontWeight: "500",
});

export const exampleGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
  marginTop: "0.25rem",
});

export const keyResults = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
});

export const keyResultForms = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const keyResultForm = style({
  display: "flex",
  gap: "0.75rem",
  alignItems: "flex-end",
  flex: 1,
});

export const keyResultDateGroup = style({
  width: "300px",
});
