/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { updateTodos } from "../services/todos";

const Todos = (props) => {

  function updateTodo(id) {
    const filteredList = props.todoList.filter(x => x._id !== id);
    props.setTodos(filteredList);
    updateTodos(id);
  }

  return (
    <>
      {props.todoList.map(
        todo =>
          <div style={{ margin: '10px' }} key={todo.title}>
            <h2 >{todo.title}</h2>
            <h3 >{todo.description}</h3>
            <button onClick={() => updateTodo(todo._id)}>Mark as Done</button>
          </div>
      )}
    </>
  );
}

export default Todos;