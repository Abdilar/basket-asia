import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <header className={styles["app-header"]}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["app-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
