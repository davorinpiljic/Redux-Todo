import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import InputForm from './InputForm'

function App() {
  return (
    <div className="App">
      <TodoList />
      <InputForm />
    </div>
  );
}

export default App;
