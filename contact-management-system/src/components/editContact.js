import React, {useState} from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;


const EditContactForm = ({ contact, updateContact, cancelEdit }) => {
    const [editedName, setEditedName] = useState(contact.name);
    const [editedEmail, setEditedEmail] = useState(contact.email);
    const [editedPhone, setEditedPhone] = useState(contact.phone);
  
    const handleUpdate = (e) => {
      e.preventDefault();
      if (!emailRegex.test(editedEmail) || !phoneRegex.test(editedPhone)) {
        alert('Please enter a valid email and phone number.');
        return;
      }
      updateContact({ ...contact, name: editedName, email: editedEmail, phone: editedPhone });
    };
  
    return (
      <div>
        <h3>Edit Contact</h3>
        <form onSubmit={handleUpdate}>
          <label>
            Name:
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
              required
            />
          </label>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={cancelEdit}>Cancel</button>
        </form>
      </div>
    );
  };
  
  
export default EditContactForm;