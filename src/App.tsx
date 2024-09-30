import React, { useState } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import TestCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import { TaskFormContext } from './Context'

function Title(): JSX.Element {
    return <h2>Hello World!</h2>
}

function App(): JSX.Element {
  const [showForm, setShowForm] = useState(false)
  const [taskName, setTaskName] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [taskDue, setTaskDue] = useState("")

  function handleClick() {
    console.log("clicked")
    setShowForm(!showForm)
  }
  return(
    <TaskFormContext.Provider value= {{
      taskName, setTaskName,
      taskDesc, setTaskDesc,
      taskDue, setTaskDue
    }}>
      <>
        <Title />
        <TestCard />
        <AddTasks handleClick={handleClick} />
        {showForm ? <TaskForm handleClick={handleClick}/> : null}
      </>
    </ TaskFormContext.Provider>
  )
}

export default App;
