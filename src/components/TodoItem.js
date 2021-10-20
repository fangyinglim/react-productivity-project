import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, todoList, setTodoList }) {
  console.log(todo);
  console.log(todoList);
  const { input, completed, id } = todo;
  console.log(completed);

  const completeHandle = () => {
    setTodoList(
      todoList.map((each) => {
        if (each.id === id) {
          return {
            ...each,
            completed: !each.completed,
          };
        } else return each;
      })
    );
  };

  const deleteHandle = () => {
    setTodoList(
      todoList.filter((each) => {
        return each.id !== id;
      })
    );
  };

  return (
    <div key={id} className="list-item">
      <div
        className={completed ? "input-field-inactive" : "input-field-active"}
      >
        {input}
      </div>
      <button onClick={completeHandle} className="list-btn">
        ✔
      </button>
      <button onClick={deleteHandle} className="list-btn">
        ✗
      </button>
    </div>
  );
}

export default TodoItem;
