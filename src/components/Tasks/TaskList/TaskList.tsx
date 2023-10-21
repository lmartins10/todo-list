import clipboard from '../../../assets/Clipboard.svg'
import { Task } from '../Task/Task';
import styles from './TaskList.module.css'

interface Task {
  id: string;
  check: boolean;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onDelete, onCheck }: TaskListProps) {

  const doneTasks = tasks.filter(task => task.check)
  const totalTasks = tasks.length;
  const totalDoneTasks = doneTasks.length;

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.created}>
          Created tasks
          <div className={styles.counter}>{totalTasks}</div>
        </div>
        <div className={styles.done}>
          Done
          <div className={styles.counter}>
            {totalDoneTasks !== 0 ?
              (`${totalDoneTasks} of ${totalTasks}`)
              :
              0
            }
          </div>
        </div>
      </div>
      {
        totalTasks === 0 ? (
          <div className={styles.content}>
            <span>
              <img src={clipboard} alt="clipboard image" />
            </span>
            <div className={styles.text}>
              <p><strong>You don't have any tasks yet</strong></p>
              <p>Add new tasks and organize your to-do items</p>
            </div>
          </div>
        ) : (
          tasks.map(task => (
            <Task
              key={task.id}
              content={[task]}
              onDelete={onDelete}
              onCheck={onCheck} />
          ))

        )
      }
    </section>
  )
}