import "faust.config";
import { HeadlessProvider } from "@faustjs/next";
import { client } from "client";
import type { AppProps } from "next/app";
import "../../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
