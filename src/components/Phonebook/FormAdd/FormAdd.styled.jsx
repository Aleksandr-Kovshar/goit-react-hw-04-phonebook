import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
export const FormTemplate = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;
export const Input = styled(Field)`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
