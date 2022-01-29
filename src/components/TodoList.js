import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from '/Todolist';

function TodoList() {
    const [todos, setTodo] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*&/.test(todo.text)) {
            return;
        }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
    };
    return (
  <div>
      <h1>Whats the Plan for Today?</h1>
      <TodoForm/>
  </div>
  );
}

export default TodoList;
