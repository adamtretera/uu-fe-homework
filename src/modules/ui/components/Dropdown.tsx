import React from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentStyles = {
  minWidth: 220,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
};

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  ...contentStyles,
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white",
});

function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
