/* eslint-disable react/prop-types */
import { addTodos } from "../services/todos"

const CreateTodo = (props) => {
  function insertTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const newTodo = { title: title, description: description, completed: false };
    const filteredList = [...props.todoList, newTodo];
    addTodos(newTodo);
    props.setTodos(filteredList);
  }
  return (
    <div>
      <input style={{ padding: '8px', margin: '10px' }} type='text' id='title' placeholder='title' /> <br />
      <input style={{ padding: '8px', margin: '10px' }} type='text' id='description' placeholder='description' /> <br />
      <button style={{ padding: '5px', margin: '10px' }} type='submit' onClick={insertTodo}>Add a todo</button>
    </div>
  )
}

export default CreateTodo