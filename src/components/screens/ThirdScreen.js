import React from 'react'
import propTypes from 'prop-types'
import Accordion from '../Accordion'

const ThirdScreenTemplate = ({ header, accordion }) => (
  <div id="faq-section" className="faq-section sec-spacer">
    <div className="content-container">
      <div className="row">
        <div className="col-sm-12">
          <div className="heading-section-center text-center">
            <h3 className="title-heading">{header}</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Accordion accordion={accordion} />
        </div>

        <div className="col-lg-6 col-12">
          <div className="faq-img">
            <picture>
              <source srcSet="/images/3/phone-3_.webp" type="image/webp" />
              <source
                srcSet="/images/3/phone-3_.webp 1x, images/3/phone-3@2x.webp 2x, images/3/phone-3@3x.webp 3x"
                type="image/webp"
              />
              <source
                srcSet="/images/3/phone-3_.png 1x, images/3/phone-3@3x.png 2x, images/3/phone-3@3x.png 3x"
                type="image/png"
              />
              <img srcSet="/images/3/phone-3_.png" alt="kawa phone faq" src="data:," />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ThirdScreen = ({ data }) => {
  return <ThirdScreenTemplate header={data.header} accordion={data.accordion} />
}

ThirdScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    accordion: propTypes.array
  })
}
export default ThirdScreen
