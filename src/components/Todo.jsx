import React from 'react';

const Todo = ({ todo, complete, index }) => {

  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.complete ? 'line-through' : ''}}
    >
      {todo.text}
      <button
        className="submitBtn"
        onClick={() => { complete(index) }}>
        完成
      </button>
    </div>
  );

}

export default Todo;