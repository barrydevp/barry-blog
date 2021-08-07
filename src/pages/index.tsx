import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { useState } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Bio from '../components/Bio';

const IndexPage = ({ location, data }) => {
  const { site: { siteMetadata: { title } } } = data;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <Bio />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// allMarkdownRemark(
//   skip: 0
//   limit: 20
//   sort: { fields: [frontmatter___date], order: DESC }
// ) {
//   edges {
//     node {
//       excerpt
//       fields {
//         slug
//       }
//       timeToRead
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         status
//       }
//     }
//   }
//   totalCount
// }
