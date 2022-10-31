import type { AppProps } from "next/app";
import "styles/reset.css";
import { Layout } from "modules/layout";
import { globalStyles } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
