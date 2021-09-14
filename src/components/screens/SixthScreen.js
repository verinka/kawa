import React from 'react'
import propTypes from 'prop-types'

import DownloadLinksSecondary from '../DownloadLinksSecondary'

const SixthScreenTemplate = ({ header, subheader }) => (
  <div id="google-store-section" className="google-store-section sec-spacer">
    <div className="overlay" />
    <div className="content-container">
      <div className="row">
        <div className="col-sm-12">
          <div className="heading-section-center text-center white-color">
            <h3 className="title-heading">{header}</h3>
            <p className="subtitle-heading">{subheader}</p>
          </div>

          <DownloadLinksSecondary />

        </div>
      </div>
    </div>
  </div>
)

const SixthScreen = ({ data }) => {
  return <SixthScreenTemplate header={data.header} subheader={data.subheader} />
}

SixthScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string
  })
}
export default SixthScreen
