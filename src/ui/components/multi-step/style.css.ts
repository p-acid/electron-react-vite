import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const step = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const stepIndicator = style({
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#272727",
  color: "#909090",
  fontSize: "0.875rem",
  fontWeight: "500",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

export const activeStep = style({
  backgroundColor: "#2563EB",
  color: "#ffffff",
});

export const completedStep = style({
  backgroundColor: "#15803d",
  color: "#ffffff",
});

export const stepTitle = style({
  color: "#E0E0E0",
  fontSize: "1rem",
  fontWeight: "500",
});

export const content = style({
  width: "100%",
});

export const navigation = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});
