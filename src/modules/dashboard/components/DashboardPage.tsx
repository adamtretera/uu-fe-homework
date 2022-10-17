import { styled } from "styles";

import { teacherCardMockData } from "../mockData";

import { GraphCard } from "./GraphCard";
import { TeacherCard } from "./TeacherCard";

import { StudentsTableSection } from "./StudentsTableSection";
import { StatisticsCardListSection } from "./StatisticsCardListSection";

export const DashboardPage = () => {
  // handles the button in teacher card
  const handleOnContact = () => {
    alert("Contact success");
  };

  return (
    <Main>
      <StatisticsCardListSection />
      <TwoColumnsLayout>
        <TeacherCard
          name={teacherCardMockData.name}
          description={teacherCardMockData.description}
          image={teacherCardMockData.image}
          onContact={handleOnContact}
        />
        <GraphCard />
      </TwoColumnsLayout>
      <StudentsTableSection />
    </Main>
  );
};

export const TwoColumnsLayout = styled("section", {
  paddingTop: "2rem",
  display: "grid",
  gridTemplateColumns: "2.6fr 1fr",
  gap: 20,
});

export const Main = styled("main", {
  padding: "1rem",
});
