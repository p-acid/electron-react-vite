import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "2rem",
  backgroundColor: "#121212",
});

export const content = style({
  textAlign: "center",
  maxWidth: "28rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#E0E0E0",
  marginBottom: "1rem",
});

export const message = style({
  fontSize: "1rem",
  color: "#909090",
  marginBottom: "2rem",
  lineHeight: "1.5",
});
