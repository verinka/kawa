import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Picture } from 'react-responsive-picture'

const DownloadLink = ({ className }) => (
  <StaticQuery
    query={graphql`
      query DownloadLinks {
        markdownRemark(frontmatter: { templateKey: { eq: "config-page" } }) {
          frontmatter {
            downloadlinks {
              appstore
              playmarker
              youtubevideo
            }
          }
        }
      }
    `}
    render={data => (
      <ul className={className}>
        <li className="mr-3">
          <a href={data.markdownRemark.frontmatter.downloadlinks.playmarker} target="_blank">
            <Picture
              sources={[
                {
                  srcSet: '/images/icons/icon_googleplay_footer.webp',
                  type: 'image/webp'
                },
                {
                  src: '/images/icons/icon_googleplay_footer.png',
                  alt: 'kawa google play',
                  className: 'img-fluid'
                }
              ]}
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
            />
          </a>
        </li>
        <li className="mr-3">
          <a href={data.markdownRemark.frontmatter.downloadlinks.appstore} target="_blank">
            <Picture
              sources={[
                {
                  srcSet: '/images/icons/icon_appstore_footer.webp',
                  type: 'image/webp',
                  src: '/images/icons/icon_appstore_footer.png',
                },
                {
                  src: '/images/icons/icon_appstore_footer.png',
                  alt: 'kawa apple appstore',
                  className: 'img-fluid'
                }
              ]}
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
            />
          </a>
        </li>
        {/* <li className="mr-3">
          <a href={data.markdownRemark.frontmatter.downloadlinks.youtubevideo} target="_blank">
            <Picture
              sources={[
                {
                  srcSet: '/images/icons/youtube.webp',
                  type: 'image/webp',
                  src: 'data:,'
                },
                {
                  src: '/images/icons/youtube.png',
                  alt: 'kawa youtube',
                  className: 'img-fluid'
                }
              ]}
            />
          </a>
        </li> */}
      </ul>
    )}
  />
)

export default DownloadLink
