import { useEffect, useState } from 'react';
import styles from './RoundedCheckbox.module.css'


interface RoundedCheckboxProps {
  checked: boolean;
  onCheck: (index: string) => void;
  taskIdx: string;
}


export function RoundedCheckbox({checked, onCheck, taskIdx}:RoundedCheckboxProps) {
  const [check, setCheck] = useState(checked)

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleCheck = () => {
    setCheck(!check);
    onCheck(taskIdx);
  }


  return (
    <label className={styles.container}>
      <input type="checkbox"checked={check} onChange={handleCheck}  />
      <span className={styles.checkmark}></span>
    </ label>
  )
}