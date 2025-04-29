import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem",
});

export const header = style({
  marginBottom: "3rem",
});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#E0E0E0",
  marginBottom: "0.75rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: "#909090",
});

export const frameworkGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  marginBottom: "2rem",
});
