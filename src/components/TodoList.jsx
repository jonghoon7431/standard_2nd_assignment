import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, statusTodo, setTodos }) => {
  return (
    <section>
      <h2>{statusTodo}</h2>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
