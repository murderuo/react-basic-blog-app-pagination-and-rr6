import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_2jkv06l', 'template_45eon0k', form.current, '4wXPDWSyYFeef32QA').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contacts;
