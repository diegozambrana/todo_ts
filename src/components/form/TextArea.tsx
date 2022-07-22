import { BaseSyntheticEvent, FC } from 'react';
import styled from 'styled-components';

const TextAreaContainer = styled.div`
  margin-top: 8px;
`;

const TextAreaInput: FC<any> = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  resize: none;
`;

interface TextAreaType {
  value: string;
  onChange(value: string): void;
  placeholder: string;
}

export const TextArea: FC<TextAreaType> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (event: BaseSyntheticEvent) => {
    if (onChange) onChange(event.target.value);
  };
  return (
    <TextAreaContainer>
      <TextAreaInput
        rows={5}
        className="textarea-text"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </TextAreaContainer>
  );
};
