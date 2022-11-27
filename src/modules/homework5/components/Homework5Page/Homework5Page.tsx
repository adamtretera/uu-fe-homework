import { Flex } from "@mantine/core";

import { ColorSchemeContext, ThemeProvider } from "../ThemeProvider";
import { DemoCard } from "../DemoCard";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useContext } from "react";

export const Homework5Page = () => {
  const schemas = useContext(ColorSchemeContext);

  return (
    <ThemeProvider>
      <Flex justify={"center"} pt={200}>
        <DemoCard
          title={"Demo theme card"}
          description={"Lorem imspum dolrem isupmum"}
          country={"Czech republic"}
          image={"https://api.lorem.space/image/movie?w=400&h=400"}
          badges={[{ emoji: "asd", label: "test" }]}
        />
      </Flex>

      <ThemeSwitcher />
    </ThemeProvider>
  );
};
