import Image from "next/image";

import { Button, Card, Text } from "modules/ui";
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
  <section>
    <Text as={"h3"}>Dnešní lektor</Text>
    <CardStyled>
      <Image
        src={image}
        objectFit={"cover"}
        alt={name}
        width={350}
        height={450}
      />
      <TextBox>
        <Text as={"h2"}>{name}</Text>
        <Text as={"p"}>{description}</Text>
        <ContactButton onClick={onContact}>Contact me</ContactButton>
      </TextBox>
    </CardStyled>
  </section>
);

const CardStyled = styled(Card, {
  display: "flex",
  gap: 20,
});

const TextBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "1rem",
});

const ContactButton = styled(Button, {
  alignSelf: "flex-end",
});
