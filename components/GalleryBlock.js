import styles from '../styles/GalleryBlock.module.scss';

const images = [
  '/img/sea-02.jpg',
  '/img/sea-01.jpg',
  '/img/sea-03.jpg',
];

export default function GalleryBlock() {
  return (
    <div className={styles.galleryContainer}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={styles.image}
          alt={`Photo ${i}`}
        />
      ))}
    </div>
  );
}
