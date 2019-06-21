import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import InputForm from './InputForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoList />
      <InputForm />
    </div>
  );
}

export default App;
