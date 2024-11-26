import { siteConf } from "conf";

export const PageMeta: React.FC<{
  title?: string;
  image?: string;
  description?: string;
  path?: string;
  baseUrl?: string;
  domain?: string;
}> = ({
  title,
  image,
  description,
  path,
  baseUrl = "https://apsis.io",
  domain = "apsis.io",
}) => (
  <>
    <meta
      name="description"
      key="description"
      content={description ?? siteConf.meta.description}
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <meta property="og:url" content={path ? `${baseUrl}${path}` : baseUrl} />
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
    <meta
      property="twitter:url"
      content={path ? `${baseUrl}${path}` : baseUrl}
    />
    <meta name="twitter:title" content={title ?? siteConf.meta.title} />
    <meta
      name="twitter:description"
      content={description ?? siteConf.meta.description}
    />
    <meta
      name="twitter:image"
      content={image ? `${baseUrl}${image}` : `${baseUrl}/social.png`}
    />
  </>
);
