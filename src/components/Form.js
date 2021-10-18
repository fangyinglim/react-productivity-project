import React, { useState } from "react";
import TodoList from "./Todolist";
import "./Form.css";

function Form() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(text);
    setTodoList([
      ...todoList,
      { input: text, completed: false, id: new Date().getTime().toString() },
    ]);
    setText("");
  };

  return (
    <div>
      <form>
        <h4>To Do List</h4>
        <input value={text} onChange={inputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          +
        </button>
      </form>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default Form;
