import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponente from './components/testComponents/ClassComponent';
import { FunctionComponent } from './components/testComponents/functionComponent';
import { Card } from './components/testComponents/Card';

function App() {
  const [showClassComponent, setShowClassComponent] = React.useState(true)
  const [showFunctionComponent, setShowFunctionComponent] = React.useState(true)

  const onChangeFunction = (msg: string) => {
    console.log(`onChangeFunction`, msg);
  }

  const list = [1,2,3,4,5]

  return (
    <div className="App">
      {showClassComponent && <ClassComponente message="hola mundo" />}
      {showFunctionComponent && (
        <>
          <FunctionComponent message='Function Component' onChange={onChangeFunction} />
          <FunctionComponent message='Function Component 02'  onChange={onChangeFunction}/>
        </>
      )}
      <button onClick={() => setShowClassComponent(false)}>ocultar</button>
      <button onClick={() => setShowFunctionComponent(false)}>ocultar Function Componetes</button>

      <Card>
        Hola esto es una prueba
      </Card>
      <Card color="red">
        Hola esto es Rojo
      </Card>
      <ul>
        {list.map((e: number) => <li key={e}>{e}</li>)}
      </ul>
    </div>
  );
}

export default App;
