import React, {useState} from "react";
import ContactForm from "./components/addcontact";
import ContactList from "./components/listContacts";

// Main App component
const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const editContact = (contact) => {
    // Logic to edit contact
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
    </div>
  );
};
export default App;
