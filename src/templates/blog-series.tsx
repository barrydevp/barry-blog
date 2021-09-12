import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/seo';
import { Series } from '../components/Post';

const BlogSeriesTemplate = (props) => {
  const { data, location, pageContext } = props;
  const { site } = data;
  const { currentSeries, nextSeries, previousSeries } = pageContext;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={currentSeries.title}
        description={currentSeries.title}
      />
      <Series series={currentSeries} nextSeries={nextSeries} previousSeries={previousSeries} />
    </Layout>
  );
};

export default BlogSeriesTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
