import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SocialIcons = ({ slideText }) => (
  <StaticQuery
    query={graphql`
      query SocialLinks {
        markdownRemark(frontmatter: { templateKey: { eq: "config-page" } }) {
          frontmatter {
            sociallinks {
              facebook
              instagram
              twitter
              youtube
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        <li>
          <a target="_blank" href={data.markdownRemark.frontmatter.sociallinks.facebook}>
            <i className="icon2-fb" />
            {slideText ? (
              <span className="animated slideInRight">кawa.app</span>
            ) : (
              ''
            )}
          </a>
        </li>
        {/* <li>
          <a target="_blank" href={data.markdownRemark.frontmatter.sociallinks.twitter}>
            <i className="icon2-tw" />
            {slideText ? (
              <span className="animated slideInRight">кawa.app</span>
            ) : (
              ''
            )}
          </a>
        </li> */}
        {/* <li>
          <a target="_blank" href={data.markdownRemark.frontmatter.sociallinks.youtube}>
            <i className="icon2-yt" />
            {slideText ? (
              <span className="animated slideInRight">кawa.app</span>
            ) : (
              ''
            )}
          </a>
        </li> */}
        <li>
          <a target="_blank" href={data.markdownRemark.frontmatter.sociallinks.instagram}>
            <i className="icon2-insta" />
            {slideText ? (
              <span className="animated slideInRight">кawa.app</span>
            ) : (
              ''
            )}
          </a>
        </li>
      </ul>
    )}
  />
)

export default SocialIcons
