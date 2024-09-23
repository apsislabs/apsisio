/** @type {import('next-sitemap').IConfig} */

module.exports = {
  sourceDir: "out",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://apsis.io",
  output: "export",
  exclude: ["/404"],
  generateRobotsTxt: true,
  trailingSlash: false,
};
