import * as React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { normalizeSlug } from '../../utils/helpers';

import Bio from '../Bio';
import { Header, NavFooter } from './article'
import { Link } from 'gatsby';
import { DislikeFilled, FileTextFilled, LikeFilled } from '@ant-design/icons';

const DefaultSeriesDescription = ({ series }) => {
  const { title } = series;

  return (
    <>
      <p>&nbsp;&nbsp;{title}</p>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <h1>Content</h1>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <h1>References</h1>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
    </>
  )
}

const SeriesContent = ({ series }) => {
  const { posts, article } = series;

  return (
    <>
      {article && <MDXRenderer>{article.body}</MDXRenderer> || <DefaultSeriesDescription series={series} />}
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <p>&nbsp;&nbsp;</p>
      <h1>List Post</h1>
      <ul>
        {
          posts.map((post, index) => {
            return (
              <li key={index}>
                <Link
                  className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-blue-500"
                  to={normalizeSlug(post.slug)} rel="post">
                  {post.title || post.frontmatter.title}
                  <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

const getSeriesAttributes = (series) => {
  const { posts } = series;
  const numberOfPost = posts.length;

  return {
    numberOfPost,
  }
}

const HeaderSeriesTitle = ({ series }) => {
  const { posts } = series;
  const attr = getSeriesAttributes(series);

  return (
    <>
      <dl className="space-y-10">
        <div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm leading-6 font-medium">
            <time>{posts[0].frontmatter.date}</time>
          </dd>
          <dd className="text-sm leading-6 font-medium">
            <span className="ml-3">{`${attr.numberOfPost}`}<FileTextFilled className="p-1" /></span>
            <span className="ml-3">{`${attr.numberOfPost}`}<LikeFilled className="p-1" /></span>
            <span className="ml-3">{`${attr.numberOfPost}`}<DislikeFilled className="p-1" /></span>
          </dd>
        </div>
      </dl>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl xl:leading-tight">
          {series.title}
        </h1>
      </div>
    </>
  );
}

const Series = ({ series, nextSeries, previousSeries }) => {
  const renderTitle = (data) => {
    return (
      <HeaderSeriesTitle series={data} />
    )
  }

  return (
    <article className="divide-y divide-gray-600">
      <Header data={series} renderTitle={renderTitle} />
      <main className="prose dark:prose-dark py-10 pb-8">
        <SeriesContent series={series} />
      </main>
      <footer className="pt-8">
        <Bio />
        <NavFooter next={nextSeries && nextSeries.node} previous={previousSeries && previousSeries.node} />
      </footer>
    </article>
  );
};

export default Series;
