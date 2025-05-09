import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import smartquotes from "smartquotes";

import { IBM_Plex_Mono, Inter, Caveat, Grape_Nuts } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const caveat = Caveat({ subsets: ["latin"], display: "swap" });
// export const grape = Grape_Nuts({ subsets: ["latin"], display: "swap", weight: ["400"] });
export const mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

import "nprogress/nprogress.css";
import "styles/main.scss";
import { useEffect } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smartquotes().listen();
  }, []);
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
          --font-hand: ${caveat.style.fontFamily};
        }
      `}</style>

      <Script
        defer
        data-domain="apsis.io"
        src="https://plausible.io/js/script.js"
      />

      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#2173aa"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#2c3e50"
      />

      <div id="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}
