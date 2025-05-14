import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import ModalMentions from './ModalMentions';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          src="/img/logos-variantes-paname.webp"
          alt="Paname Studio Footer"
          width={300}
          height={63}
          className={styles.footerImage}
        />
      </div>

      <div className={styles.footerLegal}>
        <ModalMentions />
      </div>

      <p className={styles.footerText}>
        © {new Date().getFullYear()} Paname Studio
      </p>
    </footer>
  );
}
