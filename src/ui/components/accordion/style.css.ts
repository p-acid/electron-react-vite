import { style } from "@vanilla-extract/css";

export const accordion = style({
  width: "100%",
  borderRadius: "0.625rem",
  overflow: "hidden",
  backgroundColor: "#1E1E1E",
});

export const item = style({
  borderBottom: "1px solid #333",

  ":last-child": {
    borderBottom: "none",
  },
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "1.375rem",
  background: "none",
  border: "none",
  color: "#E0E0E0",
  cursor: "pointer",
  fontSize: "0.875rem",
  fontWeight: "500",
  textAlign: "left",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#252525",
  },
});

export const triggerInner = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const content = style({
  overflow: "hidden",
  fontSize: "0.875rem",
  color: "#94A3B8",
  backgroundColor: "#1A1A1A",
  transition: "height 0.3s ease",

  selectors: {
    '&[data-state="open"]': {
      height: `var(--accordion-content-height)`,
    },
    '&[data-state="closed"]': {
      height: 0,
    },
  },
});

export const contentInner = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "1.5rem",
});

export const chevron = style({
  transition: "transform 200ms ease",
});
