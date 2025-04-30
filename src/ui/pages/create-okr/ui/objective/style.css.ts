import { style } from "@vanilla-extract/css";

export const objective = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#1E2F28",
  borderRadius: "0.875rem",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "2.25rem",
  height: "2.25rem",
  backgroundColor: "#2D3F38",
  borderRadius: "0.75rem",
  color: "#34D399",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.375rem",
});

export const title = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#E0E0E0",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
});
