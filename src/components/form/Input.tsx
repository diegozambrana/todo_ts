import { BaseSyntheticEvent, FC } from "react";
import styled from "styled-components";

const InputContainer: FC<any> = styled.div`
  margin-top: 0.5rem;
`
const ErrorElement = styled.li`
  color: red;
`

const InputText = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 0.25rem;
`

interface InputType {
  placeholder: string;
  value?: string;
  onChange?(e: BaseSyntheticEvent): void;
  type?: string;
  errors?: string[];
  [key: string]: any;
}

export const Input: FC<InputType> = ({
  placeholder,
  value,
  onChange,
  type,
  inputProps,
  errors
}) => {
  return (<InputContainer>
    <InputText
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...inputProps}
    />
    {!!errors?.length && (
      <ul>
        {errors.map((error: any) => (
          <ErrorElement key={`${placeholder}_${error}`}>{error}</ErrorElement>
        ))}
      </ul>
    )}
  </InputContainer> )
}