import React from 'react'
import propTypes from 'prop-types'

const SecondScreenTemplate = ({ header, subheader, cards }) => (
  <div
    id="features-app"
    className="features-app-section2 features-app-section sec-spacer"
  >
    <div className="overlay" />
    <div className="content-container">
      <div className="row heading-section-center text-center white-color">
        <div className="col-sm-12">
          <h3 className="title-heading">{header}</h3>
          <div className="sub-title">{subheader}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div
            className="features-service text-right"
            data-img="/images/2/catalog.png"
            data-img-webp="/images/2/catalog.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/cart.png"
                alt="kawa cart"
                className="img-fluid"
                src="data:,"
              />
            </div>

            <div className="features-content">
              <h3>{cards.firstleftcard.cardtitle}</h3>
              <p>{cards.firstleftcard.cardtext}</p>
            </div>
          </div>
          <div
            className="features-service text-right"
            data-img="/images/2/my_addition_coffee_scan.png"
            data-img-webp="/images/2/my_addition_coffee_scan.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/barcode.png"
                alt="kawa barcode scanner"
                className="img-fluid"
                src="data:,"
              />
            </div>
            <div className="features-content">
              <h3>{cards.secondleftcard.cardtitle}</h3>
              <p>{cards.secondleftcard.cardtext}</p>
            </div>
          </div>
          <div
            className="features-service text-right"
            data-img="/images/2/my-coffee.png"
            data-img-webp="/images/2/my-coffee.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/coffee-beans.png"
                alt="kawa coffee card"
                className="img-fluid"
                src="data:,"
              />
            </div>
            <div className="features-content">
              <h3>{cards.thirdleftcard.cardtitle}</h3>
              <p>{cards.thirdleftcard.cardtext}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 text-center feture-mid-images">
          <picture>
            <source
              srcSet="/images/2/catalog.webp"
              type="image/webp"
              id="featureImageWebp"
            />
            <img
              srcSet="/images/2/catalog.png"
              alt="kawa catalog"
              id="featureImage"
              src="data:,"
            />
          </picture>
        </div>
        <div className="col-lg-4 col-md-12">
          <div
            className="features-service text-left"
            data-img="/images/2/2-svejak.png"
            data-img-webp="/images/2/2-svejak.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/menu.png"
                alt="kawa menu"
                className="img-fluid"
                src="data:,"
              />
            </div>
            <div className="features-content">
              <h3>{cards.firstrightcard.cardtitle}</h3>
              <p>{cards.firstrightcard.cardtext}</p>
            </div>
          </div>
          <div
            className="features-service text-left"
            data-img="/images/2/2-suputni-tovary.png"
            data-img-webp="/images/2/2-suputni-tovary.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/search.png"
                alt="kawa search"
                className="img-fluid"
                src="data:,"
              />
            </div>
            <div className="features-content">
              <h3>{cards.secondrightcard.cardtitle}</h3>
              <p>{cards.secondrightcard.cardtext}</p>
            </div>
          </div>
          <div
            className="features-service text-left"
            data-img="/images/2/divination.png"
            data-img-webp="/images/2/divination.webp"
          >
            <div className="features-icon">
              <img
                srcSet="/images/icons/cup.png"
                alt="kawa divination"
                className="img-fluid"
                src="data:,"
              />
            </div>
            <div className="features-content">
              <h3>{cards.thirdrightcard.cardtitle}</h3>
              <p>{cards.thirdrightcard.cardtext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SecondScreen = ({ data }) => {
  return (
    <SecondScreenTemplate
      header={data.header}
      subheader={data.subheader}
      cards={data.cards}
    />
  )
}

SecondScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    cards: propTypes.shape({
      firstleftcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      }),
      secondleftcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      }),
      thirdleftcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      }),
      firstrightcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      }),
      secondrightcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      }),
      thirdrightcard: propTypes.shape({
        cardtitle: propTypes.string,
        cardtext: propTypes.string
      })
    })
  })
}
export default SecondScreen
