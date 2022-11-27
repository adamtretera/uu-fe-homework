import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";

import { CarSchemaType } from "../../types";

export const CarCard = ({
  model,
  brand,
  kmDriven,
  price,
  fuel,
}: CarSchemaType) => {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={`https://api.lorem.space/image/car?w=400&h=400&hash=${kmDriven}`}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{model}</Text>
        <Flex gap={10}>
          <Badge color="green" variant="light">
            {brand}
          </Badge>
          <Badge color="pink" variant="light">
            {fuel}
          </Badge>
        </Flex>
      </Group>
      <Text>Najeto: {kmDriven} Km</Text>
      <Text weight={"bold"}>Cena: {price} Kč</Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Buy now
      </Button>
    </Card>
  );
};
