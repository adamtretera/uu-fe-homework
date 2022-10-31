import { SyntheticEvent } from "react";
import { useUpdateAtom } from "jotai/utils";

import { Button } from "modules/ui";
import { styled } from "styles";

import { shopsAtom } from "../atoms";

export function AddShopForm() {
  const setShopsValue = useUpdateAtom(shopsAtom);
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      maxCount: HTMLInputElement;
    };

    setShopsValue((prev) => {
      return [
        ...prev,
        {
          name: formElements.name.value,
          maxCount: parseInt(formElements.maxCount.value),
          count: 0,
        },
      ];
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Název
          <input name={"name"} />
        </Label>
        <Label>
          Maximální počet lidí:
          <input type={"number"} name={"maxCount"} />
        </Label>
        <Button type={"submit"}>Přidat obchod</Button>
      </Form>
    </div>
  );
}

// TODO: create individual components

export const Form = styled("form", {
  display: "flex",
  justifyContent: "end",

  padding: "2rem",
  gap: "1rem",
  border: "1px solid black",
});

export const Label = styled("label", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});
