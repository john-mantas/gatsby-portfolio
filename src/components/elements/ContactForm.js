import React from 'react'

import '../../styles/components/elements/contact-form.scss'

const ContactForm = () => {
  return (
    <section className="contact-form__container">
      <form name="contact" method="POST" className="contact-form" id="contact_form">
          <p className="contact-form__field">
            <label htmlFor="contact_name">Name*</label>
            <input type="text" id="contact_name" name="contact[name]" placeholder="Your name..." required />
          </p>
          <p className="contact-form__field">
            <label htmlFor="contact_email">Email*</label>
            <input type="email" id="contact_email" name="contact[email]" placeholder="Your email..." required />
          </p>
          <p className="contact-form__field">
            <label htmlFor="contact_message">Message*</label>
            <textarea rows="3" id="contact_message" name="contact[message]" placeholder="Your message..." required />
          </p>
          <p className="contact-form__field">
            <button type="submit" className="btn--border">Send</button>
          </p>
      </form>
    </section>
  )
}

export default ContactForm