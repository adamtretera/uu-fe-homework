import Image from "next/image";

import { Button, Card, Section, Text } from "modules/ui";
import { styled } from "styles";

interface TeacherCardTypeProps {
  name: string;
  description: string;
  image: string;
  onContact: () => void;
}

export const TeacherCard = ({
  name,
  description,
  image,
  onContact,
}: TeacherCardTypeProps) => (
  <Section header={<Text as={"h3"}>Dnešní lektor</Text>}>
    <CardStyled>
      <ImageBox>
        <ImageStyled src={image} alt={name} fill />
      </ImageBox>
      <TextBox>
        <Text as={"h2"}>{name}</Text>
        <Text as={"p"}>{description}</Text>
        <ContactButton onClick={onContact}>Contact me</ContactButton>
      </TextBox>
    </CardStyled>
  </Section>
);

const CardStyled = styled(Card, {
  display: "flex",
  gap: 20,
  height: "100%",
});

const TextBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "1rem",
});

const ImageBox = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
});

const ImageStyled = styled(Image, {
  objectFit: "cover",
});

const ContactButton = styled(Button, {
  alignSelf: "flex-end",
});
