import './App.css';
import {useState} from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  function updateText(e){
    setText (e.target.value);
}

function addTodo() {
  const list = todos;
  list.push(text);
  setTodos(list);
  setText('');
}

return (
  < div className="App" >
    < h1 >Yaponochka</ h1 >
    < input type='text' value={text} onChange={updateText} />
    <button onClick={addTodo}>Жмяк</button>

    <ul>
      {todos.map((todo, index)=>(
        <li key={index}>
          {todo}
        </li>
      ))}
    </ul>

  </ div >
  );
}

export default App;
