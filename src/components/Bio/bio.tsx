import * as React from 'react';
import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled
} from '@ant-design/icons';

const SOCIAL_ICON_MAP = {
  facebook: FacebookFilled,
  github: GithubFilled,
  linkedin: LinkedinFilled
};

const AuthorDescription = ({ siteMetaData }) => {
  const { author, birthday } = siteMetaData;

  return (
    <p>
      <strong className="text-purple-600 dark:text-purple-300">{author}</strong> -
      <strong className="text-yellow-500"> {(new Date()).getFullYear() - (new Date(birthday)).getFullYear()} </strong>
      years old, student at University of Engineering & Technology.
      {` `}
    </p>
  );
};

const SocialDetail = ({ siteMetaData }) => {
  const { socials } = siteMetaData;

  const displaySocial = useMemo(() => (
    socials.map((social) => {
      const SocialIcon = SOCIAL_ICON_MAP[social.name];
      const _social = Object.assign({ icon: <SocialIcon style={{ fontSize: '20px' }}/> }, social);

      return (
        <Social key={social.name} social={_social}/>
      );
    })
  ), [socials]);

  return (
    <div className="flex">
      {displaySocial}
    </div>
  );
};

const Social = ({ social }) => {
  const { name, link, icon } = social;

  return (
    <a
      className="mx-2"
      href={link}
      title={name}
      target="_blank"
      rel="nofollow noopener"
    >
      {icon}
    </a>
  );
};

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/shoutrrr-logotype.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          birthday
          socials {
            name
            link
          }
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const { author } = siteMetadata;

  return (
    <div className="flex mb-12">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div className="ml-2 md:ml-4">
        <AuthorDescription siteMetaData={siteMetadata}/>
        <SocialDetail siteMetaData={siteMetadata}/>
      </div>
    </div>
  );
};

export default Bio;
