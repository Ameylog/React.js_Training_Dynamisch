import React, { useState } from 'react'

function DragAndDrop() {

  const [todos, setTodos] = useState([
    {
      taskID: 1,
      task: 'Walk the walk'
    },
    {
      taskID: 2,
      task: 'Talk the talk'
    },
    {
      taskID: 3,
      task: 'Jump the jump'
    }
  ])

  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState({});

  const onDrag = (e, todo) => {
    e.preventDefault();
    setDraggedTask(todo)
  }
  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e) => {

    setCompletedTasks([...completedTasks, draggedTask])
    todos.filter(task => task.taskID !== draggedTask.taskID)
    setDraggedTask({})
  }

  return (
    <div id="draganddrop">

      <h3>Drag and Drop Events</h3><br />
      <div className="todos">

        {todos.map(todo =>

          <div key={todo.taskID}
            draggable
            onDrag={(e) => onDrag(e, todo)}>

            {todo.task}
          </div>

        )}
      </div>

      <div className="done"
        onDrop={e => onDrop(e)}
        onDragOver={(e) => onDragOver(e)}>

        {completedTasks.map((task, index) =>

          <div key={task.taskID}>
            {task.task}
          </div>

        )}

      </div>
    </div>
  )
}

export default DragAndDrop


// Moving forward, HTML5 has four properties to make drag and drop work;
// draggable, ondragstart, ondragover and ondrop.

// Draggable, when added as an attribute to a HTML element, makes the target element to become draggable.

// ondragstart, is called immediately the element dragged. Usually the content to be dragged about is set at this point.

// ondragover, is added as an event listener to the element where the dragged content will be dropped. In other words, it is used to specify where the content is to be dropped.

// ondrop, is called immediately the dragged content is released on the element that contains the ondragover event listener.