import { BaseSyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useLogin } from '../../api/login';
import { Button } from '../../components/Button';
import { Input } from '../../components/form/Input';
import { Box } from '../../components/Layout/Box';
import { Container } from '../../components/Layout/Container';
import { setActiveUser } from '../../redux/auth';
import { setToken } from '../../utils/auth';
import { isValid, validate, VALIDATION } from '../../utils/validator';

const LoginContainer = styled.div`
  background: white;
  padding: 1rem;
  max-width: 550px;
  margin: 0 auto;
`;

export const Login = () => {
  const { login, login2, loading } = useLogin();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: [], password: [] });
  const [error, setError] = useState('');
  const fields = {
    username: [VALIDATION.REQUIRED, VALIDATION.EMAIL],
    password: [VALIDATION.REQUIRED],
  };

  const handleOnChange = (event: BaseSyntheticEvent) => {
    console.log(`handleOnchange`);
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onLogin = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(`loginData`, loginData);
    const newErrors: any = validate(loginData, fields);
    setErrors(newErrors);
    if (isValid(errors)) {
      console.log(`----- Los Datos son válidos`);
      // login2(loginData)
      login(loginData)
        .then((response: any) => {
          console.log(`response`, response);
        })
        .catch((error: any) => {
          console.log(`error`, error);
          setError('Usuario o contraseña no válidos');
        });
    }
  };

  return (
    <Container>
      <LoginContainer>
        {error && <Box>{error}</Box>}
        <form onSubmit={onLogin}>
          <Input
            type="text"
            inputProps={{
              name: 'username',
              onBlur: () => {
                console.log(`se hizo un Blur`);
                // LLAMADA API checkIfUserNameIsAvailable(loginData.username)
              },
            }}
            placeholder="Username"
            value={loginData.username}
            onChange={handleOnChange}
            errors={errors.username}
          />
          <Input
            type="password"
            inputProps={{ name: 'password' }}
            placeholder="Password"
            value={loginData.password}
            onChange={handleOnChange}
            errors={errors.password}
          />
          <Box mt={1}>
            <Button type="submit" disabled={loading}>
              Indentificarse
            </Button>
          </Box>
        </form>
      </LoginContainer>
    </Container>
  );
};
