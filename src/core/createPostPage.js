const path = require('path');
const BlogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);

module.exports = (actions, posts, seriesDict) => {
  const { createPage } = actions;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const nextPost = index === 0 ? null : posts[index - 1];
      const previousPost = index === posts.length - 1 ? null : posts[index + 1];
      const series = seriesDict[post.seriesSlug];

      createPage({
        path: post.slug,
        component: BlogPostTemplate,
        context: {
          id: post.id,
          previousPost,
          nextPost,
          series,
        },
      });
    });
  }
}

