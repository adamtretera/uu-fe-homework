import { styled } from "@stitches/react";
import uuid from "react-uuid";

import { CarCard } from "../CarCard/CarCard";

import { useAtomValue } from "jotai";
import { filteredCarsData } from "../../atoms";
import { faker } from "@faker-js/faker";
import { generateMock } from "@anatine/zod-mock";
import { CarSchema } from "../../validations";

export const CarList = () => {
  const data = useAtomValue(filteredCarsData);
  console.log(
    faker.random
      .alphaNumeric(100)
      .split("")
      .map(() => generateMock(CarSchema))
  );

  return (
    <List>
      {data.length > 0 ? (
        data.map((carItem) => {
          return <CarCard key={uuid()} {...carItem} />;
        })
      ) : (
        <h1>Nic jsme nenašli :(</h1>
      )}
    </List>
  );
};

const List = styled("section", {
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyContent: "center",
  gap: 40,
});
