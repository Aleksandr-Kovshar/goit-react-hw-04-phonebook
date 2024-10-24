import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { object, string, number, date, InferType, boolean } from "yup";
import FormAdd from "./FormAdd";
import Contact from "./Contact";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from "nanoid";

class Phonebook extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount(pervProps, prevState) {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }



  componentDidUpdate(pervProps, prevState) {
    const nextContact = this.state.contacts;
    const prevContact = prevState.contacts;

    if (nextContact !== prevContact) {
      console.log(
        "обновился todos, записываю в хранилице, сейчас это локал сторедж"
      );
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }

  
  }




  addContact = (data) => {
    console.log(data);
    const newContact = {
      id: data.id,
      name: data.name,
      number: data.number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((onecontact) => onecontact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts} = this.state;
    const narmalizeFilter = filter.toLowerCase();
    return contacts.filter((onecontact) =>
      onecontact.name.toLowerCase().includes(narmalizeFilter)
    );
  };
  
  


  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <FormAdd onAddContact={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default Phonebook;
