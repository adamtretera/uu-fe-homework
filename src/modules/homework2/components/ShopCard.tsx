import { PrimitiveAtom, useAtom } from "jotai";

import { Button, Card, Text } from "modules/ui";
import { styled } from "styles";

import type { ShopType } from "../atoms";

interface ShopCardTypesProps {
  shopAtom: PrimitiveAtom<ShopType>;
}

export const ShopCard = ({ shopAtom }: ShopCardTypesProps) => {
  const [shop, setShop] = useAtom(shopAtom);

  const isMaxCount = shop.count >= shop.maxCount;
  const hoursNow = new Date().getHours();
  const isDayTime = hoursNow < 22 && hoursNow > 6;

  const notEditable = !isMaxCount || isDayTime;

  const incrementCount = () => {
    if (notEditable) {
      setShop((prev) => {
        return { ...prev, count: shop.count + 1 };
      });
    }
  };

  return (
    <ShopCardStyled>
      <div />
      <Box>
        <Text color={isMaxCount ? "danger" : "primary"} as={"h3"}>
          {shop.name}
        </Text>
        <Text>{shop.count}</Text>
      </Box>
      <Button disabled={notEditable} onClick={incrementCount}>
        +1
      </Button>
    </ShopCardStyled>
  );
};

export const ShopCardStyled = styled(Card, {
  display: "flex",
  justifyContent: "space-between",
});

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
