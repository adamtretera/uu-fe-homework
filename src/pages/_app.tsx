import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import "styles/reset.css";
import { Layout } from "modules/layout";
import { globalStyles } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
