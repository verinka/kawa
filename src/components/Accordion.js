import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap';
import { AccordionContext } from 'react-bootstrap';



function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Accordion.Toggle as={Card.Header} eventKey={eventKey} id={'heading' + eventKey} className={ isCurrentEventKey ? 'active' : '' }>
      <button
        type="button"
        className='btn btn-link'
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    </Accordion.Toggle>
  );
}



function Accordions({accordion}) {
  return(
    <>
    <Accordion className="accordion" id="accordion" defaultActiveKey="0">
      {accordion.map((item, i) => (
        <Card key={i}>
            <ContextAwareToggle eventKey={'' + i}>{item.title}</ContextAwareToggle>
          <Accordion.Collapse eventKey={'' + i}>
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
