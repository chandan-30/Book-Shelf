import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const state = useSelector(state => state.books.value);
  console.log(state);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
