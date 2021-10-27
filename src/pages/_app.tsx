import "faust.config";
import { FaustProvider } from "@faustjs/next";
import { client } from "client";
import type { AppProps } from "next/app";
import "../../styles/global.css";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
