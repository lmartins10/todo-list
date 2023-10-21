import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { NewTask } from './NewTask/NewTask'
import { TaskList } from './TaskList/TaskList'

import styles from './Main.module.css'

interface Task {
  id: string;
  check: boolean;
  text: string;
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleNewTask(text: string) {
    const newTask = { id: uuidv4(), check: false, text }

    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleCheckBox(id: string) {
    setTasks(tasks.map(task => task.id === id ? 
      { ...task, check: !task.check } : task))
  }

  return (
    <main className={styles.wrapper}>
      <NewTask onAddNewTask={handleNewTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onCheck={handleCheckBox} />
    </main>
  )
}