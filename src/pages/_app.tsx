import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

declare global {
  interface Window {
    dataLayer: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // https://nextjs.org/docs/messages/next-script-for-ga
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HSRHBVMXN0"
        strategy="afterInteractive"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }
          gtag("js", new Date());
          gtag("config", "G-HSRHBVMXN0");
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
