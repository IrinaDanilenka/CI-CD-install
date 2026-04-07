import styles from './Filters.module.css';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h2 className={styles.filtersTitle}>Фильтры</h2>
      <div className={styles.filtersContainer}>
        <button className={`${styles.filterButton} ${styles.filterButtonActive}`}>
          Все
        </button>
        <button className={styles.filterButton}>
          Активные
        </button>
        <button className={styles.filterButton}>
          Выполненные
        </button>
      </div>
    </div>
  );
};

export default Filters;
