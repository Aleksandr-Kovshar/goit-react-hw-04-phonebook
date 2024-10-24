import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { object, string, number, date, InferType, boolean } from "yup";
import { FormTemplate, Input, Button } from "./FormAdd.styled";
import { nanoid } from "nanoid";

const validationSchema = object({
  name: string().required(),
  number: number().required(),
});

const initialValues = {
  name: "",
  number: "",
};

const FormAdd = ({ onAddContact }) => {
  const handelSubmit = (value, actions) => {
    console.log(value);
    console.log(actions);
    onAddContact({ id: nanoid(), ...value });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      <FormTemplate autoComplete="off">
        <Input
          type="text"
          name="name"
          placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        ></Input>
        <ErrorMessage name="name" />
        <Input
          type="tel"
          name="number"
          placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        ></Input>{" "}
        <ErrorMessage name="number" />
        <Button type="Submit">Add contact</Button>
      </FormTemplate>
    </Formik>
  );
};

export default FormAdd;
