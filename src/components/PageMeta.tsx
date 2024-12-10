import { siteConf } from "conf";
import { formattedTitle } from "lib/metadata";
import Head from "next/head";

export const PageMeta: React.FC<{
  title?: string;
  image?: string;
  description?: string;
  path?: string;
  baseUrl?: string;
  domain?: string;
  canonical?: string;
}> = ({
  title,
  image,
  description,
  path,
  canonical,
  baseUrl = "https://apsis.io",
  domain = "apsis.io",
}) => {
  const metaPath = path ? `${baseUrl}${path}` : baseUrl;
  const canonicalPath = canonical ?? metaPath;

  return (
    <Head>
      <title>{formattedTitle(title)}</title>

      <meta
        name="description"
        key="description"
        content={description ?? siteConf.meta.description}
      />

      <link rel="canonical" href={canonicalPath} />

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

      <meta property="og:url" content={metaPath} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? siteConf.meta.title} />
      <meta
        property="og:description"
        content={description ?? siteConf.meta.description}
      />
      <meta
        property="og:image"
        content={image ? `${baseUrl}${image}` : `${baseUrl}/social.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={metaPath} />
      <meta name="twitter:title" content={title ?? siteConf.meta.title} />
      <meta
        name="twitter:description"
        content={description ?? siteConf.meta.description}
      />
      <meta
        name="twitter:image"
        content={image ? `${baseUrl}${image}` : `${baseUrl}/social.png`}
      />
    </Head>
  );
};
