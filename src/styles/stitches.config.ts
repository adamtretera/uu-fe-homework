import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      tableBackgroundColor: "#b0b0b0",
    },
    fontSizes: {
      1: "0.8rem",
      2: "1rem",
      3: "1.2rem",
    },
  },
});
