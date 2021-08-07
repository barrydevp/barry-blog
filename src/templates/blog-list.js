import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio/bio';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    // const siteTitle = data.site.siteMetadata.title
    const siteTitle = 'test';
    // const posts = data.allMarkdownRemark.edges.filter(({node}) => (node.frontmatter && node.frontmatter.status === 'public'))
    const { numPages, currentPage } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts"/>
        <Bio/>
        {/*{posts.map(({ node }) => {*/}
        {/*  const title = node.frontmatter.title || node.fields.slug*/}
        {/*  return (*/}
        {/*    <article className="prose" key={node.fields.slug}>*/}
        {/*      <header>*/}
        {/*        <h3*/}
        {/*          style={{*/}
        {/*            marginBottom: rhythm(1 / 4),*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>*/}
        {/*            {title}*/}
        {/*          </Link>*/}
        {/*        </h3>*/}
        {/*        <small>*/}
        {/*          {node.frontmatter.date}*/}
        {/*          {` • ${formatReadingTime(node.timeToRead)}`}*/}
        {/*        </small>*/}
        {/*      </header>*/}
        {/*      <section>*/}
        {/*        <p*/}
        {/*          dangerouslySetInnerHTML={{*/}
        {/*            __html: node.frontmatter.description || node.excerpt,*/}
        {/*          }}*/}
        {/*        />*/}
        {/*      </section>*/}
        {/*    </article>*/}
        {/*  )*/}
        {/*})}*/}
        {
          data.allMdx.nodes.map((node) => {
            const title = node.frontmatter.title || node.slug;

            return (
              <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl" key={node.id}>
                {/*<h2>{node.frontmatter.title}</h2>*/}
                {/*<p>Posted: {node.frontmatter.date}</p>*/}
                {/*<MDXRenderer>*/}
                {/*  {node.body}*/}
                {/*</MDXRenderer>*/}
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
                <small>
                  {node.frontmatter.date}
                  {` • ${formatReadingTime(node.timeToRead)}`}
                </small>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || title,
                    }}
                  />
                </section>
              </article>
            );
          })
        }
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {currentPage > 1 && (
                <Link to={currentPage - 1 === 1 ? `/pages` : `/pages/${currentPage - 1}`} rel="prev">
                  ← Page {currentPage - 1}
                </Link>
              )}
            </li>
            <li>
              {currentPage < numPages && (
                <Link to={`/pages/${currentPage + 1}`} rel="next">
                  Page {currentPage + 1} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default BlogIndex;

// export const pageQuery = graphql`
//   query($skip: Int!, $limit: Int!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       limit: $limit
//       skip: $skip
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           timeToRead
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             status
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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