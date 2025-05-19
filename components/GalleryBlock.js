import Image from 'next/image';
import styles from '../styles/GalleryBlock.module.scss';

const images = [
  '/img/sea-02.webp',
  '/img/sea-01.webp',
  '/img/sea-03.webp',
];

export default function GalleryBlock() {
  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryText}>
        <span>L’image au service de la créativité</span>
        <span>Capter le réel, s’en inspirer pour créer</span>
      </h2>

      {images.map((src, i) => (
        <div key={i} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`Photo ${i}`}
            layout="responsive"
            width={800}
            height={800}
            loading="eager"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}



