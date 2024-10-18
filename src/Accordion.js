import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Accordion.css';

const Accordion = ({ title, content1, content2, content3, content4, content5, content6, content7, content8, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
      {image && <img src={image} alt="icon" className="accordion-icon" width="30px" height="32px"/>}
        <h3>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content1}</p>
          <p>{content2}</p>
          <p>{content3}</p>
          <p>{content4}</p>
          <p>{content5}</p>
          <p>{content6}</p>
          <p>{content7}</p>
          <p>{content8}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
