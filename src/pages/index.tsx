import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { useState } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Bio from '../components/Bio';
import { ListPost } from '../components/Post';

const IndexPage = ({ location, data }) => {
  const { site, allMdx } = data;
  const { siteMetadata: { title } } = site;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio />
      <ListPost posts={allMdx.nodes} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {frontmatter: {status: {eq: "published"}, type: {ne: "series"}}}
      skip: 0
      limit: 20
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        body
        slug
        timeToRead
      }
    }
  }
`;

