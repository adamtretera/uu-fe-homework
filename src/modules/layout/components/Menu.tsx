import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "modules/ui";
import { styled } from "@stitches/react";
import { blackA, violet } from "@radix-ui/colors";
import Link from "next/link";

export const Menu = () => {
  return (
    <DropdownMenu>
      <Trigger asChild>
        <IconButton aria-label="Customise options">
          <HamburgerMenuIcon />
        </IconButton>
      </Trigger>

      <DropdownMenuContent sideOffset={5}>
        <MenuLink href={"/homework1"}>
          <MenuItem>Homework 1</MenuItem>
        </MenuLink>
        <MenuLink href={"/homework2"}>
          <MenuItem>Homework 2</MenuItem>
        </MenuLink>
        <MenuLink href={"/"}>
          <MenuItem>Homework 3</MenuItem>
        </MenuLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Trigger = styled(DropdownMenuTrigger, {
  position: "fixed",
  top: "0.5rem",
  right: "0.5rem",
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 45,
  width: 45,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  border: `2px solid ${violet.violet8}`,
  backgroundColor: "white",

  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
});

const MenuItem = styled(DropdownMenuItem, {
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "&:hover": { backgroundColor: violet.violet3, color: violet.violet12 },
});

const MenuLink = styled(Link, {
  textDecoration: "none",
  fontFamily: "$system",
  color: blackA.blackA12,
});
