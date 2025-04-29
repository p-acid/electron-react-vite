import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#FFFFFF",
  marginBottom: "1.25rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
});

export const exampleDescription = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
  marginBottom: "1.5rem",
});

export const exampleList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.875rem",
});

export const exampleItem = style({
  display: "flex",
  gap: "1rem",
  padding: "1.25rem",
  backgroundColor: "#1E2F28",
  borderRadius: "0.875rem",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "2.5rem",
  height: "2.5rem",
  backgroundColor: "#2D3F38",
  borderRadius: "0.75rem",
  color: "#34D399",
});

export const exampleContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const exampleItemTitle = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#E0E0E0",
  marginBottom: "0.25rem",
});

export const exampleItemDescription = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
});
