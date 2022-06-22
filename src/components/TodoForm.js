import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useRef(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholde="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholde="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add ToDo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
