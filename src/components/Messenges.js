import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Messenges = () => (
  <StaticQuery
    query={graphql`
      query Messenges {
        markdownRemark(frontmatter: { templateKey: { eq: "config-page" } }) {
          frontmatter {
            supportlinks {
              viber
              facebookmessenger
              telegram
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
      <div className="col-md-4 col-sm-12 text-center">
        <a href={data.markdownRemark.frontmatter.supportlinks.viber} className="contact-link">
          <img
            srcSet="/images/icons/viber.png"
            alt="kawa viber"
            className="contact-link__thumb img-fluid"
            src="data:,"
          />
          <div className="contact-link__btn contact-link__btn--viber">
            VIBER
          </div>
        </a>
      </div>
      <div className="col-md-4 col-sm-12 text-center">
        <a href={data.markdownRemark.frontmatter.supportlinks.facebookmessenger} className="contact-link">
          <img
            srcSet="/images/icons/messenger.png"
            alt="kawa messenger"
            className="contact-link__thumb"
            src="data:,"
          />
          <div className="contact-link__btn contact-link__btn--messenger">
            MESSENGER
          </div>
        </a>
      </div>
      <div className="col-md-4 col-sm-12 text-center">
        <a href={data.markdownRemark.frontmatter.supportlinks.telegram} className="contact-link">
          <img
            srcSet="/images/icons/telegram.png"
            alt="kawa telegram"
            className="contact-link__thumb"
            src="data:,"
          />
          <div className="contact-link__btn contact-link__btn--telegram">
            TELEGRAM
          </div>
        </a>
      </div>
    </div>
    )}
  />
)

export default Messenges
