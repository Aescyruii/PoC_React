import React, { useState } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import TestCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

function Title(): JSX.Element {
    return <h2>Hello World!</h2>
}

function App(): JSX.Element {
  const [showForm, setShowForm] = useState(false)

  function handleClick() {
    console.log(showForm)
    setShowForm(!showForm)
  }
  return(
    <>
      <Title />
      <TestCard />
      <AddTasks handleClick={handleClick} />
      {showForm ? <TaskForm /> : null}
    </>
  )
}

export default App;
