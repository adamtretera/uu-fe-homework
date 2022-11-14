import { rangeAtom } from "../../atoms/rangeAtom";
import { useAtom } from "jotai";
import { styled } from "../../../../styles";

export function Slider() {
  const [range, setRange] = useAtom(rangeAtom);

  return (
    <Box>
      <Label>
        Počet let:
        <input
          type={"range"}
          onChange={(event) => setRange(parseInt(event.target.value))}
          name={"rangeOfData"}
          defaultValue={range}
          min="1"
          max="5"
        />
      </Label>

      <span>{range}</span>
    </Box>
  );
}

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  gap: 20,
  padding: "2rem",
});

export const Label = styled("label", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});
