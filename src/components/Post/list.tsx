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

interface PostProps {
  post: PostData,
}

const Post = ({ post }: PostProps) => {
  const { slug, timeToRead, frontmatter } = post;
  const { title, date, description: frontDescription } = frontmatter;

  return (
    <li className="py-8">
      <article className={styles.article}>
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
    </li>
  );
};

export interface ListPostProps {
  posts: PostData[];
}

const ListPost = ({ posts }: ListPostProps) => {

  return (
    <ul className="divide-y divide-gray-600">
      {
        posts.map(post => (<Post key={post.id} post={post}/>))
      }
    </ul>
  );
};


export default ListPost;
