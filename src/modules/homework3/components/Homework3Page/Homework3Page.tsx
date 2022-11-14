import { Slider } from "../Slider";
import { Charts } from "../Charts";
import { styled } from "styles";

import { chartsData as data } from "../../data/homework3Mock";

export const Homework3Page = () => {
  return (
    <main>
      <Slider />
      <ChartsLayout>
        <Charts data={data} />
      </ChartsLayout>
    </main>
  );
};

export const ChartsLayout = styled("section", {
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
});
