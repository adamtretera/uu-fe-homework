import { atom } from "jotai";

export const filterDataAtom = atom({
  brand: "",
  model: "",
  drivenFrom: "",
  drivenTo: "",
  priceFrom: "",
  priceTo: "",
  fuel: "",
});
