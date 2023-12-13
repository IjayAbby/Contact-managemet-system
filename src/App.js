import React, {useState} from "react";
import ErrorBoundary from "./components/error";
import ContactForm from "./components/addcontact";
import ContactList from "./components/listContacts";
import EditContactForm from "./components/editContact";

// Main App component
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact)));
    setEditingContact(null); // Clear editing contact
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const cancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <ErrorBoundary>
    <div>
      <h2>Contact Manager</h2>
      {editingContact ? (
        <EditContactForm contact={editingContact} updateContact={updateContact} cancelEdit={cancelEdit} />
      ) : (
        <ContactForm addContact={addContact} />
      )}
      {contacts.map((contact) => (
        <ContactList
          key={contact.id}
          contact={contact}
          editContact={() => editContact(contact)}
          deleteContact={deleteContact}
        />
      ))}
    </div>
    </ErrorBoundary>
  );
};
export default App;