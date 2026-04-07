import styles from './AddTodoForm.module.css';
import { useRef } from 'react';

const AddTodoForm = () => {
const inputRef = useRef<HTMLInputElement>(null);

const handleSubmit = () => {
  
}

  return (
    <div className={styles.addTodoForm}>
      <h2 className={styles.addTodoFormTitle}>Добавить задачу</h2>
      <form className={styles.addTodoFormContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.addTodoFormInput}
          placeholder="Введите название задачи..."
          ref={inputRef}
        />
        <button
          type="submit"
          className={styles.addTodoFormButton}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
