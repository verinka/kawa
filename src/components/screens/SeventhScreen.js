import React from 'react'
import propTypes from 'prop-types'

import Messages from '../Messenges'
import Phones from '../Phones'

const SeventhScreenTemplate = ({ header, subheader, text }) => (
  <div id="contact-section2" className="contact-section2 sec-spacer">
    <div className="content-container">
      <div className="row heading-section-center text-center">
        <div className="col-sm-12">
          <h3 className="title-heading">{header}</h3>
          {/* <div className="sub-title">{subheader}</div> */}
        </div>
      </div>
  
      {/* <Messages /> */}

      <div className="row">
        <div className="col-sm-12 text-center contact-text">
          <p>{text}</p>
        </div>
      </div>

      <Phones />
    </div>
  </div>
)

const SeventhScreen = ({ data }) => {
  return (
    <SeventhScreenTemplate
      header={data.header}
      subheader={data.subheader}
      text={data.text}
    />
  )
}

SeventhScreen.propTypes = {
  data: propTypes.shape({
    header: propTypes.string,
    subheader: propTypes.string,
    text: propTypes.string
  })
}
export default SeventhScreen
