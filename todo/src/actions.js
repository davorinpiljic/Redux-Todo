export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: task,
  }
};

export const toggleTodo = (key) => {
  return {
    type: TOGGLE_TODO,
    payload: key,
  }
};

export const deleteTodo = (key) => {
  return {
    type: DELETE_TODO,
    payload: key,
  }
}