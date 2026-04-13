// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html data-scroll-behavior="smooth">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
