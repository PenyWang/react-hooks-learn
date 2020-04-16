import React, { useState } from 'react';

function TodoForm({addTodo}) {

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>

        <input
          className="input"
          placeholder="请输入待办事项"
          value={value}
          onChange={onChange}
        />

        <button className="submitBtn" type="submit">添加</button>

      </form>
    </>
  );

}

export default TodoForm;