module.exports = {
  siteMetadata: {
    siteUrl: "https://hashprotocol.io",
    title: "HashProtocol",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `./src/images/favicons/favicon-96x96.png`, // This path is relative to the root of the site.
        theme_color: `#fff`,
        icons: [
          {
            src: `/images/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `hashprotocol.io`,
        // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49#issuecomment-716125674
        customDomain: `plausible.hashprotocol.io/js/plausible.js?original=`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./src/pages/resources/`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // ...
          `gatsby-remark-autolink-headers`,
        ],
      },
    },{
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://hashprotocol.us6.list-manage.com/subscribe/post?u=cde2461ba84f5279fff352829&amp;id=bbbbbbbbb', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
