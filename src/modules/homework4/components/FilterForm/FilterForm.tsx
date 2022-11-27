import { Button, Group, Select, NumberInput, Flex, Radio } from "@mantine/core";
import { useForm } from "@mantine/form";

import { fuelData } from "../../constants";
import { styled } from "@stitches/react";

import { carsListAtom, filterDataAtom } from "../../atoms";
import { useAtom } from "jotai";

export const FilterForm = ({ onClose }: { onClose: () => void }) => {
  const [filterData, setFilterData] = useAtom(filterDataAtom);
  const [carsData] = useAtom(carsListAtom);

  const form = useForm({
    initialValues: filterData,
    validate: {},
  });

  const getModelsFormData = (brand: string) => {
    const models = carsData
      .filter((element) => element.brand === brand)
      .map((item) => ({
        value: item.model,
        label: item.model,
      }));

    if (models) return [{ label: "Všechny modely", value: "" }, ...models];
    else return [{ label: "Žadné jsme nenašli", value: "nic" }];
  };

  const setOfBrands = new Set(carsData.map((item) => item.brand));

  const brandsArray = [...setOfBrands];

  const brandsForm = brandsArray.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <Form
      onSubmit={form.onSubmit((values) => {
        setFilterData({ ...values });
        onClose();
      })}
    >
      <Select
        label="Vyberte zančku"
        placeholder="Značka"
        data={brandsForm}
        onChange={(value) => (value ? form.setValues({ brand: value }) : null)}
        {...form.getInputProps("brand")}
      />
      {form.values?.brand ? (
        <Select
          label="Vyberte model"
          placeholder="model"
          data={getModelsFormData(form.values.brand)}
          {...form.getInputProps("model")}
        />
      ) : null}

      <Flex gap={20}>
        <NumberInput label="Cena od" {...form.getInputProps("priceFrom")} />
        <NumberInput label="Cena do" {...form.getInputProps("priceTo")} />
      </Flex>

      <Flex gap={20}>
        <NumberInput label="Najeto od" {...form.getInputProps("drivenFrom")} />
        <NumberInput label="Najeto do" {...form.getInputProps("drivenTo")} />
      </Flex>

      <Radio.Group
        {...form.getInputProps("fuel")}
        label="Vyberte palivo vozidla, které hledáte"
      >
        {fuelData.map((item) => {
          return <Radio key={item} value={item} label={item} />;
        })}
      </Radio.Group>
      <Group position="right" mt="md">
        <Button type="submit">Filtrovat</Button>
      </Group>
    </Form>
  );
};

const Form = styled("form", {
  display: "flex",
  gap: 15,

  flexDirection: "column",
});
