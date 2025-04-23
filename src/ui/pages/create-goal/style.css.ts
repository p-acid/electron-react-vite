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

export const methodGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.5rem",
  marginBottom: "2rem",
});

export const methodCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "#181818",
  borderRadius: "0.5rem",
  border: "1px solid #2F2F2F",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    borderColor: "#3B82F6",
    transform: "translateY(-2px)",
  },

  selectors: {
    '&[data-selected="true"]': {
      borderColor: "#3B82F6",
      backgroundColor: "#1E293B",
      boxShadow: "0 0 0 1px #3B82F6",
    },
  },
});

export const methodHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  backgroundColor: "#2F2F2F",
  borderRadius: "0.75rem",
});

export const methodTitle = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: "#E0E0E0",
});

export const methodDescription = style({
  fontSize: "0.875rem",
  color: "#909090",
  lineHeight: "1.5",
});
