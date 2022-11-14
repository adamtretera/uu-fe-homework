import { blue, green, red } from "@radix-ui/colors";

export const deathsData = [
  {
    year: 2022,
    count: 59661,
  },
  {
    year: 2021,
    count: 139891,
  },
  {
    year: 2020,
    count: 129289,
  },
  {
    year: 2019,
    count: 112362,
  },
  {
    year: 2018,
    count: 112920,
  },
];

export const bornData = [
  {
    year: 2022,
    count: 50011,
  },
  {
    year: 2021,
    count: 111793,
  },
  {
    year: 2020,
    count: 110200,
  },
  {
    year: 2019,
    count: 112231,
  },
  {
    year: 2018,
    count: 114036,
  },
];
export const countData = [
  {
    year: 2022,
    count: 105257,
  },
  {
    year: 2021,
    count: 105157,
  },
  {
    year: 2020,
    count: 107018,
  },
  {
    year: 2019,
    count: 106939,
  },
  {
    year: 2018,
    count: 106498,
  },
];

export const chartsData = [
  {
    title: "Počet lidí",
    data: countData,
    color: blue.blue8,
  },
  {
    title: "Počet narozených",
    data: bornData,
    color: green.green8,
  },
  {
    title: "Počet umrtí",
    data: deathsData,
    color: red.red8,
  },
];

export type ChartsData = typeof chartsData;
