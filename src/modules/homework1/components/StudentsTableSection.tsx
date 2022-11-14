import { StudentsTable } from "./StudentsTable";

import { Section, Text } from "modules/ui";

export const StudentsTableSection = () => (
  <Section
    header={
      <Text css={{ paddingTop: 20 }} as={"h3"}>
        Studenti
      </Text>
    }
  >
    <StudentsTable />
  </Section>
);
