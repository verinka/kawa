import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { AccordionContext } from 'react-bootstrap';

function Accordions({accordion}) {
  // const { activeEventKey } = useContext(AccordionContext);
  return(
    <>
    <Accordion className="accordion" id="accordion" defaultActiveKey="u0">
      {accordion.map((item, i) => (
        <Card key={i}>
          <Accordion.Toggle as={Card.Header} eventKey={'u' + i} id={'heading' + i}>
          <button
                className='btn btn-link'
                type="button"
              >
              {item.title}
              </button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={'u' + i}>
                <Card.Body>{item.text}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
    </>
  )
}

Accordions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default Accordions
