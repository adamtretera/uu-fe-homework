import { ColumnDefinitionType } from "../ui";
import { Student } from "types";

export const dashboardMockData = [
  {
    title: "Počet dnů hatchery",
    value: 10,
  },
  {
    title: "Počet účastníků",
    value: 15,
  },
  {
    title: "Počet lektorů",
    value: 10,
  },
  {
    title: "Hodnocení",
    value: 94,
    unit: "%",
  },
];

export const teacherCardMockData = {
  name: "Jakub",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor dui tincidunt lorem eleifend blandit. In ut justo rhoncus, pretium magna in, pharetra orci.",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
};

export const studentMockDataColumns: ColumnDefinitionType<
  Student,
  keyof Student
>[] = [
  {
    key: "name",
    header: "name",
  },
  {
    key: "bio",
    header: "bio",
  },
  {
    key: "score",
    header: "score",
  },
];

export const studentMockDataData = [
  {
    name: "Oliver",
    bio: "test",
    score: 98,
  },
  {
    name: "Oliver",
    bio: "test",
    score: 98,
  },
  {
    name: "Oliver",
    bio: "test",
    score: 98,
  },
  {
    name: "Oliver",
    bio: "test",
    score: 98,
  },
  {
    name: "Oliver",
    bio: "test",
    score: 98,
  },
];
