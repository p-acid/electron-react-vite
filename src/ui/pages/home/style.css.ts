import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem",
});
