import { createStore } from "redux";
const initialState = {
    todoInput: {
        title: '',
        description: ''
    },
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'SET_TODO_INPUT':
            return {
                ...state,
                todoInput: action.payload
            };
        default:
            return state;
    }
};

  
export const store = createStore(todoReducer);

  export default todoReducer;
  