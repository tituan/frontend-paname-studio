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
      {images.map((src, i) => (
        <div key={i} className={styles.imageWrapper}>
          <Image
            src={src}
            alt={`Photo ${i}`}
            layout="responsive"
            width={800} // ratio carré
            height={800}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}


