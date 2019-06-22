import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import InputForm from './InputForm'
import { Jumbotron } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <h1 className="display-3">Welcome to: Todo List</h1>
        <hr className="my-2" />
        <TodoList />
        <InputForm />
      </Jumbotron>
    </div>
  );
}

export default App;
