import Image from "next/image";
import styles from "../styles/GalleryGrid.module.scss";

const images = [
  "/img/parisjetaime1.PNG",
  "/img/parisjetaime2.PNG",
  "/img/parisjetaime3.PNG",
  "/img/parisjetaime4.PNG",
  "/img/parisjetaime5.PNG",
  "/img/parisjetaime6.PNG",
  "/img/parisjetaime7.PNG",
  "/img/parisjetaime8.PNG",
  "/img/parisjetaime9.jpg",
  "/img/parisjetaime10.jpg",
  "/img/parisjetaime11.jpg",
  "/img/parisjetaime13.png",
  "/img/parisjetaime20.webp",
  "/img/parisjetaime21.webp",
  "/img/parisjetaime22.webp",
  "/img/parisjetaime23.webp",
  "/img/parisjetaime24.PNG",
];

export default function GalleryGrid() {
  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryText}>
        <span>PARIS je t’aime</span>
        {/* <span>Capter le réel, s’en inspirer pour créer</span> */}
      </h2>

      <div className={styles.galleryGrid}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
             <Image
                src={src}
                alt={`Paris je t’aime ${i + 1}`}
                width={600}
                height={800} // ratio portrait
                className={styles.image}
                />
          </div>
        ))}
      </div>
    </div>
  );
}
