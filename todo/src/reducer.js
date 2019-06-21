import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
    todo: [
        {
            task: 'dasdf',
            completed: false,
        }
    ],
  }

  

  const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
            const newTodo = { task: action.payload, completed: false}

        return {
          ...state,
          todo: [...state.todo, newTodo]
        };
      
        case TOGGLE_TODO: 
          return {
            ...state,
            todo: state.todo.map((element, key) => action.payload === key ? {...element, completed: !element.completed} : element)
          };
  
      default:
        return state;
    }
  };

  export default ToDoReducer