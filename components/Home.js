import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Paname Studio
        </h1> */}
        <img src="./img/paname-studio-logo-01.png" className={styles.panameStudioLogo} alt="Paname Studio" />
      </main>
    </div>
  );
}

export default Home;
