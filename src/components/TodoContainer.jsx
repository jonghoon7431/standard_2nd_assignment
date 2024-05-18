import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 0,
    //   title: "title",
    //   content: "content",
    //   isDone: false,
    // },
  ]);

  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <h1>todolist</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todo={workingTodo} statusTodo="working..." setTodos={setTodos} />
      <TodoList todo={doneTodo} statusTodo="done !" setTodos={setTodos} />
    </section>
  );
};

export default TodoContainer;
