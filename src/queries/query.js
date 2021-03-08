import { useStaticQuery, graphql } from "gatsby";

const Query = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHome {
        _rawPageBuilder(resolveReferences: { maxDepth: 10 })
        pageBuilder {
          ... on SanitySeo {
            _key
            _type
            seo {
              seo_title
              meta_description
              focus_keyword
            }
          }
          ... on SanityHero {
            _key
            _type
            heading
            backgroundImage {
              asset {
                fluid {
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

export default Query;
