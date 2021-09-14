import React from 'react'
import PropTypes from 'prop-types'

const Accordion = ({ accordion }) => (
  <div className="accordion" id="accordion">
    {accordion.map((item, i) => (
      <div key={i} className="card">
        <div className="card-header" id={'heading' + i}>
          <button
            className={i > 0 ? 'btn btn-link collapsed' : 'btn btn-link'}
            type="button"
            data-toggle="collapse"
            data-target={'#collapse' + i}
            aria-expanded="false"
            aria-controls={'collapse' + i}
          >
            {item.title}
          </button>
        </div>
        <div
          id={'collapse' + i}
          className={i === 0 ? 'collapse show' : 'collapse'}
          aria-labelledby={'collapse' + i}
          data-parent="#accordion"
        >
          <div className="card-body">{item.text}</div>
        </div>
      </div>
    ))}
  </div>
)

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default Accordion
