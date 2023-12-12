import React, {useState} from "react";
import ContactForm from "./components/addcontact";

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
    // delete contact
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <ContactForm addContact={addContact} />
    </div>
  );
};
export default App;
