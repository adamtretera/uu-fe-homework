import { Chart } from "react-chartjs-2";
import { violet } from "@radix-ui/colors";
import { useAtomValue } from "jotai";

import { styled } from "styles";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { rangeAtom } from "../../atoms/rangeAtom";
import type { ChartsData } from "../../data/homework3Mock";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Charts({ data }: { data: ChartsData }) {
  const atomValue = useAtomValue(rangeAtom);

  return (
    <>
      {data.map((graphData) => {
        const years = graphData.data.map((item) => item.year);
        const count = graphData.data.map((item) => item.count);

        return (
          <StyledChart
            key={graphData.title}
            type={"bar"}
            options={options}
            data={{
              labels: years.slice(years.length - atomValue),
              datasets: [
                {
                  label: graphData.title,
                  data: count,
                  backgroundColor: graphData.color,
                },
              ],
            }}
          />
        );
      })}
    </>
  );
}

export const StyledChart = styled(Chart, {
  maxWidth: 500,
  maxHeight: 500,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: 20,
  padding: "2rem",
  border: `2px solid ${violet.violet6}`,
});
