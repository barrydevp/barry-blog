import * as React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { formatReadingTime, normalizeSlug } from '../../utils/helpers';

import Bio from '../Bio';
import { graphql, Link, useStaticQuery } from 'gatsby';

export const Author = ({ name, avatar, tagging, link }) => {
  return (
    <li className="flex items-center space-x-2">
      <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
      <dl className="text-sm font-medium whitespace-no-wrap">
        <dt className="sr-only">Name</dt>
        <dd className="">{name}</dd>
        <dt className="sr-only">Contact</dt>
        <dd>
          <a target="_blank" href={link} className="text-purple-400 hover:text-purple-500">
            @{tagging}
          </a>
        </dd>
      </dl>
    </li>
  );
};

export const gatsbyAuthor = {
  name: 'Gatsby Bot',
  tagging: 'gatsbybot',
  avatar: 'https://avatars.githubusercontent.com/u/25650701?s=120&v=4',
  link: 'https://github.com/gatsbybot'
}

const HeaderPostTitle = ({ series, post }) => {
  return (
    <>
      <dl className="space-y-10">
        <div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm leading-6 font-medium">
            <time>{post.frontmatter.date}</time>
            <span>{`. ${formatReadingTime(post.timeToRead)}`}</span>
          </dd>
        </div>
      </dl>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl xl:leading-tight">
          {post.frontmatter.title}
        </h1>
      </div>
      {series && (
        <div>
          <dt className="sr-only">Series</dt>
          <dd className="text-lg leading-6 font-medium">
            Part {post.frontmatter.series_index + 1} of series <Link
              className="transition-colors duration-200 text-purple-400 hover:text-purple-500"
              to={normalizeSlug(series.slug)}>{series.title}</Link>.
          </dd>
        </div>
      )}
    </>
  );
}

export const Header = ({ data, renderTitle }) => {
  const blogAuthorData = useStaticQuery(graphql`
    query BlogAuthorQuery {
      avatar: file(absolutePath: { regex: "/shoutrrr-logotype.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          blogAuthor {
            name
            tagging
            link
          }
        }
      }
    }
  `);

  const blogAuthor = {
    avatar: blogAuthorData.avatar.childImageSharp.fixed.src,
    ...blogAuthorData.site.siteMetadata.blogAuthor,
  };

  return (
    <header className="pt-4">
      <div className="space-y-1 text-center">
        {renderTitle(data)}
      </div>
      <dl className="pt-6 pb-10">
        <dt className="sr-only">Authors</dt>
        <dd>
          <ul className="flex justify-center block space-x-8">
            {[blogAuthor, gatsbyAuthor].map((author, index) => (<Author key={index} {...author} />))}
          </ul>
        </dd>
      </dl>
    </header>
  );
};

export const NavFooter = ({ previous, next }) => {
  return (
    <ul className="mt-16 flex leading-5 font-semibold text-gray-500 dark:text-blue-200">
      <li className="flex mr-8">
        {previous && (
          <Link className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-blue-500"
            to={normalizeSlug(previous.slug)} rel="prev">
            <span aria-hidden="true" className="mr-2">←</span> {previous.title || previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li className="flex text-right ml-auto">
        {next && (
          <Link className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-blue-500"
            to={normalizeSlug(next.slug)} rel="next">
            {next.title || next.frontmatter.title} <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        )}
      </li>
    </ul>
  );
};

const SeriesReference = ({ series, curPost }) => {
  const { posts, slug } = series;


  return (
    <>
      <h1 className="pt-8">Another post in this&nbsp;
        <Link className="transition-colors duration-200 hover:text-yellow-500"
          to={normalizeSlug(slug)} rel="next" >series</Link>
      </h1>
      <ul>
        {
          posts.map((post, index) => {
            return (
              <li key={index}>
                {post.slug === curPost.slug &&
                  <p><span aria-hidden="true" className="text-xl mr-2 text-yellow-500">→</span>{post.frontmatter.title}</p> ||
                  <Link className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-blue-500"
                    to={normalizeSlug(post.slug)} rel="next" >{post.frontmatter.title}</Link>}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

const Article = ({ series, post, nextPost, previousPost }) => {
  const renderTitle = (data) => {
    return (
      <HeaderPostTitle post={data} series={series} />
    )
  }

  return (
    <article className="divide-y divide-gray-600">
      <Header data={post} renderTitle={renderTitle} />
      <main className="prose dark:prose-dark py-10 pb-8">
        <MDXRenderer>{post.body}</MDXRenderer>
        {series && <SeriesReference series={series} curPost={post} />}
      </main>
      <footer className="pt-8">
        <Bio />
        <NavFooter next={nextPost} previous={previousPost} />
      </footer>
    </article>
  );
};

export default Article;

