import React, { useState } from 'react'
import NODataImg from "../../images/NoDataImg.png"

function TodoNameFilter() {

    //^ store Task
    const [taskList, setTaskList] = useState([])

    //^ Completed Task
    const [compltedList, setCompltedList] = useState([])

    //^ Taking Input 
    const [inputTask, setInputTask] = useState("")

    const handleInput = (e) => {
        // console.log(e.target.value);
        if (e.target.value.trim() !== 0) {
            setInputTask(e.target.value);
        }

    }

    const handleTask = (e) => {
        e.preventDefault()
        const result = inputTask.trim();

        if (result && !taskList.includes(result)) {
            setTaskList([...taskList, result])
        }
        setInputTask("")
    }

    // Complted button => move element from task list to compelted liste
    const handleCompltedTask = (item) => {
        // const value = taskList.filter((val) => val === item);
        // console.log(value);
        setCompltedList([...compltedList, item])
        setTaskList([...taskList.filter((val) => val !== item)])
    }

    // Revert Button => move element from  compelted list to task list
    const handleReventTask = (item) => {

        // const value = compltedList.filter((val) => val === item);
        setTaskList([...taskList, item])
        setCompltedList([...compltedList.filter((val) => val !== item)])
    }

    // Priority => set high and low Priority
    const handlePriority = (e, item) => {

        // const value = taskList.filter((val) => val === item);
        const value2 = taskList.filter((val) => val !== item);

        // if (e.target.value === "high") {
        //     setTaskList([...value, ...value2])
        // } else {
        //     setTaskList([...value2, ...value])
        // }

        const updatedTaskList = e.target.value === "high" ? [item, ...value2] : [...value2, item]

        setTaskList(updatedTaskList)
    }

    return (
        <div>
            <h3 className='mt-5'>Todo App </h3>
            <p>Name based operation</p>
           
            <div>
                <form action="">
                    <label htmlFor="task">Add the Task</label> <br />
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={inputTask}
                        placeholder='Enter the task ...'
                        className='form-Input'
                        onInput={handleInput}
                        required
                    />

                    <button onClick={handleTask} className='ms-3 bg-success border-0 text-white px-3 py-2 rounded'>Add Task</button>
                </form>
            </div>

            <div className='d-flex justify-content-center align-item-center'>
                <div className='mt-4 w-25 ms-4 me-3'>
                    {/* {console.log(taskList)} */}

                    <h3 >Task List </h3>

                    {
                        taskList.map((val, index) => {
                            return <ul key={index}>
                                <li key={index}>
                                    {val}

                                    <button
                                        onClick={() => handleCompltedTask(val)}
                                        key={index}
                                        className='ms-3 bg-danger rounded border-0 px-2 py-1 text-white'>Compelted</button>


                                    <select
                                        name="select_Priority" id="select_Priority" className='ms-2 btn-group py-1'
                                        value="select"
                                        onChange={(e) => handlePriority(e, val)}
                                    >

                                        <option value="select" disabled >Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="low">Low</option>
                                    </select>

                                </li>
                            </ul>

                        })
                    }
                    {/* {(taskList.length===0)?<p className='text-danger fst-italic fs-5'>No Data Found...</p>:" "} */}
                    {(taskList.length === 0) ? <img src={NODataImg} alt='No Data found' className='w-100' /> : " "}

                </div>

                <div className='mt-4 w-25 ms-5'>
                    {/* {console.log(taskList)} */}

                    <h3>Complted List </h3>

                    {
                        compltedList.map((val, index) => {
                            return <ul key={index}>
                                <li >{val}
                                    <button
                                        onClick={(e) => handleReventTask(val)}
                                        className='ms-3 bg-warning rounded border-0 px-2 py-1'
                                    >Revent</button>
                                </li>
                            </ul>
                        })
                    }

                    {/* {(compltedList.length===0)?<p className='text-danger fst-italic fs-5'>List is Empty...</p>:" "} */}

                    {(compltedList.length === 0) ? <img src={NODataImg} alt='No Data found' className='w-100' /> : " "}

                </div>

            </div>

        </div>
    )
}

export default TodoNameFilter;
