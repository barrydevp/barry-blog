const path = require('path');
const BlogSeriesTemplate = path.resolve(`./src/templates/blog-series.tsx`);

module.exports = (actions, seriesDict) => {
  const { createPage } = actions;

  const seriesSlugs = Object.keys(seriesDict);

  if (seriesSlugs.length > 0) {
    seriesSlugs.forEach((seriesSlug, index) => {
      const currentSeries = seriesDict[seriesSlug];

      const nextSeries = index === 0 ? null : seriesDict[seriesSlugs[index - 1]];
      const previousSeries = index === seriesSlugs.length - 1 ? null : seriesDict[seriesSlugs[index + 1]];

      createPage({
        path: seriesSlug,
        component: BlogSeriesTemplate,
        context: {
          currentSeries,
          previousSeries,
          nextSeries,
        },
      });
    });
  }
}

