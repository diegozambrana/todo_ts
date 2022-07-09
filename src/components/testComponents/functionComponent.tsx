import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: orange;
  font-size: 24px;
`

export const FunctionComponent = ({message}: {message: string}) => {
  const [contador, setContador] = useState<number>(0);
  const [contador2, setContador2] = useState<number>(0);
  // const [suma, setSuma] = useState<number>(0);

  const suma = useMemo(() => {
    if(contador % 2 === 0 && contador2 % 2 === 0) {
      return `son numeros pares y sumados son ${contador + contador2}`;
    }
    return 'No son numero pares';
  }, [contador, contador2])

  const execute = () => {
    setContador((c) => c + 1);
  }

  useEffect(() => {
    console.log(`-> Function component montado`);
    return () => {
      console.log(`-> function component desmontado`);
    }
  }, []);

  /* useEffect(() => {
    if(contador % 2 === 0 && contador2 % 2 === 0) {
      setSuma(contador + contador2)
    }
  }, [contador, contador2]); */

  return (
    <div style={{fontSize: 24}}>
      {message}
      <Button onClick={execute}>
        contador {contador}
      </Button>
      <Button onClick={() => setContador2((c) => c + 3)}>
        contador2 {contador2}
      </Button>
      SUMA: {suma}
    </div>
  )
}