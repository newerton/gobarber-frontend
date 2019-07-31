import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
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
