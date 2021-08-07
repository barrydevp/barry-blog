module.exports = {
  siteMetadata: {
    title: `B[arry]log`,
    author: `Hải Đào (barrydevp)`,
    description: `Just my blogs :)`,
    birthday: `2000-01-29`,
    siteUrl: `https://barrydevp-blog.netlify.com/`,
    socials: [
      {
        name: `facebook`,
        link: `https://www.facebook.com/profile.php?id=100009731830079`
      },
      {
        name: `github`,
        link: `https://github.com/barrydevp`
      },
      {
        name: `linkedin`,
        link: `https://www.linkedin.com/in/hai-dao-6569a71b3`
      }
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Barry Blog`,
        short_name: `b[arry]log`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005bff`,
        display: `minimal-ui`,
        icon: "content/assets/shoutrrr-logotype.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./content/assets/",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/posts/",
      },
      __key: "posts",
    },
    'gatsby-plugin-postcss'
  ],
};
