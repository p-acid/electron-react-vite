import { style } from "@vanilla-extract/css";

export const framworkCard = style({
  selectors: {
    '&[data-selected="true"]': {
      borderColor: "#10B981",
      backgroundColor: "#1E2F28",
      boxShadow: "0 0 0 1px #10B981",
    },
  },
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  backgroundColor: "#2D3F38",
  borderRadius: "0.75rem",
});
