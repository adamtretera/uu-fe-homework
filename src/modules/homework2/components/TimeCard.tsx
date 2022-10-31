import { useEffect, useState } from "react";

import { Text } from "modules/ui";
import { styled } from "styles";

export function TimeCard() {
  const [dateState, setDateState] = useState(new Date("2022-03-25"));

  useEffect(() => {
    setDateState(new Date());
    const int = setInterval(() => setDateState(new Date()), 1000);

    return () => clearInterval(int);
  }, []);

  const time = dateState.toLocaleDateString("cs-CZ", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <TimeCardStyled>
      <Text as={"h2"}>{time.toString()}</Text>
    </TimeCardStyled>
  );
}

export const TimeCardStyled = styled("div", {
  display: "flex",
  justifyContent: "center",

  paddingTop: "1rem",
  paddingBottom: "1rem",
});
