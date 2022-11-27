import { styled } from "@stitches/react";
import uuid from "react-uuid";
import { useAtomValue } from "jotai";

import { CarCard } from "../CarCard";
import { filteredCarsData } from "../../atoms";

export const CarList = () => {
  const data = useAtomValue(filteredCarsData);

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
