import { atom } from "jotai";
import { CarList } from "../types";
import { carsListMockData } from "../data";
import { filterDataAtom } from "./filterDataAtom";
import { selectAtom } from "jotai/utils";

export const carsListAtom = atom<CarList>([...carsListMockData]);

export const filteredCarsData = atom((get) => {
  return get(carsListAtom).filter((item) => {
    const filter = get(filterDataAtom);

    const filterFuel = filter.fuel ? filter.fuel === item.fuel : true;
    const filterBrand = filter.brand ? filter.brand === item.brand : true;
    const filterModel = filter.model ? filter.model === item.model : true;

    const priceFrom = filter.priceFrom ? parseInt(filter.priceFrom) : 0;
    const priceTo = filter.priceTo ? parseInt(filter.priceTo) : 100000;

    const drivenFrom = filter.drivenFrom ? parseInt(filter.drivenFrom) : 0;
    const drivenTo = filter.drivenTo ? parseInt(filter.drivenTo) : 100000;

    const inPriceRange = item.price >= priceFrom && priceTo >= item.price;
    const inDrivenRange =
      item.kmDriven >= drivenFrom && drivenTo >= item.kmDriven;

    return (
      filterFuel && filterBrand && filterModel && inPriceRange && inDrivenRange
    );
  });
});

export const modelsAtom = selectAtom(carsListAtom, (cars) =>
  cars.map((item) => item.model)
);
