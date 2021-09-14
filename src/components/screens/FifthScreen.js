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
              <a href="/images/5/dostavka-u-oplata.png" className="popup-quote">
                <picture>
                  <source
                    srcSet="/images/5/dostavka-u-oplata.webp"
                    type="image/webp"
                  />
                  <img srcSet="/images/5/dostavka-u-oplata.png" alt="Gallery" />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/drugie-tovari-(karta-tovara).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/drugie-tovari-(karta-tovara).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/drugie-tovari-(karta-tovara).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/drugie-tovari-(karta-tovara-pop-up).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/drugie-tovari-(karta-tovara-pop-up).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/drugie-tovari-(karta-tovara-pop-up).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/gotovim-po-recepty(spravka).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/gotovim-po-recepty(spravka).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/gotovim-po-recepty(spravka).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/karta-tovara-(s-otzivom).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/karta-tovara-(s-otzivom).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/karta-tovara-(s-otzivom).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a href="images/5/korzina.png" className="popup-quote">
                <picture>
                  <source srcSet="/images/5/korzina.webp" type="image/webp" />
                  <img srcSet="/images/5/korzina.png" alt="Gallery" />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/li4nue-dannue(net-dati-rogdeni9).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/li4nue-dannue(net-dati-rogdeni9).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/li4nue-dannue(net-dati-rogdeni9).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/love-recepti-(prigotovlenie).png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/love-recepti-(prigotovlenie).webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/love-recepti-(prigotovlenie).png"
                    alt="Gallery"
                  />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a href="images/5/menu.png" className="popup-quote">
                <picture>
                  <source srcSet="/images/5/menu.webp" type="image/webp" />
                  <img srcSet="/images/5/menu.png" alt="Gallery" />
                </picture>
              </a>
            </div>
            <div className="single-gallery">
              <a
                href="images/5/ustori9-pokypok-catalog-2.png"
                className="popup-quote"
              >
                <picture>
                  <source
                    srcSet="/images/5/ustori9-pokypok-catalog-2.webp"
                    type="image/webp"
                  />
                  <img
                    srcSet="/images/5/ustori9-pokypok-catalog-2.png"
                    alt="Gallery"
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
