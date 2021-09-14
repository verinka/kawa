import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Phones = () => (
  <StaticQuery
    query={graphql`
      query Phones {
        markdownRemark(frontmatter: { templateKey: { eq: "config-page" } }) {
          frontmatter {
            phones {
              kyivstar
              vodafone
              lifecell
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
        <div className="col-sm-12">
          <ul className="contact-phone__list">
            <li className="contact-phone__item">
              <img
                srcSet="/images/icons/vodafone.png"
                className="img-fluid"
                alt="vodafone"
              />
              {data.markdownRemark.frontmatter.phones.vodafone}
            </li>
            <li className="contact-phone__item">
              <img
                srcSet="/images/icons/kyivstar.png"
                className="img-fluid"
                alt="kyivstar"
              />
              {data.markdownRemark.frontmatter.phones.kyivstar}
            </li>
            <li className="contact-phone__item">
              <img
                srcSet="/images/icons/lifecell.png"
                className="img-fluid"
                alt="lifecell"
              />
              {data.markdownRemark.frontmatter.phones.lifecell}
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default Phones
