const path = require(`path`);
const slugify = require('@sindresorhus/slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

const { createPostPage, createSeriesPage } = require('./src/core');

const _getSeriesSlug = (series, postSlug) => {
  const category = path.dirname(postSlug);

  return `${category}/_series/${slugify(series)}/`;
}

const _detectSeriesArticle = (node) => {
  const { frontmatter, slug } = node;

  const { type, series } = frontmatter;

  if (type !== 'series') {
    return null;
  }

  const category = path.dirname(slug);

  node.slug = `${category}/${slugify(series)}/`;

  return node;
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: {fields: frontmatter___date, order: DESC}
        ) {
          nodes {
            frontmatter {
              status
              type
              series
              series_index
              title
              date(formatString: "MMMM DD, YYYY")
            }
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const seriesDict = {};

  const posts = result.data.allMdx.nodes.filter(
    (node) => {
      const { type, status, series, series_index } = Object.assign({}, node.frontmatter);
      const isPublished = status === 'published';
      const isArticle = type !== 'series';

      if (series) {
        const seriesArticle = _detectSeriesArticle(node);

        let seriesSlug = '';

        if (seriesArticle) {
          seriesSlug = seriesArticle.slug;
        } else {
          seriesSlug = _getSeriesSlug(series, node.slug);
        }

        if (!seriesDict[seriesSlug]) {
          seriesDict[seriesSlug] = {
            title: series,
            posts: [],
            slug: seriesSlug,
          }
        }

        if (seriesArticle) {
          seriesDict[seriesSlug].node = node;
        }

        if (series_index >= 0) {
          const seriesIndxNum = parseInt(series_index, 10);

          node.seriesSlug = seriesSlug;
          seriesDict[seriesSlug].posts[seriesIndxNum] = node;
        }

      }

      return isPublished && isArticle;
    }
  );

  // const totalCount = result.data.allMarkdownRemark.totalCount
  // const totalCount = posts.length;
  // const postsPerPage = 10;
  // const numPages = Math.ceil(totalCount / postsPerPage);
  //
  // for (let i = 0; i < numPages; ++i) {
  //   createPage({
  //     path: i === 0 ? `/pages` : `/pages/${i + 1}`,
  //     component: path.resolve('./src/templates/blog-list.js'),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // }

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  createPostPage(actions, posts, seriesDict);

  createSeriesPage(actions, seriesDict);

};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//
//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js
//
//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//     type Author {
//       name: String
//       summary: String
//     }
//     type Social {
//       twitter: String
//     }
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }
//     type Fields {
//       slug: String
//     }
//   `);
// };

