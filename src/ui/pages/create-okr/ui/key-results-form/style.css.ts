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

export const keyResultsForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginTop: "2rem",
});

export const keyResultField = style({
  display: "flex",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "#1E2F28",
  borderRadius: "0.75rem",
});

export const keyResultHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
});

export const keyResultNumber = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#2D3F38",
  borderRadius: "50%",
  color: "#34D399",
  fontSize: "0.875rem",
  fontWeight: "500",
  flexShrink: 0,
});

export const keyResultInputs = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flex: 1,
});
