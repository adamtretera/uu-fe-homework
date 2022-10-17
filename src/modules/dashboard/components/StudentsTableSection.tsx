import { StudentsTable } from "./StudentsTable";

import { Text } from "modules/ui";

export const StudentsTableSection = () => (
  <section>
    <Text css={{ paddingTop: 20 }} as={"h3"}>
      Studenti
    </Text>
    <StudentsTable />
  </section>
);
