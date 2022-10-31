import { useAtomValue } from "jotai";

import { Card, Text } from "modules/ui";
import { styled } from "styles";

import { allShopsCountAtom } from "../atoms";

export function ShopsCountCard() {
  const allShopsCount = useAtomValue(allShopsCountAtom);
  return (
    <AllShopsCard>
      <Text as={"h1"}>Celkový počet nakupujících</Text>
      <Text>{allShopsCount}</Text>
    </AllShopsCard>
  );
}

export const AllShopsCard = styled(Card, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
