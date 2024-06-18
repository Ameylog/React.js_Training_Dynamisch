import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './Action';
import { v4 } from "uuid";


const AddTodoForm = ({ addTodo, todoInput, setTodoInput }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoInput.title.trim() && todoInput.description.trim()) {
            addTodo({
                id: v4(),
                title: todoInput.title,
                description: todoInput.description
            });
            setTodoInput({ title: '', description: '' });
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit} className='shadow p-4 mt-1'>
                        <h3 className='text-center mb-3'>Todo App</h3>
                        <div className='mb-2'>
                            <label htmlFor="title" className='form-label'>Title</label> <br />
                            <input
                                type="text"
                                id="title"
                                value={todoInput.title}
                                className='form-control'
                                onChange={(e) => setTodoInput({ ...todoInput, title: e.target.value })}
                                placeholder="Enter todo title..."
                            />
                        </div>
                        
                        <div className='mb-2'>
                            <label htmlFor="description" className='form-label'>Description</label> <br />
                        
                            <input
                                type="text"
                                value={todoInput.description}
                                className='form-control'
                                onChange={(e) => setTodoInput({ ...todoInput, description: e.target.value })}
                                placeholder="Enter todo description..."
                            />
                            <button type="submit" className="btn btn-primary bg-primary">Add Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todoInput: state.todoInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        setTodoInput: (input) => dispatch({ type: 'SET_TODO_INPUT', payload: input })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);