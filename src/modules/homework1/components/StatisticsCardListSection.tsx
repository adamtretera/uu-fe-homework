import { styled } from "styles";

import { dashboardMockData } from "../mockData";
import { StatisticsCard } from "./StatisticsCard";

export const StatisticsCardListSection = () => (
  <Box>
    {dashboardMockData.map((statisticItem) => (
      <StatisticsCard key={statisticItem.title} {...statisticItem} />
    ))}
  </Box>
);

export const Box = styled("section", {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",

  "& > *": {
    flexGrow: 1,
  },
});
