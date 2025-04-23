import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  width: "100%",
  minHeight: "100vh",
  padding: "2rem",
});
