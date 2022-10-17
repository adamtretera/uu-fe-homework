import { styled } from "styles";

import { dashboardMockData } from "../mockData";
import { StatisticsCard } from "./StatisticsCard";

export const StatisticsCardListSection = () => (
  <Box>
    {dashboardMockData.map((statisticItem) => (
      <StatisticsCard
        key={statisticItem.title}
        title={statisticItem.title}
        value={statisticItem.value}
        unit={statisticItem.unit}
      />
    ))}
  </Box>
);

export const Box = styled("section", {
  display: "flex",
  gap: 10,

  "& > *": {
    flexGrow: 1,
  },
});
