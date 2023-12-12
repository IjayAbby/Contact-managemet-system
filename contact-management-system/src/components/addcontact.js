import React, { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
// Adding new contacts
const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!emailRegex.test(email) || !phoneRegex.test(phone)) {
        alert('Invalid email or phone number format');
        return;
      }
      addContact({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Add Contact</button>
      </form>
    );
  };
export default ContactForm;