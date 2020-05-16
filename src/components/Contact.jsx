import React from 'react';

function Contact({ contactData }) {

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <article data-testid="contact" className="contact">
      <span className="contact__avatar">
        <img src={contactData && contactData.avatar} alt={`${contactData && contactData.name} avatar`}/>
      </span>
      <span data-testid="contact-name" className="contact__data">{contactData && contactData.name}</span>
      <span data-testid="contact-phone" className="contact__data">{contactData && contactData.phone}</span>
      <span data-testid="contact-country" className="contact__data">{contactData && contactData.country}</span>
      <span data-testid="contact-date" className="contact__data">{formatDate(contactData && contactData.admissionDate)}</span>
      <span data-testid="contact-company" className="contact__data">{contactData && contactData.company}</span>
      <span data-testid="contact-department" className="contact__data">{contactData && contactData.department}</span>        
    </article> 
  );
}

export default Contact;
