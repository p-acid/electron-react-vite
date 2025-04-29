import { style } from "@vanilla-extract/css";

export const keyResult = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "#1E2F28",
  borderRadius: "0.75rem",
});

export const keyResultNumber = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#2D3F38",
  borderRadius: "50%",
  color: "#34D399",
  fontSize: "0.75rem",
  fontWeight: "500",
  flexShrink: 0,
});

export const keyResultContent = style({
  fontSize: "0.875rem",
  color: "#E0E0E0",
  lineHeight: "1.5",
});
