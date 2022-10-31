import { atom } from "jotai";
import { selectAtom, splitAtom } from "jotai/utils";

const initData = [
  {
    name: "Domácí potřeby",
    count: 10,
    maxCount: 40,
  },
  {
    name: "Hračky",
    count: 1,
    maxCount: 50,
  },
  {
    name: "Párfémy",
    count: 2,
    maxCount: 30,
  },
  {
    name: "Elktro",
    count: 12,
    maxCount: 20,
  },
];

export const shopsAtom = atom(initData);

export const shopAtom = splitAtom(shopsAtom);

export const allShopsCountAtom = selectAtom(shopsAtom, (shops) =>
  shops.reduce((counter, shop) => {
    counter += shop.count;
    return counter;
  }, 0)
);

export type ShopType = typeof initData[number];
