import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/seo';
import { Article } from '../components/Post';

const BlogPostTemplate = (props) => {
  const { data, location, pageContext } = props;
  const { site, mdx: post } = data;
  const { series, nextPost, previousPost } = pageContext;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article series={series} post={post} nextPost={nextPost} previousPost={previousPost} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PostWithSiteBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        series
        series_index
      }
      slug
    }
  }
`;
