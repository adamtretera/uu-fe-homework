import Image from "next/image";

import { Text } from "modules/ui";

export const GraphCard = () => (
  <section>
    <Text as={"h3"}>Dnešní lektor</Text>
    <Image
      src={
        "https://images.unsplash.com/photo-1634117622592-114e3024ff27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      }
      objectFit={"cover"}
      alt={"graph"}
      width={450}
      height={450}
    />
  </section>
);
