import { useAtomValue } from "jotai";
import { shopsAtom } from "../atoms";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { violet } from "@radix-ui/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export function ShopsChart() {
  const shops = useAtomValue(shopsAtom);
  const data = {
    labels: shops.map((item) => item.name),
    datasets: [
      {
        label: "Aktuální počet",
        data: shops.map((item) => item.count),
        backgroundColor: violet.violet9,
      },
      {
        label: "Maximální počet",
        data: shops.map((item) => item.maxCount),
        backgroundColor: violet.violet8,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
