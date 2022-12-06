import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "styles/main.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script defer data-domain="apsis.io" src="https://plausible.io/js/script.js" />
      <Component {...pageProps} />
    </>
  );
}
