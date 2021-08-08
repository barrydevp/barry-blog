import * as React from 'react';
import { Link } from 'gatsby';

import styles from './styles';
import { formatReadingTime } from '../../utils/helpers';

interface PostData {
  id: string;
  body: string;
  slug: string;
  timeToRead: number;
  frontmatter: {
    date: string
    title: string
    description: string
  };
}

export interface PostProps {
  post: PostData,
}

const Post = ({ post }: PostProps) => {
  const { id, body, slug, timeToRead, frontmatter } = post;
  const { title, date, description: frontDescription } = frontmatter;

  return (
    <article className={styles.article} key={id}>
      {/*<h2>{node.frontmatter.title}</h2>*/}
      {/*<p>Posted: {node.frontmatter.date}</p>*/}
      {/*<MDXRenderer>*/}
      {/*  {node.body}*/}
      {/*</MDXRenderer>*/}
      <h3 className="">
        <Link style={{ textDecoration: `none`, boxShadow: `none` }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>
        {date}
        {` • ${formatReadingTime(timeToRead)}`}
      </small>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: frontDescription || title,
          }}
        />
      </section>
    </article>
  );
};

Post.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Post;
