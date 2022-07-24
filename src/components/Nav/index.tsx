import { useSelector, useDispatch } from 'react-redux';
import {
  Link as LinkBase,
  useMatch,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import styled from 'styled-components';
import { setActiveUser } from '../../redux/auth';
import { RootState } from '../../redux/configureStore';
import { cleanToken } from '../../utils/auth';

const StyledNav = styled.nav`
  background-color: white;
  padding: 1rem;
  & li {
    display: inline;
    margin-left: 1rem;
    & a {
      text-decoration: none;
    }
  }
`;

const Link = styled(LinkBase)`
  color: ${({ match }: any) => (match ? 'gray' : 'blue')};
`;

/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
export const CustomLink = ({ children, to, props }: any) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li>
      <Link match={match} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export const Nav = () => {
  const dispatch = useDispatch();
  const { activeUser } = useSelector((s: RootState) => s.auth);
  const navigate = useNavigate();
  const onLogout = () => {
    console.log(`onLogout`);
    cleanToken();
    dispatch(setActiveUser(false));
    setTimeout(() => {
      navigate('/login');
    }, 300);
  };
  return (
    <StyledNav>
      {!activeUser && <CustomLink to="/login">login</CustomLink>}
      {!activeUser && <CustomLink to="/register">Register</CustomLink>}
      {activeUser && <CustomLink to="/todo">todo</CustomLink>}
      <CustomLink to="/test">test</CustomLink>
      {activeUser && (
        <li>
          <button onClick={onLogout}>logout</button>
        </li>
      )}
    </StyledNav>
  );
};
