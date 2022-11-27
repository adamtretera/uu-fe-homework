import { Button, Flex } from "@mantine/core";
import { styled } from "@stitches/react";
import { useUpdateAtom } from "jotai/utils";
import { MantineProvider } from "@mantine/core";

import { filterDataAtom } from "../../atoms";
import { FilterCarFormModal } from "../FilterCarFormModal";
import { CarList } from "../CarList";

export const Homework4Page = () => {
  const setFilterData = useUpdateAtom(filterDataAtom);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Page>
        <Flex mih={200} align={"center"} justify={"space-between"}>
          <h1>Car list</h1>
          <Flex gap={20}>
            <Button
              color="red"
              onClick={() => {
                setFilterData({
                  brand: "",
                  model: "",
                  drivenFrom: "",
                  drivenTo: "",
                  priceFrom: "",
                  priceTo: "",
                  fuel: "",
                });
              }}
            >
              Resetovat
            </Button>
            <FilterCarFormModal />
          </Flex>
        </Flex>
        <CarList />
      </Page>
    </MantineProvider>
  );
};

const Page = styled("section", {
  margin: "0 auto",

  maxWidth: 1200,
});
