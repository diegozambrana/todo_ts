import { Button } from "../../components/Button"
import { Input } from "../../components/form/Input"
import { Box } from "../../components/Layout/Box"
import { Container } from "../../components/Layout/Container"
import styled from "styled-components";
import { BaseSyntheticEvent, useRef } from "react";

const RegisterContainer = styled.div`
  background: white;
  padding: 1rem;
  max-width: 550px;
  margin: 0 auto;
`

export const Register = () => {
  const registerRef = useRef<any | undefined>();

  const onRegister = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(registerRef.current);
    const values = Object.fromEntries(formData);
    console.log(values)
  }

  return (
    <Container>
      <RegisterContainer>
        <form onSubmit={onRegister} ref={registerRef}>
          <Input
              type="text"
              inputProps={{name: "first_name"}}
              placeholder="Nombre"
          />
          <Input
              type="text"
              inputProps={{name: "last_name"}}
              placeholder="Apellido"
          />
          <Input
              type="text"
              inputProps={{name: "email"}}
              placeholder="email"
          />
          <Input
              type="password"
              inputProps={{name: "password"}}
              placeholder="Contraseña"
          />
          <Input
              type="password"
              inputProps={{name: "password"}}
              placeholder="Confirmar Contraseña"
          />
          <Box mt={1}>
              <Button type="submit">Registrarse</Button>
          </Box>
        </form>
      </RegisterContainer>
    </Container>
  )
}