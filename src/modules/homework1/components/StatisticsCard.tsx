import { Card, Text } from "modules/ui";
import { styled } from "../../../styles";

interface StatisticsCardTypeProps {
  title: string;
  value: string | number;
  unit?: string;
}

export const StatisticsCard = ({
  title,
  value,
  unit,
}: StatisticsCardTypeProps) => (
  <CardStyled>
    <Text as={"h3"}>{title}</Text>
    <Text as={"p"}>
      {value}
      {unit ? <Text as={"span"}>{unit}</Text> : null}
    </Text>
  </CardStyled>
);

export const CardStyled = styled(Card, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
