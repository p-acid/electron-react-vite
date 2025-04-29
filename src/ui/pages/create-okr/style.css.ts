import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
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

export const navigation = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
