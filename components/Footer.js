import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import ModalMentions from './ModalMentions';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          src="/img/logos-1.svg"
          alt="Paname Studio Footer"
          width={787}
          height={718}
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
