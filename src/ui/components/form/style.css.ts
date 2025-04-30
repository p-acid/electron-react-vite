import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
  width: "100%",
});

export const label = style({
  fontSize: "0.75rem",
  fontWeight: "500",
  color: "#E0E0E0",
});

export const required = style({
  fontSize: "0.75rem",
  fontWeight: "500",
  color: "#047857",
  marginRight: "0.125rem",
});

export const description = style({
  fontSize: "0.75rem",
  color: "#94A3B8",
});

export const message = style({
  fontSize: "0.75rem",
  marginTop: "0.25rem",
});

export const errorMessage = style([
  message,
  {
    color: "#EF4444",
  },
]);

export const successMessage = style([
  message,
  {
    color: "#10B981",
  },
]);
