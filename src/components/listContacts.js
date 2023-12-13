import React from "react";

// ContactList component for displaying contacts
const ContactList = ({ contact, editContact, deleteContact }) => {
    return (
        <div>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={() => editContact(contact)}>Edit</button>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </div>
      );
    
  };
  

export default ContactList;