import { BaseSyntheticEvent, FC } from "react";
import styled from "styled-components";

const InputContainer: FC<any> = styled.div`
  margin-top: 0.5rem;
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
  value: string;
  onChange(e: string): void;
}

export const Input: FC<InputType> = ({ placeholder, value, onChange}) => {
  return (<InputContainer>
    <InputText
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e: BaseSyntheticEvent) => {onChange(e.target.value)}}
    />
  </InputContainer> )
}