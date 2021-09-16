import React from 'react'
import propTypes from 'prop-types'

const FourthScreenTemplate = ({ header, subheader, text, list }) => (
  <div id="about-section" className="about-section sec-spacer">
    <div className="overlay" />
    <div className="content-container">
      <div className="row">
        <div className="col-sm-12">
          <div className="heading-section-center text-center white-color">
            <h3 className="title-heading">{header}</h3>
            <div className="sub-title">{subheader}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 col-sm-12">
          <div className="about-details2">
            <p className="about-content">{text}</p>
            <ul className="about-list">
              {list.map(item => (
                <li key={item.listitem}>{item.listitem}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="about-img">
            <picture>
              <source srcSet="/images/4/phone-4_.webp" type="image/webp" />
              <source
                srcSet="/images/4/phone-4_.webp 1x, images/4/phone-4@2x.webp 2x, images/4/phone-4@3x.webp 3x"
                type="image/webp"
              />
              <source
                srcSet="/images/4/phone-4_.png 1x, images/4/phone-4@2x.png 2x, images/4/phone-4@3x.png 3x"
                type="image/png"
              />
              <img srcSet="/images/4/phone-4_.png" alt="kawa phone faq" src="data:," />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FourthScreen = ({ data }) => {
  return (
    <FourthScreenTemplate
      header={data.header}
      subheader={data.subheader}
      text={data.text}
      list={data.list}
    />
  )
}

FourthScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    text: propTypes.string,
    list: propTypes.array
  })
}
export default FourthScreen
