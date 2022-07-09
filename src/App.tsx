import React from 'react';
import { FunctionComponent } from './components/testComponents/functionComponent';
import { Counter } from './components/testComponents/TestReducer';
import { Todo } from './modules/Todo/Todo';

function App() {

  return (
    <div className="App">
      <Todo />
      {/* <FunctionComponent message="test" /> */}
      <Counter />
    </div>
  );
}

export default App;
