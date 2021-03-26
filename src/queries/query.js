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
            tagline
            backgroundImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
          ... on SanitySection {
            _key
            _type
            heading
            list {
              _key
              heading
              listItems
              picture {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
            picture {
              asset {
                fluid {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
            richText {
              _key
              _rawChildren(resolveReferences: { maxDepth: 10 })
              children {
                _key
                _type
                text
                marks
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
