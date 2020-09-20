import React, { useState } from 'react'

import '../../styles/components/elements/contact-form.scss'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({type: '', text: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://getform.io/f/df4ceabc-a272-402d-961e-81e80db59706', true);
    xhr.send(data);
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
        setResponse({ type: 'success', text: 'Thanks for your message! I’ll be in touch shortly.' });
      } else {
        setResponse({ type: 'error', text: 'Something went wrong. Please try again later.' });
      }
      setLoading(false);
      setTimeout(() => {
        setResponse({ type: '', text: '' });
      }, 5000);
    };
  }

  return (
    <section className="contact-form__container">
      <form name="contact" className="contact-form" id="contact_form">
          <p className="contact-form__field">
            <label htmlFor="contact_name">Name*</label>
            <input type="text" id="contact_name" name="name" placeholder="Your name..." value={name} onChange={(e)=> {setName(e.target.value)}} required />
          </p>
          <p className="contact-form__field">
            <label htmlFor="contact_email">Email*</label>
            <input type="email" id="contact_email" name="email" placeholder="Your email..." value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          </p>
          <p className="contact-form__field">
            <label htmlFor="contact_message">Message*</label>
            <textarea rows="3" id="contact_message" name="message" placeholder="Your message..." value={message} onChange={(e) => { setMessage(e.target.value) }} required />
          </p>
          <p className="contact-form__actions">
            <span className={`contact-form__response ${response.type}`}>{response.text}</span>
            <button type="submit" onClick={(e) => {handleSubmit(e)}} className="btn--border" disabled={loading}>{loading ? <i className="loading"></i> : 'Send'}</button>
          </p>
      </form>
    </section>
  )
}

export default ContactForm