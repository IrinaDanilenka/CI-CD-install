import styles from './App.module.css';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import Filters from './components/Filters/Filters';
import Statistics from './components/Statistics/Statistics';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className={styles.app}>
        <div className={styles.appContainer}>
          <header className={styles.appHeader}>
            <h1 className={styles.appTitle}>Todo List</h1>
            <ThemeSwitcher />
          </header>
          
          <div className={styles.appContent}>
            <AddTodoForm />
            <Filters />
            <Statistics />
            <TodoList />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
