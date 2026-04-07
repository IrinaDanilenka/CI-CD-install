import styles from './TodoItem.module.css';

const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemContent}>
        <input
          type="checkbox"
          className={styles.todoItemCheckbox}
        />
        <span className={styles.todoItemText}>
          Пример задачи
        </span>
      </div>
      <div className={styles.todoItemActions}>
        <button className={`${styles.todoItemButton} ${styles.todoItemButtonEdit}`}>
          Редактировать
        </button>
        <button className={`${styles.todoItemButton} ${styles.todoItemButtonDelete}`}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
