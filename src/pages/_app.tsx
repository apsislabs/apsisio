import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

import { IBM_Plex_Mono, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap" });
export const mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

import "nprogress/nprogress.css";
import "styles/main.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>

      <Script
        defer
        data-domain="apsis.io"
        src="https://plausible.io/js/script.js"
      />

      <Component {...pageProps} />
    </>
  );
}
