import { styled } from "styles";

import { teacherCardMockData } from "../mockData";

import { GraphCard } from "./GraphCard";
import { TeacherCard } from "./TeacherCard";

import { StudentsTableSection } from "./StudentsTableSection";
import { StatisticsCardListSection } from "./StatisticsCardListSection";

export const Homework1Page = () => {
  // handles the button in teacher card
  const handleOnContact = () => {
    alert("Contact success");
  };

  return (
    <Main>
      <StatisticsCardListSection />
      <TwoColumnsLayout>
        <TeacherCard {...teacherCardMockData} onContact={handleOnContact} />
        <GraphCard />
      </TwoColumnsLayout>
      <StudentsTableSection />
    </Main>
  );
};

export const TwoColumnsLayout = styled("section", {
  paddingTop: "2rem",
  display: "flex",
  "& > *": {
    flex: 1,
    flexBasis: "300px",
  },
  flexWrap: "wrap",
  gap: 20,
});

export const Main = styled("main", {
  padding: "1rem",
});
