import "../../App.css";
function Todos({ todo, remove, select }) {
  console.log(todo.isSelected ? "selected" : "");
  return (
    <div className="todo">
      <input type="checkbox" onClick={() => select(todo.id)} />
      <h3 className={todo.isSelected ? "selected" : ""}>{todo.text}</h3>
      <button onClick={() => remove(todo.id)}>delete</button>
    </div>
  );
}
export default Todos;
