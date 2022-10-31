import "./App.css";
import { useState } from "react";
import Todos from "./components/todos";
import Deleted from "./components/deleted";
let id = 0;
function App() {
  const [deleted, setDeleted] = useState([]);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function add() {
    if (todo) {
      setTodos((old) => [...old, { text: todo, id, isSelected: false }]);
      id += 1;
      setTodo("");
    }
  }
  function remove(id) {
    setDeleted((old) => [...old, todos.find((elem) => elem.id === id)]);
    setTodos((old) => old.filter((elem) => elem.id !== id));
  }
  function select(id) {
    setTodos((old) =>
      old.map((elem) => {
        if (elem.id === id) {
          elem.isSelected = !elem.isSelected;
        }
        return elem;
      })
    );
  }
  return (
    <div>
      <div>
        <input value={todo} onChange={(event) => setTodo(event.target.value)} />
        <button onClick={add}>add</button>
      </div>
      <div className="wrapper">
        <div className="todos">
          {todos.map((elem) => (
            <Todos key={elem.id} todo={elem} remove={remove} select={select} />
          ))}
        </div>
        <div className="deleted">
          {deleted.map((elem) => (
            <Deleted key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
