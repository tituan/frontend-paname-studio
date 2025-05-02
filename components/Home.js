import styles from '../styles/Home.module.scss';
import Image from 'next/image'

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            src="/img/paname-studio-logo-01.png"
            alt="Paname Studio - création digitale - Paris"
            width={1023}
            height={520}
            className={styles.logo}
          />
        </h1>
        <h2 className={styles.subTitle}>
         Création digitale
        </h2> 
      </main>
    </div>
  );
}

export default Home;
