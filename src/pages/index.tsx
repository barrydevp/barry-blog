import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { useState } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Bio from '../components/Bio';
import { Post } from '../components/Post';

import { formatPostDate, formatReadingTime } from '../utils/helpers';

const IndexPage = ({ location, data }) => {
  const { site, allMdx } = data;
  const { siteMetadata: { title } } = site;

  return (
    <Layout location={location} title={title}>
      <SEO title={title}/>
      <Bio/>
      {
        allMdx.nodes.map((node) => {
          return (
            <Post key={node.id} post={node} />
          );
        })
      }
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
