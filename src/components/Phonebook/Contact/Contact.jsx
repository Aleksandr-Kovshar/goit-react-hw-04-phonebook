import React, { Component } from "react";
import { ContainerContact, ContactStyle, ButtonDelete } from "./Contact.styled";


const Contact = ({ namecontact, numbercontact, onClickProps }) => {
  return (
    <ContainerContact>
      <ContactStyle>
        {namecontact}: {numbercontact}
      </ContactStyle>
      <ButtonDelete onClick={onClickProps}>delete</ButtonDelete>
    </ContainerContact>
  );
};







export default Contact;