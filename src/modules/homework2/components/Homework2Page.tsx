import { useAtom } from "jotai";

import { styled } from "styles";

import { shopAtom } from "../atoms";

import { ShopCard } from "./ShopCard";
import { ShopsCountCard } from "./ShopsCountCard";
import { TimeCard } from "./TimeCard";
import { AddShopForm } from "./AddShopForm";

export const Homework2Page = () => {
  const [shop] = useAtom(shopAtom);

  return (
    <Layout>
      <ShopsCountCard />
      <TimeCard />
      {shop.map((shopAtom) => {
        return <ShopCard key={`${shopAtom}`} shopAtom={shopAtom} />;
      })}
      <AddShopForm />
    </Layout>
  );
};

export const Layout = styled("section", {
  maxWidth: 1200,
  margin: "auto",
  marginTop: "5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "1rem",

  "& > *": {
    width: "100%",
  },
});
