import React from 'react'
import propTypes from 'prop-types'

const FifthScreenTemplate = ({ header }) => (
  <div id="gallery-section" className="gallery-section sec-spacer">
    <div className="container">
      <div className="row heading-section-center text-center">
        <div className="col-sm-12">
          <h3 className="title-heading">{header}</h3>
          <div className="sub-title" />
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center">
          <div
            className="rs-carousel owl-carousel"
            data-loop="true"
            data-items="5"
            data-margin="25"
            data-autoplay="true"
            data-autoplay-timeout="5000"
            data-smart-speed="2000"
            data-dots="false"
            data-nav="false"
            data-nav-speed="false"
            data-mobile-device="1"
            data-mobile-device-nav="true"
            data-mobile-device-dots="false"
            data-ipad-device="2"
            data-ipad-device-nav="false"
            data-ipad-device-dots="false"
            data-md-device="5"
            data-md-device-nav="false"
            data-md-device-dots="false"
          >
            <div className="single-gallery">
              <a href="/images/5/dostavka.jpg" className="popup-quote">
                <picture>
                  <source
                    srcSet="/images/5/dostavka.webp"
                    type="image/webp"
                  />
                  <img srcSet="/images/5/dostavka.jpg" alt="Gallery" src="data:," />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/about.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/about.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/about.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/Support.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/Support.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/Support.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/Main.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/Main.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/Main.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/menu.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/menu.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/menu.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a href="images/5/Cart.jpg" className="popup-quote">
                <picture>
                  <source srcSet="/images/5/Cart.webp" type="image/webp" />
                  <img srcSet="/images/5/Cart.jpg" alt="Gallery" src="data:," />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/gadanie.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/gadanie.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/gadanie.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/moi-ocenki.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/moi-ocenki.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/moi-ocenki.jpg"
                    alt="Gallery"
                    src="data:,"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a href="images/5/Rec.jpg" className="popup-quote">
                <picture>
                  <source srcSet="/images/5/Rec.webp" type="image/webp" />
                  <img srcSet="/images/5/Rec.jpg" alt="Gallery" src="data:," />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/zakazy.jpg"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/zakazy.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/zakazy.jpg"
                    alt="Gallery"
                    src=""
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FifthScreen = ({ data }) => {
  return <FifthScreenTemplate header={data.header} />
}

FifthScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string
  })
}
export default FifthScreen
