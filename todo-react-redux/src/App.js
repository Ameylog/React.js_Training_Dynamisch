import React from "react";
import './App.css';
import AddTodoForm from './component/AddTodoForm';
import { Provider } from "react-redux";
import TodoList from './component/TodoList';
import { store } from "./component/TodoReducer";
import store2 from "./component/toolkit_Redux/store2";
import RegistrationForm from "./component/toolkit_Redux/RegistrationForm";
import ShowTodos from "./component/toolkit_Redux/ShowTodos";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>

        <AddTodoForm />
        <TodoList />

      </Provider> */}

      <Provider store={store2}>
  
        <RegistrationForm />
        <ShowTodos />
    
      </Provider>
    </div>
  );
}

export default App;
