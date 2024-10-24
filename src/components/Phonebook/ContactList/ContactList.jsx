import React, { Component } from "react";
import { List, Item } from "./ContactList.styled";
import Contact from "../Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number}) => (
        <Item key={id}>
          <Contact
            namecontact={name}
            numbercontact={number}
            onClickProps={() => onDeleteContact(id)}
          />
        </Item>
      ))}
    </List>
  );
};



export default ContactList;