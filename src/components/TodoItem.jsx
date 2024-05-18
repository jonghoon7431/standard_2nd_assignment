import React from "react";

const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  //수정 삭제
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleTodo = () => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };
  return (
    <div className="todo_item">
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={deleteTodo}>삭제</button>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
};

export default TodoItem;
