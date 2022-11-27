import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

import { FilterForm } from "../FilterForm";

export const FilterCarFormModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        title={"Filtrujte auta!"}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <FilterForm onClose={() => setOpened(false)} />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Filter cars</Button>
      </Group>
    </>
  );
};
