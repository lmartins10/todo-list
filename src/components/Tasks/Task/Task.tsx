import { Trash } from "@phosphor-icons/react";
import { RoundedCheckbox } from "../../RoundedCheckbox/RoundedCheckbox";
import styles from './Task.module.css';

interface Tasks {
  content: {
    id: string;
    check: boolean;
    text: string;
  }[]
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

export function Task({ content, onDelete, onCheck }: Tasks) {
  return (
    <div className={styles.list}>
      {
        content.map((task) => (
          <div className={task.check ? styles.taskChecked : styles.task} key={task.id}>
              <div className={styles.checkboxWrapper}>
                          <RoundedCheckbox
                checked={task.check}
                onCheck={onCheck}
                taskIdx={task.id}/>

              <span className={styles.text}>
                {task.text}
              </span>
              </div>
            
            <button className={styles.delete}
              onClick={() => onDelete(task.id)}>
              <Trash
                size={24} />
            </button>
          </div>
        ))
      }
    </div>
  )
}