import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import React, { createContext, useReducer } from "react";

import { colorsSchemas } from "../../data";

interface ThemeProviderPropsType {
  children: ReactNode;
}

const initialState = {
  colorScheme: colorsSchemas.blue,
};

export const ColorSchemeContext = createContext<{
  state: { colorScheme: colorsSchemas };
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const colorsSchemeReducer = (
  state: { colorScheme: colorsSchemas },
  action: { type: colorsSchemas }
) => {
  switch (action.type) {
    case colorsSchemas.red:
      return { colorScheme: colorsSchemas.red };
    case colorsSchemas.blue:
      return { colorScheme: colorsSchemas.blue };
    default:
      return state;
  }
};

export function ThemeProvider({ children }: ThemeProviderPropsType) {
  const [state, dispatch] = useReducer(colorsSchemeReducer, initialState);

  return (
    <ColorSchemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      <MantineProvider
        theme={{
          colors: {
            red: [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
            blue: [
              "#7AD1DD",
              "#5FCCDB",
              "#44CADC",
              "#2AC9DE",
              "#1AC2D9",
              "#11B7CD",
              "#09ADC3",
              "#0E99AC",
              "#128797",
              "#147885",
            ],
          },
          primaryColor: state.colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
