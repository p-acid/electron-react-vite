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

export const navigation = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
