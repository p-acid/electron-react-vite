import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.625rem 0.75rem",
  borderRadius: "16px",
  color: "#E0E0E0",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: "rgba(239, 243, 244, 0.1)",
  },
});

export const navIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
});
