import styles from './Statistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.statisticsTitle}>Статистика</h2>
      <div className={styles.statisticsContainer}>
        <div className={styles.statisticsItem}>
          <span className={styles.statisticsLabel}>Всего задач:</span>
          <span className={styles.statisticsValue}>0</span>
        </div>
        <div className={styles.statisticsItem}>
          <span className={styles.statisticsLabel}>Активных:</span>
          <span className={styles.statisticsValue}>0</span>
        </div>
        <div className={styles.statisticsItem}>
          <span className={styles.statisticsLabel}>Выполнено:</span>
          <span className={styles.statisticsValue}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
