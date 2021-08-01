// import React, { useMemo } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
// // import { Tag } from 'antd';
// import {
//   FacebookFilled,
//   GithubFilled
// } from '@ant-design/icons';
//
// // import { rhythm } from '../utils/typography';
//
// const SOCIAL_ICON_MAP = {
//   facebook: FacebookFilled,
//   github: GithubFilled,
// };
//
// const AuthorDescription = ({ siteMetaData }) => {
//   const { author, birthday } = siteMetaData;
//
//   return (
//     <p className='mb-1'>
//       <strong>{author}</strong> - <strong>{(new Date()).getFullYear() - (new Date(birthday)).getFullYear()}</strong> years
//       old, student at University of Engineering & Technology.
//       {` `}
//     </p>
//   );
// };
//
// const SocialDetail = ({ siteMetaData }) => {
//   const { socials } = siteMetaData;
//
//   const displaySocial = useMemo(() => (
//     socials.map((social) => {
//       const SocialIcon = SOCIAL_ICON_MAP[social.name];
//       const _social = Object.assign({ icon: <SocialIcon/> }, social);
//
//       return (
//         <Social social={_social}/>
//       );
//     })
//   ), [socials]);
//
//   return (
//     <>
//       {displaySocial}
//       {/*<a href={`${social.facebook}`}>*/}
//       {/*  Facebook*/}
//       {/*</a>*/}
//       {/*{` `}*/}
//       {/*<a href={`${social.github}`}>*/}
//       {/*  Git*/}
//       {/*</a>*/}
//     </>
//   );
// };
//
// const Social = ({ social }) => {
//   const { name, link, icon } = social;
//
//   return (
//       <a
//         className='m-2'
//         href={link}
//         title={name}
//         target="_blank"
//         rel="nofollow noopener"
//       >
//         <Tag icon={icon} />
//       </a>
//   );
// };
//
// const Bio = () => {
//   const data = useStaticQuery(graphql`
//     query BioQuery {
//       avatar: file(absolutePath: { regex: "/shoutrrr-logotype.png/" }) {
//         childImageSharp {
//           fixed(width: 50, height: 50) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//       site {
//         siteMetadata {
//           author
//           birthday
//           socials {
//             name
//             link
//           }
//         }
//       }
//     }
//   `);
//
//   const siteMetadata = data.site.siteMetadata;
//   const { author } = siteMetadata;
//
//   return (
//     <div
//       style={{
//         display: `flex`,
//         marginBottom: rhythm(2.5),
//       }}
//     >
//       <Image
//         fixed={data.avatar.childImageSharp.fixed}
//         alt={author}
//         style={{
//           marginRight: rhythm(1 / 2),
//           marginBottom: 0,
//           minWidth: 50,
//           borderRadius: `100%`,
//         }}
//         imgStyle={{
//           borderRadius: `50%`,
//         }}
//       />
//       <div>
//         <AuthorDescription siteMetaData={siteMetadata}/>
//         <SocialDetail siteMetaData={siteMetadata}/>
//       </div>
//     </div>
//   );
// };
//
// export default Bio;

export default () => {

    return (
        <h1>
            Hello
        </h1>
    )
}