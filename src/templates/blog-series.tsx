import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/seo';
import { Series } from '../components/Post';

const BlogSeriesTemplate = (props) => {
  const { data, location, pageContext } = props;
  const { site, mdx } = data;
  const { currentSeries, nextSeries, previousSeries } = pageContext;
  currentSeries.article = mdx

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
  query SeriesWithSiteById($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        series
      }
    }
  }
`;
