import React, { useState } from 'react';

// Adding new contacts
const ContactForm = ({ addContact }) => {
  const initialFormState = { id: null, name: '', email: '', phone: '' };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };


  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={contact.name} onChange={handleInputChange} required />
      <label>Email</label>
      <input type="email" name="email" value={contact.email} onChange={handleInputChange} required />
      <label>Phone</label>
      <input type="text" name="phone" value={contact.phone} onChange={handleInputChange} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;