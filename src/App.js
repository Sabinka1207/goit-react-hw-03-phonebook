import { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import shortid from "shortid";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Notiflix from "notiflix";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const doubledNames = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedName)
    ).length;
    if (!doubledNames) {
      const contact = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    } else {
      Notiflix.Report.warning(
        "Warning",
        `${name} is already in contacts`,
        "OK"
      );
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      const parcedContacts = JSON.parse(contacts);
      this.setState({ contacts: parcedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          name={this.name}
          number={this.number}
          onSubmit={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
