
import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import TodoForm from './components/TodoForm';

const App = () => {
  const [ todos, setTodos ] = useState([
    {
      text: '英语',
      complete: false,
    },
    {
      text: '编程',
      complete: false,
    },
    {
      text: '打球',
      complete: true,
    },
  ]);

  const addTodo = (text) => {
    setTodos([ {text, complete: false}, ...todos ]);
  }

  const complete = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => {
            return <Todo key={index} index={index} todo={todo} complete={complete}/>
          })
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
  
}

export default App;