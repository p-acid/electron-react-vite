import { style } from "@vanilla-extract/css";

export const userProfile = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.75rem",
  marginTop: "auto",
  borderRadius: "16px",
  cursor: "pointer",
  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: "rgba(239, 243, 244, 0.1)",
  },
});

export const avatar = style({
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  backgroundColor: "#2F2F2F",
  overflow: "hidden",
});

export const userInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
});

export const userName = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#E0E0E0",
});

export const userEmail = style({
  fontSize: "0.75rem",
  color: "#909090",
});

export const popover = style({
  position: "absolute",
  bottom: "100%",
  left: "0",
  width: "240px",
  backgroundColor: "#181818",
  border: "1px solid #2F2F2F",
  borderRadius: "16px",
  marginBottom: "0.5rem",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
});

export const popoverItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.75rem",
  color: "#E0E0E0",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  borderRadius: "8px",
  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: "rgba(239, 243, 244, 0.1)",
  },
});

export const wrapper = style({
  position: "relative",
  marginTop: "auto",
});
