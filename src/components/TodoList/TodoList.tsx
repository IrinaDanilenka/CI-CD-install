import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <h2 className={styles.todoListTitle}>Список задач</h2>
      <div className={styles.todoListContainer}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
