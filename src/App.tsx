import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponente from './components/testComponents/ClassComponent';
import { FunctionComponent } from './components/testComponents/functionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponente message="hola mundo" />
      <FunctionComponent message='Function Component' />
      <FunctionComponent message='Function Component 02' />
    </div>
  );
}

export default App;
