import { useState } from 'react';
import './App.css';

function App() {
  const initialStateNewTask = {
    title: '',
    isCompleted: false
  }
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState(initialStateNewTask);

  const handleChange = (e) => {
    setNewTask({title: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => [...prev, newTask]);
    setNewTask(initialStateNewTask);
  }

  const completeTask = (e) => {
    const modifyedTasks = tasks.map(task => {
      if (task.title === e.target.value) {
        task.isCompleted = true;
      }
      return task;
    });
    setTasks(modifyedTasks);
  }

  const deleteTask = (e) => {
    const filteredTasks = tasks.filter(task => task.title !== e.target.value);
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask.title} onChange={handleChange}/>
        <button type="submit">Add task</button>
      </form>
      {tasks.map(task => {
        return (
          <div key={task.title} className="task">
            <h1>{task.title}</h1>
            <button value={task.title} onClick={deleteTask}>Delete</button>
            {task.isCompleted ? <p>Completed</p> : <button value={task.title} onClick={completeTask}>Mark as completed</button>}
          </div>
        )
      })}
    </div>
  );
}

export default App;
