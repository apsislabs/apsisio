import { siteConf } from "conf";
import { formattedTitle } from "lib/metadata";

export const PageMeta: React.FC<{ title?: string; description?: string }> = ({
  title,
  description,
}) => (
  <>

    <meta
      name="description"
      key="description"
      content={description ?? siteConf.meta.description}
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link rel="manifest" href="/site.webmanifest" />

    <meta name="description" content={description ?? siteConf.meta.description} />
    <meta property="og:url" content="https://apsis.io" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title ?? siteConf.meta.title} />
    <meta property="og:description" content={description ?? siteConf.meta.description} />
    <meta property="og:image" content="https://apsis.io/social.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="apsis.io" />
    <meta property="twitter:url" content="https://apsis.io" />
    <meta name="twitter:title" content={title ?? siteConf.meta.title} />
    <meta name="twitter:description" content={description ?? siteConf.meta.description} />
    <meta name="twitter:image" content="https://apsis.io/social.png" />
  </>
);
