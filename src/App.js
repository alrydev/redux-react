import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { tambah, kurang } from './Redux/Action/ThisIsAction';

function App() {

  const showData = useSelector((state) => state.ThisIsReducer)
  const dispatch = useDispatch()

  console.log(showData.value);

  return (
    <div className="App">
      <div>{showData.value}</div>
      <div>
        <button onClick={() => dispatch(tambah())}>
          Add
        </button>
        <button onClick={() => dispatch(kurang())}>
          Min
        </button>
      </div>
    </div>
  );
}

export default App;
