import { styled } from "styles";
import { ReactNode } from "react";

export const SectionStyled = styled("section", {
  paddingTop: "1rem",
  paddingBottom: "1rem",

  display: "flex",
  flexDirection: "column",
  gap: 10,
});

interface SectionTypeProps {
  header: ReactNode;
  children: ReactNode;
}

export const Section = ({ header, children }: SectionTypeProps) => (
  <SectionStyled>
    {header}
    {children}
  </SectionStyled>
);
