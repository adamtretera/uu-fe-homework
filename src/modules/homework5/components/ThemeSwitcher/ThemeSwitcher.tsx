import {
  ColorScheme,
  Flex,
  Select,
  useMantineColorScheme,
} from "@mantine/core";
import { useContext } from "react";
import { ColorSchemeContext } from "../ThemeProvider";
import { colorsSchemas } from "../../data";

export const ThemeSwitcher = () => {
  const { state, dispatch } = useContext(ColorSchemeContext);

  return (
    <Flex justify={"center"} p={40}>
      <Select
        defaultValue={state.colorScheme}
        data={[
          {
            label: "Modrá",
            value: colorsSchemas.blue,
          },
          {
            label: "Růžová",
            value: colorsSchemas.red,
          },
        ]}
        onChange={(colorScheme) => dispatch({ type: colorScheme })}
      />
    </Flex>
  );
};
