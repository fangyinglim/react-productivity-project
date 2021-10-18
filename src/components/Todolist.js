import React from "react";

const Todolist = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo) => {
        return console.log(todo);
      })}
    </>
  );
};

export default Todolist;
