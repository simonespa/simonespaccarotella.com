import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  // https://nextjs.org/docs/messages/next-script-for-ga
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HSRHBVMXN0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          <!-- Google tag (gtag.js) -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-HSRHBVMXN0');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
