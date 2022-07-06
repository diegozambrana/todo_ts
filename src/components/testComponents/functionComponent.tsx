import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: orange;
`

export const FunctionComponent = ({message, onChange}: {message: string, onChange: any}) => {
  const [contador, setContador] = useState<number>(0);
  const execute = () => {
    setContador(contador + 1);
    onChange(`el componente message: ${message}, ha cambiado su valor, ${contador + 1}`);
  }

  useEffect(() => {
    console.log(`-> Function component montado`);
    return () => {
      console.log(`-> function component desmontado`);
    }
  }, []);

  useEffect(() => {
    if(contador) {
      console.log(`-> function component el contador se ha actualizado`, contador)
    }
  }, [contador]);

  return (
    <div>
      {message}
      <Button onClick={execute}>
        contador {contador}
      </Button>
    </div>
  )
}