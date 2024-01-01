/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';

const addTodos = (todo) => {
  const controller = new AbortController();

  axios.post('http://localhost:3000/todo', {
    title: todo.title,
    description: todo.description,
    completed: todo.completed
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return () => controller.abort();
}

const updateTodos = (id) => {
  const controller = new AbortController();

  axios.put('http://localhost:3000/completed', {
    id: id
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return () => controller.abort();
}

export { updateTodos, addTodos };