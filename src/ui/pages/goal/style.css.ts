import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem",
});

export const header = style({
  marginBottom: "2rem",
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#E0E0E0",
  marginBottom: "0.5rem",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const goalItem = style({
  display: "flex",
  gap: "1.5rem",
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
});

export const goalContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const goalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const goalTitle = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: "#E0E0E0",
});

export const goalDescription = style({
  fontSize: "0.875rem",
  color: "#909090",
});

export const goalMeta = style({
  marginTop: "auto",
  paddingTop: "0.75rem",
});

export const methodBadge = style({
  padding: "0.25rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: "500",
  color: "#E0E0E0",
  backgroundColor: "#2563EB",
  borderRadius: "9999px",
});

export const deadline = style({
  fontSize: "0.75rem",
  color: "#909090",
});

export const headerContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});
