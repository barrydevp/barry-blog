const path = require('path');
const BlogSeriesTemplate = path.resolve(`./src/templates/blog-series.tsx`);

module.exports = (actions, seriesDict) => {
  const { createPage } = actions;

  const series = Object.keys(seriesDict);

  if (series.length > 0) {
    series.forEach((_series, index) => {
      const currentSeries = seriesDict[_series];

      const nextSeries = index === 0 ? null : seriesDict[series[index - 1]];
      const previousSeries = index === series.length - 1 ? null : seriesDict[series[index + 1]];

      createPage({
        path: _series,
        component: BlogSeriesTemplate,
        context: {
          id: currentSeries.node && currentSeries.node.id || null,
          currentSeries,
          previousSeries,
          nextSeries,
        },
      });
    });
  }
}

