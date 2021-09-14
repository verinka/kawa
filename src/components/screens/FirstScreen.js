import React from 'react'
import propTypes from 'prop-types'
import DonwloadLink from '../DownloadLink'
import SocialIcons from '../SocialIcons'

const FirstScreenTemplate = ({ header, subheader, text, hiddentext }) => (
  <div className="full-screenbg lazy" data-src="/images/bg.png">
    <div className="inner">
      <div className="content-container">
        <div className="row">
          <div className="d-none d-xl-block col-xl-1">
            <div className="social-icons social-icons-desktop">
              <SocialIcons slideText={true} />
            </div>
          </div>
          <div className="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
            <picture>
              <source
                srcSet="/images/1/phone-1.webp 1x, /images/1/phone-1@2x.webp 2x, /images/1/phone-1@3x.webp 3x"
                type="image/webp"
              />
              <source
                srcSet="/images/1/phone-1.png 1x, /images/1/phone-1@2x.png 2x, /images/1/phone-1@3x.png 3x"
                type="image/png"
              />
              <img
                srcSet="/images/1/phone-1.png"
                alt="kawa phone main"
                className="iphone"
              />
            </picture>
          </div>
          <div className="col-6 col-sm-7 col-md-7 col-lg-8 offset-xl-1 col-xl-6">
            <h1 className="title">{header}</h1>
            <h3 className="subtitle">{subheader}</h3>
            <div className="text">
              <p>{text}</p>
              <p className="d-none d-sm-inline">{hiddentext}</p>
            </div>
            <DonwloadLink className={'app-btn mt-5'} />
          </div>
          <div className="col-12">
            <DonwloadLink className={'app-btn app-btn-mobile mt-5'} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FirstScreen = ({ data }) => {
  return (
    <FirstScreenTemplate
      header={data.header}
      subheader={data.subheader}
      text={data.text}
      hiddentext={data.hiddentext}
    />
  )
}

FirstScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    text: propTypes.string,
    hiddentext: propTypes.string
  })
}
export default FirstScreen
