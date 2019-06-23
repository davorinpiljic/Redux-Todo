import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import InputForm from './InputForm'
import { Jumbotron } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <span fluid className="todo-inside">
        <h1 className="my-2">Todo List</h1>
        <hr className="my-2" />
        <TodoList />
        <InputForm />
      </span>
    </div>
  );
}

export default App;
