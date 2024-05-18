import React from "react";

const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    if (!title.trim() || !content.trim()) return alert("제목과 내용 모두 작성해주세요");

    setTodos((prevTodo) => [nextTodo, ...prevTodo]);

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button>등록</button>
    </form>
  );
};

export default TodoForm;
