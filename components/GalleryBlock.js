import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/GalleryBlock.module.scss';

const images = [
  '/img/sea-02.webp',
  '/img/sea-01.webp',
  '/img/sea-03.webp',
];

export default function GalleryBlock() {
  return (
    <div className={styles.galleryContainer}>

      {/* Logo cliquable vers la galerie */}
      <div className={styles.logoWrap}>
        <Link href="/gallery" aria-label="Aller à la galerie">
          <Image
            src="/img/image-studio-trans-logo-02.png"
            alt="Image Studio — logo"
            width={140}
            height={140}
            priority
            className={styles.logoImg}
          />
        </Link>
      </div>

      <h2 className={styles.galleryText}>
        <span>L’image au service de la créativité</span>
        <span>Capter le réel, s’en inspirer pour créer</span>
      </h2>
    <div className={styles.imageContainer}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`Photo ${i + 1}`}
            layout="responsive"
            width={800}
            height={800}
            loading="eager"
            className={styles.image}
          />
        </div>
      ))}
    </div>
      

      <div className={styles.seeMoreContainer}>
        <Link href="/gallery" legacyBehavior passHref>
          <a className={styles.btnGallery}>La Galerie</a>
        </Link>
      </div>

    </div>
  );
}
