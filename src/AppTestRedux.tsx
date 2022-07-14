import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Todo } from './modules/Todo/Todo';
import { RootState } from './redux/configureStore';
// import { increment, decrement, setValue } from './redux/todo';

function App() {
  const dispatch = useDispatch();
  // const {value} = useSelector((state: RootState) => state.todo);

  return (
    <div className="App">
      {/* <div>value REDUX: {value}</div>
      <div>
        <button onClick={() => {dispatch(increment())}}>incrementar</button>
        <button onClick={() => dispatch(decrement())}>decrementar</button>
        <button onClick={() => dispatch(setValue(0))}>reset</button>
      </div>
      <Todo /> */}
    </div>
  );
}

export default App;
