import styles from '../styles/Home.module.scss';
import Image from 'next/image'
import HeaderVideo from './HeaderVideo';

function Home() {
  return (
    <div>
      <main className={styles.main}>
  
      <div className={styles.contentOverlay}>
        <h1 className={styles.title}>
          <Image
            src="/img/paname-studio-logo-01.png"
            alt="Paname Studio - création digitale - Paris"
            width={921}
            height={468}
            className={styles.panameStudioLogo}
          />
        </h1>
        <h2 className={styles.subTitle}>Création digitale</h2>
      </div>
        <HeaderVideo />
      </main>
    </div>
  );
}

export default Home;
