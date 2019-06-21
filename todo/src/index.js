import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ToDoReducer from './reducer'

const store = createStore(ToDoReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
