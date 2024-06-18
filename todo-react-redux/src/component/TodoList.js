import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "./Action";

const TodoList = ({ todos, removeTodo }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                 
                    <div className="shadow mt-4 px-3">
                        <h3 className="text-center">Todo List </h3>
                        <hr />

                        {
                            todos.length > 0 ?
                                todos.map(todo => (
                                    <li key={todo.id} className="list-group-item">
                                        <h5>Title :- {todo.title}</h5>
                                        <p>Description :-{todo.description}</p>
                                        <div
                                            onClick={() => removeTodo(todo.id)}
                                            className=""
                                        >
                                            {/* Remove */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                            </svg>
                                        </div>
                                        <hr />
                                    </li>
                                ))

                                : <p className="text-center pb-2">No Todo task</p>
                        }
                    </div>
                    {/* </ul> */}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { removeTodo })(TodoList);