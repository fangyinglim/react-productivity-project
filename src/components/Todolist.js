import React from "react";
import TodoItem from "./TodoItem";

const Todolist = ({ todoList, setTodoList }) => {
  console.log(todoList);
  return (
    <>
      {todoList.map((todo) => {
        return (
          <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList} />
        );
      })}
    </>
  );
};

export default Todolist;
