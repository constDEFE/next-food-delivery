import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { SessionProvider } from "next-auth/react";
import Layout from "components/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
