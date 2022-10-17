import Image from "next/image";

import { Section, Text } from "modules/ui";
import { styled } from "../../../styles";

export const GraphCard = () => (
  <Section header={<Text as={"h3"}>Průběžné hodnocení podle témat</Text>}>
    <ImageBox>
      <Image
        src={
          "https://images.unsplash.com/photo-1634117622592-114e3024ff27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        }
        objectFit={"cover"}
        alt={"graph"}
        layout={"fill"}
      />
    </ImageBox>
  </Section>
);

export const ImageBox = styled("div", {
  width: "100%",
  height: "100%",
  minHeight: "300px",
  position: "relative",
});
