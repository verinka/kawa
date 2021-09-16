import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const DownloadLinksSecondary = () => (
  <StaticQuery
    query={graphql`
      query DownloadLinksSecondary {
        markdownRemark(frontmatter: { templateKey: { eq: "config-page" } }) {
          frontmatter {
            downloadlinks {
              appstore
              playmarker
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="store-images">
        <li>
          <a href={data.markdownRemark.frontmatter.downloadlinks.playmarker}>
            <img
              srcSet="/images/icons/icon_googleplay_footer.png"
              alt="Google store"
              src="data:,"
            />
          </a>
        </li>
        <li>
          <a href={data.markdownRemark.frontmatter.downloadlinks.appstore}>
            <img
              srcSet="/images/icons/icon_appstore_footer.png"
              alt="Google store"
              src="data:,"
            />
          </a>
        </li>
      </ul>
    )}
  />
)

export default DownloadLinksSecondary
