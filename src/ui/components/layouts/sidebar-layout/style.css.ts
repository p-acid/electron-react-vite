import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#121212",
});

export const container = style({
  display: "flex",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const sidebar = style({
  position: "sticky",
  top: 0,
  height: "100vh",
  width: "240px",
  borderRight: "1px solid #2F2F2F",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
});

export const main = style({
  flex: 1,
  minWidth: 0,
});
