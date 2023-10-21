
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';
import styles from './NewTask.module.css';

interface NewTaskProps {
  onAddNewTask: (textTask: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [textTask, setTextTask] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTextTask(value)
  }

  const handleSubmitNewTask = () => {
    if (textTask.length === 0) {
      return alert('This field is required!')
    }
    onAddNewTask(textTask)
    setTextTask('')
  }

  return (
    <section className={styles.section}>
      <input
        required
        type="text"
        placeholder="Add a new task"
        value={textTask}
        onChange={handleChange}
      />
      <button type="submit"
        onClick={handleSubmitNewTask}>Add
        <PlusCircle size={16} />
      </button>
    </section>
  )
}