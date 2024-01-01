import { useState, useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const controller = new AbortController();

    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res);
        const list = res.data.todos.filter(x => x.completed !== true);
        setTodos(list);
      })
      .catch((err) => {
        throw new Error(err.message);
      });

    return () => controller.abort();

  }, []);

  return (
    <>
      <CreateTodo todoList={todos} setTodos={setTodos}></CreateTodo>
      <Todos todoList={todos} setTodos={setTodos}></Todos>
    </>
  )
}

export default App;
