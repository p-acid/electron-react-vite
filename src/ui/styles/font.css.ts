import { globalFontFace, globalStyle } from "@vanilla-extract/css";

const pretendardFont = "Pretendard";

globalFontFace(pretendardFont, {
  src: 'url("/fonts/PretendardVariable.ttf") format("ttf")',
  fontStyle: "normal",
});

globalStyle("body", {
  "@layer": {
    base: {
      fontFamily: pretendardFont,
    },
  },
});
