import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(10)
    .required("O nome precisa está completo."),
  email: Yup.string()
    .email("E-mail inválido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória."),
  passwordConfirm: Yup.string()
    .required("Confirmar senha é obrigatória.")
    .when("password", (password, field) =>
      password
        ? field
            .required()
            .oneOf(
              [Yup.ref("password"), null],
              "Confirmar senha não é igual a Senha."
            )
        : field
    )
});

export default function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Confirmar senha"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
