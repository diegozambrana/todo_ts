import { FC } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils/theme';

/* eslint-disable react/jsx-props-no-spreading */
interface ButtonType {
  variant?: string;
  small?: boolean;
  [key: string]: any;
}

const CustomButton = styled.button`
  border: none;
  background: ${(props: ButtonType) =>
    props.variant ? COLOR[props.variant] : COLOR.primary};
  padding: ${(props: ButtonType) => (props.small ? '0 0.5rem' : `0.5rem 1rem`)};
  border-radius: 0.5rem;
  color: ${COLOR.light};
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const Button: FC<ButtonType> = ({ children, ...props }) => (
  <CustomButton {...props}>{children}</CustomButton>
);

Button.defaultProps = { variant: '', small: false };
