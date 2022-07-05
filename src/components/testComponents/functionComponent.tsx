import { useState } from 'react';

export const FunctionComponent = ({message}: {message: string}) => {
  const [contador, setContador] = useState<number>(0)
  const execute = () => setContador(contador + 1);
  return (
    <div>
      {message}
      <button onClick={execute}>
        contador {contador}
      </button>
    </div>
  )
}