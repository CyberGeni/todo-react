import { useState } from 'react';
import { nanoid } from "nanoid";

import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All')
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter} 
    />
  ));

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 bg-gray-200 w-4/5 max-w-3xl rounded">
      <main className=" flex flex-col bg-white border-2 rounded border-gray-300 outline-2 outline-gray-400">
        <h1 className="my-3 text-3xl text-gray-700 text-center font-medium">THINGS TO DO</h1>
        <section className='flex flex-col'>
        <Form addTask={addTask} />
          {taskList}
          <div className="bg-lime-100 px-6 flex justify-between text-sm py-3 text-gray-800">
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <span>{taskList.length} items left</span>
            </div>
            <div className="space-x-1 flex items-center">
              {filterList}
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>
  )
}

export default App
